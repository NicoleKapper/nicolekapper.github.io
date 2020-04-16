




$("small-title").click(function(){
  $("small-title").toggleClass("one");
  $("small-title").html("I like <b>Green</b>!");
});

document.getElementById("small-title").addEventListener("click", function(){
  document.getElementById("img").innerHTML = "Hello World";
});
