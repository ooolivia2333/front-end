const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setName() {
  const myname = prompt("Please enter your name");
  if (!myname) {
    setName();
  } else {
    localStorage.setItem("name", myname);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}


myButton.onclick = () => {
  setName();
};