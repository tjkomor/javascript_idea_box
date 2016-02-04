var renderPost = function(idea) {
  $('#ideas-list').prepend(
    '<div data-id="' + idea.id + '">' +
    '<p' + " id=" + idea.id + " " + '>' +
    '<span class=title>' + idea.title + '</span>' + " " +
    '<span class=body>' + idea.body + '</span>' +
    '<button class="deleteIdeaButton" type="button">' + "Delete" +
    '</button>'+
    '<button class="updateIdeaButton" type="button" >' + "Update" +
    '</button>' + '</p>' + '</div>'
  )
};
