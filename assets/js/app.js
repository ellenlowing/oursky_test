var addButton = document.getElementById("addButton");
var text = document.getElementById('text');
addButton.addEventListener("click", function(){

		var tasks = document.getElementById('tasks');
		var taskName = text.value;
		text.value = "";
		var li = document.createElement("li");
		li.setAttribute("class", "task");
		var p = document.createElement("p");
		p.innerHTML = "<div class = \"task-name\">" + taskName + 
							"</div><div class = \"task-right\"><a href=\"#\"><img id = \"task-pause\" src=\"./images/Group 5.png\"></a><a href=\"#\"><img id = \"task-done\" src=\"./images/Group 4.png\"></a></div>";
		/*
		var divTaskName = document.createElement("div");
		divTaskName.setAttribute("class", "task-name");
		divTaskName.innerHTML = taskName;
		var divTaskRight = document.createElement("div");
		divTaskRight.setAttribute("class", "task-right");
		divTaskRight.innerHTML = "<a href="/"><img id = "task-pause" src="./images/Group 5.png"></a><a href="/"><img id = "task-done" src="./images/Group 4.png"></a>";
		
		p.appendChild(divTaskName);
		p.appendChild(divTaskRight);
		*/
		li.appendChild(p);
		tasks.appendChild(li);
});
		
