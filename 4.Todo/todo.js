var li = document.querySelectorAll("li");

li.forEach(function(e){
	e.addEventListener("mouseover", function(){
	e.classList.add("selected");
});

e.addEventListener("mouseout",function(){
	e.classList.remove("selected");
});

e.addEventListener("click",function(){
	e.classList.toggle("done");
});

});

