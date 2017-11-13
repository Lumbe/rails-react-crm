namespace :import do
  desc "Parse Projects from XML"
  task projects: :environment do
    doc = File.open(Rails.root.join('lib', 'tasks', 'projects_test.xml')) do |f|
      Nokogiri::XML(f)
    end

    doc.search('post').each do |post|
      @project = Project.new

      # parse 'title' and 'area'
      post.search('Title').each do |node|
        str = node.content.match(/(?:"|«)(?<title>.*)(?:"|»)\s(?<area>\d*[,|.]\d*)/)
        area = str[:area].tr(',', '.')
        @project.title = str[:title]
        @project.area = area
      end

      # parse 'description', 'first_floor_plan', 'second_floor_plan'...
      post.search('Content').each do |node|

        # 3D-model - first img tag in Content group
        project_model = node.content.match(/src="(?<model>[^"]*)"/)
        @project.model = URI.parse(project_model[:model]) if project_model && !project_model[:model].blank?

        # description
        description = node.content.match(/(?:Характеристики"\]\n*)(?<match_group>[^\[]*)\n/)
        @project.description = description[:match_group] if description && !description[:match_group].blank?

        # floor plan images
        floor_plans = node.content.match(/(?:Этажные планы).*(?=Фасады)/m)
        unless floor_plans.blank?
          floor_urls = floor_plans[0].scan(/src="([^"]*)"/).map(&:first)
          @project.first_floor_plan = URI.parse(floor_urls.first)
          @project.second_floor_plan = URI.parse(floor_urls.second) unless floor_urls.second.blank?
          @project.third_floor_plan = URI.parse(floor_urls.second) unless floor_urls.third.blank?
        end

        # floor plan description
        first_floor = node.content.match(/(?:ПЛАН\sПЕРВОГО\sЭТАЖА\*?\n)(?<description>.*?)(?:\r*\n){2}/m)
        second_floor = node.content.match(/(?:ПЛАН\sВТОРОГО\sЭТАЖА\*?\n)(?<description>.*?)(?:\r*\n){2}/m)
        first_floor_desc = first_floor[:description].gsub(/^\d\.\s/m, '')
        @project.first_floor_desc = first_floor_desc
        if second_floor && !second_floor[:description].blank?
          second_floor_desc = second_floor[:description].gsub(/^\d\.\s/m, '')
          @project.second_floor_desc = second_floor_desc
        end
        # facades
        facades = node.content.match(/(?:Фасады).*?(?=\[\/et_pb_tab\])/m)
        unless facades.blank?
          facade_urls = facades[0].scan(/src="([^"]*)"/).map(&:first)
          facade_urls.map do |facade_url|
            @project.facades.build(image: URI.parse(facade_url))
          end
        end

        # photos
        photos = node.content.match(/(?:Фото готового дома).*?(?=\[\/et_pb_tab\])/m)
        unless photos.blank?
          photo_urls = photos[0].scan(/src="([^"]*)"/).map(&:first)
          photo_urls.map do |photo_url|
            @project.photos.build(image: URI.parse(photo_url))
          end
        end
      end

      post.search('OneFloor').each do |node|
        if  node.content == '1'
          @project.floors = 1
        end
      end

      post.search('TwoFloors').each do |node|
        if  node.content == '1'
          @project.floors = 2
        end
      end

      post.search('Mansard').each do |node|
        if  node.content == '1'
          @project.mansard = true
        end
      end

      post.search('Terrace').each do |node|
        if  node.content == '1'
          @project.terrace = true
        end
      end

      post.search('Garage').each do |node|
        if  node.content == '1'
          @project.garage = true
        end
      end

      post.search('HiTech').each do |node|
        if  node.content == '1'
          @project.hitech = true
        end
      end

      post.search('FilterCategory').each do |node|
        @project.category =
          case node.content
          when 'zhilye-doma'
            'Жилые дома'
          when 'dachnye-doma'
            'Дачные дома'
          when 'bani-i-sauny-doma'
            'Бани и сауны'
          when 'doma-na-dve-semi'
            'Дома на две семьи'
          when 'oteli-i-gostinitsy'
            'Отели и гостиницы'
          when 'ofis-tsentry'
            'Офис-центры'
          when 'restorany'
            'Рестораны'
          when 'taunhausy'
            'Таунхаусы'
          else
            ''
          end
      end

      @project.save
    end


    puts 'Done'
    # puts doc.css("post").length
    #   puts "Items: #{@counter}"
    # File.write(Rails.root.join('lib', 'tasks', 'projects_rev4.xml'), doc.to_xml)
  end
end
