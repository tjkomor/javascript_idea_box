function deleteIdea() {
  $("[id^=removeIdea]").click(function(){
    var ideaId = this.id.split(/[ ,]+/)[1]

    $.ajax({
      type: "DELETE",
      url: "/api/v1/ideas/" + ideaId,
      success: function() {
        console.log("Item " + ideaId + " successfully deleted")
      },

      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  });
}
