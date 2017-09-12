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
  var characterCountNoWhiteSpace = characterCount - whiteSpaceCount;

  // Most occuring character.
  var mostOccurringCharacter = getMostOccurringChar(text);

  // Returning JSON-object.
  var jsonobject = {
    text: text,
    wordCount: wordList.length,
    characterCount: characterCount,
    whiteSpaceCount: whiteSpaceCount,
    characterCountNoWhiteSpace: characterCountNoWhiteSpace,
    wordList: wordList,
    mostOccurringCharacter: mostOccurringCharacter
  };

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

function getMostOccurringChar(text) {
  var charCounts = {};

  // Count every character and update charCounts.
  var focusChar;
  for(var i = 0; i < text.length; i++) {
    focusChar = text.charAt(i);

    if(focusChar == ' '){ // If focusChar is space, then continue.
      continue;
    } else if(charCounts[focusChar]) { // If focusChar is already mapped.
      charCounts[focusChar]++;
    }else{ // If focusChar is not mapped.
      charCounts[focusChar] = 1;
    }
  }

  // Find most occurred.
  var mostOccurredChar = '';
  var maxCount = 0;
  for(var char in charCounts) {
    if(charCounts[char] > maxCount) {
      mostOccurredChar = char;
      maxCount = charCounts[char];
    }
  }

  // Wrap result in an object.
  var result = {
    mostOccurredChar: mostOccurredChar,
    count: maxCount
  }

  return mostOccurredChar;
}
