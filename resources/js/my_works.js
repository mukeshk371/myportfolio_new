function loadProject(type) {
	var workNode = document.getElementById('websites-list');
	while (workNode.firstChild) {
	    workNode.removeChild(workNode.firstChild);
	}
	var workList = filterWorkList(type);
	for (var i = 0; i < workList.length; i++) {
		var li = createLi(workList[i]);
		workNode.appendChild(li);
	}
}

function createLi(information) {
	var websiteLink = document.createElement("BUTTON");
	websiteLink.classList.add("webpage-btn");

	var websiteA = document.createElement("A");
	websiteA.setAttribute("href", information.link);
	websiteA.setAttribute("target", "_blank");
	websiteA.appendChild(websiteLink);
	websiteLink.innerHTML = "Website";

	var githubLink = document.createElement("BUTTON");
	githubLink.classList.add("webpage-btn");
	githubLink.innerHTML = "GitHub";

	var githubA = document.createElement("A");
	githubA.setAttribute("href", information.githubLink);
	githubA.setAttribute("target", "_blank");
	githubA.appendChild(githubLink);

	var image = document.createElement("IMG");
	image.setAttribute("src", information.pic);
	image.setAttribute("alt", information.description);

	var figure = document.createElement("FIGURE");
	figure.classList.add("website-photo");
	figure.appendChild(image);

	var heading = document.createElement("H4");
	heading.innerHTML = information.description;

	var list = document.createElement("LI");
	list.appendChild(heading);
	list.appendChild(figure);
	list.appendChild(githubA);
	list.appendChild(websiteA);
	
	return list;
}

function filterWorkList(workType) {
	if (workType == "ALL") {
		return workList;
	}
	var filteredArray = [];
	for(var i = 0; i < workList.length; i++) {
		var type = workList[i].type;
		for (var j = 0; j < type.length; j++) {
			if (type[j] == workType) {
				filteredArray.push(workList[i]);
			}
		}
	}
	return filteredArray;
}