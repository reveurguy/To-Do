//check off specific todo's by clicking
$("ul").on('click',"li",function(){
	$(this).toggleClass("completed");
});
//click on x to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(ev){
	if(ev.which === 13)
	{
		//grabbing new todo text from input
		var inpText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ inpText+ "</li>");

	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});