//NAVBAR : faire disparaitre la navbar au scroll
//typed : pour faire apparaitre et disparaitre du texte

//NAVBAR
let lastScrollTop = 0
navbar = document.getElementById('navbar')

window.addEventListener('scroll', function(){
    const scrollTop= window.pageTOffset ||
    this.document.documentElement.scrollTop

    if(scrollTop > lastScrollTop) {
        navbar.style.top="-50px"
    } else {
        navbar.style.top="0"
    }
    lastScrollTop = scrollTop
})

// Typed : utilise la librairie :  https://github.com/mattboldt/typed.js/ 
var typed = new Typed('.typed', {
    strings: ['Ingénieur réseau de formation, je me suis reconverti dans la programmation, développeur web depuis 2ans, C# /ASP / .net depuis 1 an.Spécialisé en intégration de maquettes, dans le développement d’interfaces mobiles et web, je vous accompagne depuis la création de votre site web, sa mise en ligne, son optimisation et évolution dans le temps.'],
    smartBackspace: true, // Default value
    typeSpeed : 20,
    loop:false
  });