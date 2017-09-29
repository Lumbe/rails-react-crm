namespace :import do
  desc "Parse Projects from XML"
  task projects: :environment do
    doc = File.open(Rails.root.join('lib', 'tasks', 'projects_revised.xml')) do |f|
      Nokogiri::XML(f)
    end
    doc.search("post Title").each do |node|
      # puts 'Node: ' + node.parent
      # node.parent.remove if node.content.include?('Каталог') || node.content.include?('дом') || node.content.include?('Акция') || node.content.include?('Дом') || node.content.include?('Подбор') || node.content.blank? || node.content.length > 31
      # puts '#'*90
      puts node.content
      # puts '#'*90
    end
    # File.write(Rails.root.join('lib', 'tasks', 'projects_rev4.xml'), doc.to_xml)
    puts doc.css("post").length
    puts 'Done'
  end
end