var renderPost = function(idea) {
  $('#ideas-list').prepend(
    '<p>' + idea.title + '</p>' + '<p>' + idea.body + '</p>'
  )
}
