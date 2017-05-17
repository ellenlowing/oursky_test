function addTask(){
	var addButton = document.getElementByClassName("addButton");
	var task = document.getElementByClassName('task');
	var tasks = document.getElementByClassName('tasks');
	addButton.onclick = function(){
		tasks.appendChild(task);
	}
}