//Check off secific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

//click on x to delete todo
$("ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text'").on("keypress",function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");

	}
 
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
}); 
