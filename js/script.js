$(document).ready(function(){
    $(".scrollLink").click(function (event){
		event.preventDefault();
		var id  = $(this).attr('href');
		var	top = $("."+id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
    })
});

$(".header__burger").click(()=>{
    $(".header__burger").toggleClass("active")
    $(".nav-header").toggleClass("active")
});
$("#formSubmit").click((event)=>{
    event.preventDefault()
})

