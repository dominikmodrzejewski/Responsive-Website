document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.navbar');
    const allLinkNav = document.querySelectorAll('.nav-link');
    const listNav = document.querySelector('.navbar-collapse');
    function addShadow () {
        if(window.scrollY >= 100){
            nav.classList.add('shadow-bg');
        }
        else {
            nav.classList.remove('shadow-bg');
        }

    }
allLinkNav.forEach(link => link.addEventListener('click', () => listNav.classList.remove('show')));
    




window.addEventListener('scroll', addShadow);

})