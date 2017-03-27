//Include jQuery - Done in HTML

//Select all divs and give them a purple background
$("div").css("background", "purple");

//Select divs with calss "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

//Select all divs with id "third" and give them an orange border
$("div#third").css("border", "10px solid orange");

//Select FIRST div ONLY and give it font color PINK
//$("div").eq(0).css("color", "pink"); - MY SOLUTION
%$("div:first-of-type").css("color", "pink");