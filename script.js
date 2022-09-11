//NAVBAR : faire disparaitre la navbar au scroll
//typed : pour faire apparaitre et disparaitre du texte / Librairie typed.js
//COMPTEUR LIVE : pour animer les compteurs des formations
//Animations des éléments à l'apparition : 

// *************** libraies : **************
// compteur : typed.js
// Apparaitre les éléments : aos  : https://michalsnik.github.io/aos/


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

// COMPTEUR LIVE 
let compteur = 0 // variable qui sert uniquement à ne lancer qu'une seule fois la fonction

$(window).scroll(function(){

    const top = $('.counter').offset().top - window.innerHeight

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
                countTo = $this.attr('data-count') //va chercher dans le HTML le total à atteindre
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 4000,
                easing :'swing',
                step: function(){
                   $this.text(Math.floor(this.countNum)) 
                },
                complete: function(){
                    $this.text(this.countNum)
                }
            })
        })
        compteur = 1
    }
})

//Animations des éléments à l'apparition : 
AOS.init();



// video 1 2h24.  en gros