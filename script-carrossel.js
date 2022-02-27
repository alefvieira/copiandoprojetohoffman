document.querySelector(".carousel").addEventListener("wheel", event =>{
    if(event.deltaY > 0){
        event.target.scrollBy(-150,0)
        console.log(event)
    }else{
        event.target.scrollBy(150,0)
        console.log(event)
    }
})
document.querySelector(".carousel").addEventListener("mouseover", event =>{
    console.log("deu certo")
    const bodyEdit = document.querySelector("body")
    bodyEdit.style.overflowY = "hidden"
})
document.querySelector(".carousel").addEventListener("mouseout", event =>{
    console.log("deu certo")
    const bodyEdit = document.querySelector("body")
    bodyEdit.style.overflowY = "visible"
})



$(function(){
    $(".item").hover(function(){

       const bodyEdit = document.querySelector(".conteudo-5")

       console.log("deu certo")
    });
 });