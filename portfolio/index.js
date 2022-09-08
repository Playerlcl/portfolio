

let mouse = document.querySelector(".cursor");
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouse.style.top = e.pageY + 'px'
    mouse.style.left = e.pageX +'px'
}

//cursor grossis

let navlinks = document.querySelectorAll(".nav-link li")


navlinks.forEach(link => {
    link.addEventListener('mouseover', () =>{
        mouse.classList.add("link-grow");
        link.classList.add("hoverd-link")
        console.log("c est ajouter")
    });
    link.addEventListener('mouseleave', () =>{
        mouse.classList.remove("link-grow");
        link.classList.remove("hovered-link")
        
    });



});



/*const changeLink = (linkToChange) => {
  embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};*/


var boutton =document.getElementById('bouton');
boutton.addEventListener('click',() =>{

    /*window.location.href='/Users/mac/Desktop/Projet apprenti web dev/aprenti javascript/conexion service/index.html'*/
    boutton.innerHTML('Conecté')
    console.log("c est cliquer")
})
document.getElementById('vid').addEventListener('click',() =>{

    window.location.href='video.html'
})

document.getElementById('bouton').addEventListener('click', () =>{

    window.location.href='/conexion service/index.html'
})