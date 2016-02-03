function postIdea() {
  $("#newIdea").click(function(){
    var ideaParams = {
      idea:{
        title: $("#newTitle").val(),
        body: $("#newBody").val()
      }
    }

    $.ajax({
      type: "POST",
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
