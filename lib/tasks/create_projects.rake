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
        @project.first_floor_desc = first_floor[:description]
        @project.second_floor_desc = second_floor[:description] if second_floor && !second_floor[:description].blank?

        # facades
        facades = node.content.match(/(?:Фасады).*?(?=\[\/et_pb_tab\])/m)
        unless facades.blank?
          facade_urls = facades[0].scan(/src="([^"]*)"/).map(&:first)
          facade_urls.map do |facade_url|
            @project.facades.build(image: URI.parse(facade_url))
          end
        end

        # photo
        # photo =
      end


      @project.save
    end


    puts 'Done'
    # puts doc.css("post").length
    #   puts "Items: #{@counter}"
    # File.write(Rails.root.join('lib', 'tasks', 'projects_rev4.xml'), doc.to_xml)
  end
end
