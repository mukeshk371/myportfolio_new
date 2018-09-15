function activeButton(button) {
	var allActiveButton = document.getElementsByClassName("active");
	for(var i = 0 ; i<allActiveButton.length; i++){
		allActiveButton[i].classList.toggle("active");
	}
	button.classList.toggle("active");
}

function myFunction() {
            var x = document.getElementById("top-nav");
            if (x.className === "sticky") {
                x.className += "responsive";
            } else {
                x.className = "sticky";
            }
        }


