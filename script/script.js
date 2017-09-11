function textAnalyzer() {
  // Fetch text from textArea.
  var text = document.getElementById("text").value;

  // Convert text to string array of words.
  var wordList = textToList(text);

  // Word counter.
  var wordCount = wordList.length;

  // Character counter.
  var characterCount = text.length;

  // White space count.
  var whiteSpaceCount = countWhiteSpaces(text);

  // Character count without white spaces.
  var characterWithoutWhiteSpace = characterCount - whiteSpaceCount;

  // Returning JSON-object.
  var jsonobject = {
    wordCount: wordList.length,
    characterCount: characterCount,
    whiteSpaceCount: whiteSpaceCount,
    characterWithoutWhiteSpace: characterWithoutWhiteSpace,
    wordList: wordList,
  };

  console.log(jsonobject);

  return jsonobject;
}

function textToList(text) {
  var tempWord = "";
  var wordList = [];

  // Iterate every character.
  for(var i = 0; i < text.length; i++) {
    // Fetch char to be handled.
    var focusChar = text.charAt(i);

    // If focusChar is space,
    // Then add tempWord to wordList,
    // Else add character to tempWord.
    if(text.charAt(i) == ' '){
      if(tempWord.length > 0){
        wordList.push(tempWord);
        tempWord = "";
      }
    }else{
      tempWord += focusChar;
    }
  }

  // Check trailing word.
  // If trailing tempWord,
  // Then add word to wordList.
  if(tempWord.length > 0) {
    wordList.push(tempWord);
  }

  // Return wordList.
  return wordList;
}

function countWhiteSpaces(text) {
  var whiteSpaceCounter = 0;
  for(var i = 0; i < text.length; i++) {
    if(text.charAt(i) == ' ') {
      whiteSpaceCounter++;
    }
  }

  return whiteSpaceCounter;
}
