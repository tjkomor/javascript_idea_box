function editIdea() {
  $("#updateIdea").click(function(){
    var ideaParams = {
      idea:{
        title: $("#newTitle").val(),
        body: $("#newBody").val()
      }
    }

    $.ajax({
      type: "PATCH",
      url: "/api/v1/ideas",
      data: ideaParams,
      success: function(newIdea){
        renderPost(newIdea)
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  });
}
