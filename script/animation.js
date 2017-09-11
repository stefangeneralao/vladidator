$(function(){
  $('#button2').click(function() {
      location.reload();
  });
  $("#text").keydown(function(){

    $("#text").keyup(function(){

      value = $("#text").val();
      console.log(value.length+1)
      if(value.length > 0){
        $("#button").fadeIn(500);
      }
      else if(value.length == 0){
        $("#button").fadeOut(500)
      }
    })
  })

  $("#button").click(function(){
    $("#input_content").fadeOut(500,function(){
      var result = textAnalyzer();
      var wordCount = result.wordCount;
      var charCount = result.characterCount;
      var whiteSpaceCount = result.whiteSpaceCount;
      var wordList = result.wordList;
      $("#wordCount").text(wordCount);
      $("#charCount").text(charCount);
      $("#whiteSpaceCount").text(whiteSpaceCount);
      $("#result_list").slideToggle(500,function(){
      });
    });
  });
});
