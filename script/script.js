function textAnalyzer() {
  var text = document.getElementById("text").value;
  var wordCount = 1;
  var charCount = text.length;

  for(var i = 0; i < text.length; i++) {
    if(text.charAt(i) == ' '){
      wordCount++;
    }
  }

  console.log({wordCount: wordCount, characterCount: charCount});
  return {wordCount: wordCount, characterCount: charCount};
}
