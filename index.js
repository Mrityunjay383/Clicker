var count = 0;

//Event Listener

//Single Increment
$(".mainObj").click(function(){
  majorIncrement(1);
});

//Major Increment
$(".btn").click(function(e){
  const classL = e.target.id;

  if(classL === "i10"){
    majorIncrement(10);
  }
  else if(classL === "i50"){
    majorIncrement(50);
  }
  else if(classL === "i100"){
    majorIncrement(100);
  }
});

//Function for Increment
function majorIncrement(n){
  count += n;
  $(".count").text(count);

  anima();
}

//Function for animation
function anima(){
  $(".count").addClass("addAnima");

  document.querySelector(".count").addEventListener("animationend", function() {
    document.querySelector(".count").classList.remove("addAnima");
  })
}
