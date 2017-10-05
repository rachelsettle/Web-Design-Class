function updateDiv() {
  //Challenge 1
  //document.getElementById("output").innerHTML = "Goodbye, World";

  //Challenge 2
  //var htmlVar = document.getElementById("html").value;
   //document.getElementById("output").innerHTML = htmlVar;

//Challenge 3
 //var y = document.getElementById("output").style.color = "red";


//Challenge 4
//when update div is clicked, the properties specified should show
  var htmlVar = document.getElementById("html").value;
  var cssPropertyVar = document.getElementById("cssProperty").value;
  var cssValueVar = document.getElementById("cssValue").value;

  document.getElementById("output").innerHTML = htmlVar;
  document.getElementById("output").style[cssPropertyVar] = cssValueVar;

  //Challenge 5
  //when update div is clicked, if nothing is inputed, the div should disappear
  if (htmlVar) {
    document.getElementById("output").style.display = "block";
  } else {
    document.getElementById("output").style.display = "none";
  }

}
