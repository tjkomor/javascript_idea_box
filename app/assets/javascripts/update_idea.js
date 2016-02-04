function updateIdea() {
  $("#ideas-list").delegate(".editIdeaLink", "click", function(){
    var ideaId = this.id.split(/[ ,]+/)[1]
    var ideaObject = $(this).closest("div")

    document.getElementById(ideaId).contentEditable = true;

    $(ideaObject).append("<button class='saveIdeaButton'>Save</button>")

    $(".saveIdeaButton").click(function(){
      document.getElementById(ideaId).contentEditable = false;

      $(".saveIdeaButton").remove();
      var ideaParams = {
        idea: {
          id: ideaId,
          title: $("#" + ideaId + " > .title").text(),
          body: $("#" + ideaId + " > .body").text()
        }
      }

      $.ajax({
        type: "PUT",
        url: "/api/v1/ideas/" + ideaId,
        data: ideaParams,
        success: function(){},
        error: function(xhr) {
          console.log(xhr.responseText)
        }
      })
    })
  })
}
