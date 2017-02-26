var oldButton = document.getElementById("old");
var newButton = document.getElementById("new");
var oldImg = document.getElementById("old-img");
var newImg = document.getElementById("new-img");
var contact = document.getElementById("google");
var contactDetail = document.getElementById("contact-detail");

var activeColour = "#fff";
var inactiveColour = "#002966";

window.onload = function () {
    oldButton.style.color = oldButton.style.borderBottomColor = activeColour;
}

oldButton.onclick = function() {
    oldButton.style.color = oldButton.style.borderBottomColor = activeColour;
    newButton.style.color = newButton.style.borderBottomColor = inactiveColour;
    newImg.style.display = "none";
    oldImg.style.display = "block";
}

newButton.onclick = function () {
    newButton.style.color = newButton.style.borderBottomColor = activeColour;
    oldButton.style.color = oldButton.style.borderBottomColor = inactiveColour;
    oldImg.style.display = "none";
    newImg.style.display = "block";
}

contact.onclick = function () {
    if (contactDetail.style.visibility == "hidden") {
        contactDetail.style.visibility = "visible";
        contactDetail.style.opacity = "100";
    }
    else {
        contactDetail.style.visibility = "hidden";
        contactDetail.style.opacity = "0";
    }
}
