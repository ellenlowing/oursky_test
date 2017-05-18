var checkChildNodes = function(listItemsNum){
	var ul = document.getElementById("tasks");
	var container = ul.parentNode;
	if(listItemsNum!==0){
		console.log(ul.childNodes);
		container.setAttribute("style", "background-color: #FFFFFF");
	}
}


var addButton = document.getElementById("addButton");
var listItemsNum = 0;



addButton.addEventListener("click", function(){
	checkChildNodes();
	listItemsNum++;
	var tasks = document.getElementById('tasks');
	var text = document.getElementById('text');
	var taskName = text.value;
	text.value = "";
	var li = document.createElement("li");
	li.setAttribute("class", "task");
	var p = document.createElement("p");
	var taskNameDiv = document.createElement("div");
	taskNameDiv.textContent = taskName;
	taskNameDiv.setAttribute("class","task-name");
	var taskButtonDiv = document.createElement("div");
	taskButtonDiv.setAttribute("class", "task-right");
	var taskPauseButton = document.createElement("a");
	taskPauseButton.setAttribute("href", "#");
	var taskPauseImg = document.createElement("img");
	taskPauseImg.setAttribute("id","task-pause");
	taskPauseImg.setAttribute("src", "./images/Group 5.png");
	taskPauseButton.appendChild(taskPauseImg);
	taskButtonDiv.appendChild(taskPauseButton);
	var taskDoneButton = document.createElement("a");
	taskDoneButton.setAttribute("href", "#");
	var taskDoneImg = document.createElement("img");
	taskDoneImg.setAttribute("id","task-done"+"-"+listItemsNum);
	taskDoneImg.setAttribute("src", "./images/Group 4.png");
	taskDoneImg.addEventListener("click",function(){
		var li = this.parentNode.parentNode.parentNode.parentNode;
		li.setAttribute("style", "background-color: #f8f8f8; color:#d9d9d9;");
		var p = this.parentNode.parentNode.parentNode;
		p.removeChild(p.lastChild);
	});
	taskDoneButton.appendChild(taskDoneImg);
	taskButtonDiv.appendChild(taskDoneButton);
	p.appendChild(taskNameDiv);
	p.appendChild(taskButtonDiv);
	li.appendChild(p);
	if(listItemsNum == 1){
		tasks.appendChild(li);
	}else{
		tasks.insertBefore(li, tasks.childNodes[1]);
	}
	
});


var clicked = false;
var pauseButton = document.getElementById("task-pause");

/*pauseButton.addEventListener("click", function(){
	if(!clicked){
		var x = window.setTimeout()
		clicked = true;
	}
});

*/
