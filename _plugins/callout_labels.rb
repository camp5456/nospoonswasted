Jekyll::Hooks.register :documents, :post_render do |doc|
  next unless doc.output_ext == ".html"

  doc.output = doc.output.gsub(
    '<blockquote class="callout-resources">',
    "<blockquote class=\"callout-resources\">\n    <h3 class=\"callout-label\">Further Reading</h3>"
  )
end
