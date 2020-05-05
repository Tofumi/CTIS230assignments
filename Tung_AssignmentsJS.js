// Step 1: Get the element we want to listen to and affect and store it away for use

myparagraph = document.getElementById("fakenews");
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("surpriseimagecontainer");
theOtherButton = document.getElementById("theOtherButton");
myparagraph2 = document.getElementById("nvidiademand");
textentry = document.getElementById("myinput");
headlinechange = document.getElementById("headlinechange");
otherHeadLineChange = document.getElementById("title");

// Step 2: Add event listener

myparagraph.addEventListener("click", onClick);
myparagraph.addEventListener("mouseout", onMouseOut);
thebutton.addEventListener("click", onButtonClick);
theOtherButton.addEventListener("click",onOtherButtonClick);
textentry.addEventListener("change", onChange);
otherHeadLineChange.addEventListener("click", onSecondClick);

// Step 3: Write the event listener

function onSecondClick(){
  otherHeadLineChange.innerHTML = "Have a Nice Day!";
}


function onChange() {
    newtext = myinput.value;
    headlinechange.innerHTML = newtext;
}

function onClick(){
  myparagraph.style.color = "black";
  myparagraph.style.fontSize = "2em";
}

function onMouseOut(){
  myparagraph.style.color = "";
  myparagraph.style.fontSize = "";
}


function onButtonClick(){
  otheritem.style.display =  "block";
}

function onOtherButtonClick(){
  myparagraph2.style.color = "red";
}
