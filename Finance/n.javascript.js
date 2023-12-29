$(document).ready(function(){
    $("#home").mouseenter(function(){
        $(".para").slideDown()
    })
})
$(document).ready(function(){
    $("#home").mouseleave(function(){
        $(".para").slideUp()
    })
})  

gsap.to("#btgp",{
    x:300,
    delay:1,
    duration:2
})
gsap.to("#clts",{
    x:300,
    delay:1,
    duration:2,
    rotate:"360"
})


  