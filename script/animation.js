$(function(){
    $("#button").click(function(){
        $("#input_content").fadeOut(500,function(){
            var result = textAnalyzer();
            
            var wordCount = result.wordCount;
            var charCount = result.characterCount;
            var whiteSpaceCount = result.whiteSpaceCount;
            var wordList = result.wordList;
            
            $("#result_list").slideToggle(500,function(){
                $("#wordCount").text(wordCount);
                $("#charCount").text(charCount);
                $("#whiteSpaceCount").text(whiteSpaceCount);
            });
        });
    });
});