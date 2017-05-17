var addButton = document.getElementById("addButton");
var text = document.getElementById('text');
addButton.addEventListener("click", function(){

		var tasks = document.getElementById('tasks');
		var taskName = text.value;
		text.value = "";
		var li = document.createElement("li");
		li.setAttribute("class", "task");
		var p = document.createElement("p");
		var start = 0;
		var seconds = setInterval(function(){
			start += 1;
			
		}, 1000);
		p.innerHTML = "<div class = \"task-name\">" + taskName + 
							"</div><div class = \"task-right\"><a href=\"#\"><img id = \"task-pause\" src=\"./images/Group 5.png\"></a><a href=\"#\"><img id = \"task-done\" src=\"./images/Group 4.png\"></a></div> " + start + " seconds";
		

		li.appendChild(p);
		tasks.appendChild(li);
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
