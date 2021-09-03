// pour selectionne  partie de site 
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const tmenuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

//bouton haut //

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
	{
		document.getElementById("haut").style.display = "block";
	} 
	else 
	{
		document.getElementById("haut").style.display = "none";
	}
}

function retourHaut() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
} 


//connexion//

const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

