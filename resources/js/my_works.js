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
	var image = document.createElement("IMG");
	image.setAttribute("src", information.pic);
	image.setAttribute("alt", information.description);

	var a = document.createElement("A");
	a.setAttribute("href", information.link);
	a.appendChild(image);

	var figure = document.createElement("FIGURE");
	figure.classList.add("website-photo");
	figure.appendChild(a);

	var list = document.createElement("LI");
	list.appendChild(figure);

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