$(".header__burger").click(()=>{
    $(".header__burger").toggleClass("active")
    $(".nav-header").toggleClass("active")
});
$("#formSubmit").click((event)=>{
    event.preventDefault()
})

