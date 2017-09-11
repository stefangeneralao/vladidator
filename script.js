function textAnalyzer(text) {
  var wordCount = 0;
  var charCount = text.length;

  for(var i = 0; i < text.length; i++) {
    if(text.charAt(i) == ' '){
      wordCount++;
    }
  }

  return {wordCount: wordCount, characterCount: charCount};
}
