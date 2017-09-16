$(function(){
  $("#text").keydown(function(){
    $("#text").keyup(function(){
      loader = document.getElementById('loader');
      loader.style.opacity = "1";
      var result = textAnalyzer();
      var wordCount = result.wordCount;
      var charCount = result.characterCount;
      var whiteSpaceCount = result.whiteSpaceCount;
      var wordList = result.wordList;
      var characterCountNoWhiteSpace = result.characterCountNoWhiteSpace;
      var mostOccurringCharacter = result.mostOccurringCharacter;
      $("#wordCount").text(wordCount);
      $("#charCount").text(charCount);
      $("#characterCountNoWhiteSpace").text(characterCountNoWhiteSpace);
      $("#whiteSpaceCount").text(whiteSpaceCount);
      $("#mostOccurringCharacter").text(mostOccurringCharacter);
      setTimeout(function(){
        loader.style.opacity = "0";
      },1000);
    })
  })
})
