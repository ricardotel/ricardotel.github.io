const  theWorld =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="movimiento de canales de agua y tierras">
    <meta name="keywords" content="recava o construccion de canales y nivelacion de terreno">
    <title>drenajes & drenajes</title>
    <link rel="stylesheet" href="drenajes.css">
    <link rel="icon" href="img/icon-page.svg">
</head>
<body>
    <div class="contain__float">
        <a rel="noopener noreferrer" href="https://wa.me/+573217579952?" title="contactanos" target="_blank" class="float"></a>
        <div class="mesage"></div>
    </div>
    <section class="header">
        <header class="contain__logo"><img src="img/logo.svg" draggable="false" class="header__logo" alt="">
        </header>
        <div class="header__enter">
            <h2>
                <span id="header__enterprise" class="header__enterprise">Drenajes & Drenajes</span>
            </h2>
        </div>
        <div class="header__links">
            <ul>
                <li class="link list__service"><a href="#servicios" class="font">Servicios</a></li>
                <li>
                    <ul class="list__complete">
                        <li class="list"><a href="#service__terrains">Nivelacion de terrenos</a></li>
                        <li class="list"><a href="#service__canalsecond">Construccion de canales secundarios y tercearios</a></li>
                        <li class="list"><a href="#service__semidome">Nivelacion de terreno en semidomo</a></li>
                        <li class="list"><a href="#service__jarillon">Construccion de jarillon</a></li>
                        <li class="list"><a href="#service__recava">Recava de canales</a></li>
                    </ul>
                </li>
            </ul>
            <a rel="noopener noreferrer" href="https://wa.me/+573217579952?" target="_blank" class="link">Atencion al cliente</a>
            <a rel="noopener noreferrer" target="_blank" href="#" class="link">Nuestras oficinas</a>
        </div>
    </section>
    <div class="fondo">
    </div>
    <section class="vehicles">
        <h4 class="nivelacion">nivelacion de terreno</h4>
        <a href="img/before1.jpeg" draggable="true"><div class="vehicles__heavy vehicles__heavy--backhoe"></div></a>
        <a href="img/after3.jpeg" draggable="true"><div class="vehicles__heavy vehicles__heavy--bulldozer"></div></a>
        <a href="img/after1.jpeg" draggable="true"><div class="vehicles__heavy vehicles__heavy--nivelator"></div></a>
    </section>
    <section class="space" id="servicios">
        <p class="space__text" ><strong class="tee">En drenajes y drenajes</strong> Los movimientos de tierras y excavaciones son los trabajos previos que se realizan en el terreno antes de la ejecución de una obra. Son necesarios en todo proyecto de cimentación, explanación de terrenos y obra civil.</p>
        <div  class="contain__silueta">
            <img src="img/silueta.svg" class="space__silueta"  alt="">
            <hr>
        </div>
    </section>
    <nav class="services" >
        <div class="service service__terrain" id="service__terrains" >
            <p class="justify "><strong>nivelacion de terreno </strong></p>
            <div    class="terrains__image terrain" alt=""></div>
        </div>
        <hr>
        <div class="service service__canalsecond" id="service__canalsecond" >
            <div  class="terrains__image canalsecond" alt=""></div>
            <p class="justify "><strong>construccion de canales secundarios y tercearios</strong></p>
        </div>
        <hr>
        <div class="service service__semidome" id="service__semidome" >
            <p class="justify "><strong>nivelacion de terreno en semidomo </strong></p>
            <div  class="terrains__image semidome" alt=""></div>
        </div>
        <hr>
        <div class="service service__jarillon" id="service__jarillon" >
            <div     class="terrains__image jarillon" alt=""></div>
            <p class="justify "><strong>construccion de jarillon </strong></p>
        </div>
        <hr>
        <div class="service service__recava" id="service__recava" >
            <p class="justify "><strong>recava de canales </strong></p>
            <div     class="terrains__image recava" alt=""></div>
        </div>
        <hr>
    </nav>
    <footer class="footer">
        <div class="logo__empresa"></div>
        <a rel="noopener noreferrer" href="https://wa.me/+573217579952?" target="_blank" class="header__enterpris header__enterprise">DRENAJES & DRENAJES</a>
        <div class="hidden" draggable="false">
            <div class="header__enter header__entre">
                <h2>
                    <a rel="noopener noreferrer" href="https://wa.me/+573217579952?" target="_blank">si quieres saber sobre nuestros servicios toca <span>el logo o</span> aqui para contactarnos +57 321 7579952</a>
                </h2>
            </div>
        </div>
    </footer>
    <script src="drenajes.js"></script>
    
    <style>
    
    @import url('https://fonts.googleapis.com/css2?family=Fjord+One&family=Fruktur:ital@0;1&family=Teko&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: arial;
    font-size: 20px;
    scroll-behavior: smooth;
}
html{
    animation: aparecer forwards  .9s ;
    overflow-x: hidden;
}
body{
    position: relative;
}
.header{
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    background-color: #181a3b;
    overflow: hidden;
}
.header__logo{
    height: 800px;
    width: 800px;
    transform: translate(-150px, -150px);
    position: absolute;
    left: 0;
}
.header__links{
    display: flex;
    justify-content: space-between;
    gap: 30px;
}
.header__enter{
    background-color: #181a3b;
    padding: 20px 40px;
    text-align: center;
    justify-content: center;
    display: flex;
    border-radius: 3px;
}
.header__enterprise{
    font-size: 75px;
    font-weight: 100;
    color: #ff6500;
    font-family: teko;
    text-align: center;
    transition: filter .1s;
    background: transparent;
    filter:drop-shadow( 3px 3px white);
}
.header__enterpris{
    color:#ff6500 ;
    font-weight: 500;
    height: 186px ;
    width: 190px;
    font-family: teko;
    font-size: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.link{
    color: white;
    text-decoration: none;
    position: relative;
    font-size: 25px;
}
ul{
    list-style: none;
}
a{
    color: white;
    text-decoration: none;
}
.list__complete{
    position: absolute;
    display: none;
    gap: 10px;
}
.list__service{
    position: relative;
    gap: 10px;
}
.font{
    font-size: 25px;
}

li:hover + li ul li {
    display: block;
    gap: 10px;
    z-index: 3;  
}
li:hover{
    background-color: rgb(87, 7, 7);
}
.header   ul:hover li .list__complete{
    display: flex;
    flex-direction: column;
}
.list{
    transition: transform .2s;
    border-radius: 10px;
    padding: 3px 5px;
}
body > section.header > div.header__links > ul > li:nth-child(2) > ul > li > a{
    font-size: 21px;
}
.list:hover{
    transform: scale(1.1);
}
.list__complete:hover{
    z-index: 4;
    display: block;
}
.list__service:hover{
    background-color: #181a3b;
}
.fondo{
    background-image: url(img/zaxisy.jpg);
    width: 100%;
    height: 882px;
    filter: grayscale(.2);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1 ;
}
.terrain{
    background-image: url(img/after1.jpeg);
    background-position: center;
    background-size:cover ;
}
.jarillon{
    background-image: url(img/jarillon2.jpeg);
    background-position: center;
    background-size:cover ;
}
.canalsecond{
    background-image: url(img/tunel.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
}
.recava{
    background-image: url(img/harillon.jpeg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
}
.fondo::after{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.539);
    content: " ";
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;  
    filter: brightness(100%); 
}
.vehicles{
    width: 100%;
    height: 80vh;
    background-color: #181a3b;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
}
.vehicles__complete{
    width: 100%;
    height: 70vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.vehicles__heavy{
    height: 400px;
    width: 400px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    position: relative;
    transition: .5s;
}
.vehicles__terra{
    height: 250px;
    width: 250px;
    background-color: crimson;
    border-radius: 40px;
}
.after{
    background-color: blue;
    position: relative;
}
.before{
    background-color: crimson;
    position: relative;
}
.heavy__motors{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}
.after:hover::after{
    content: "despues";
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    background-image: url(img/gallery__picture11.jpg);
   
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.before:hover::before{
    content: "antes";
    color: white;
    background-image: url(img/corsa.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
   
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.terrains__image{
    width: auto;
    height: 450px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px 10px #181a3b;
    margin-right: 30px ;
}
.title{
    font-family: fruktur;
}
.tee{
    font-size: 30px;
}
.services{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.service{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
    padding: 0 10px;
    height: 400px;
    width: 100%;
}
.nivelacion{
    position: absolute;
    color: white;
    top: 20px;
}
.justify{
    text-align: justify;
    font-size: 25px;
    font-weight: 500px;
}
strong{
    font-size: 30px;
}
form{
    z-index: 3;
}
.vehicles__heavy--backhoe:hover::after{
    content: "antes";
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff66006d;
    border-radius:10px;
}
.terrains__image{
    width: 700px;
    height: 350px;
    right: 10px;
}
.justify{
    position: relative;
    width: 600px;
}
.vehicles__heavy--backhoe::after{
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    top: 0%;
    bottom: 0;
    left: 0;
    right: 0;
}
.vehicles__heavy--backhoe{
    background-image:url(img/before1.jpeg);
    position: relative;
}
.vehicles__heavy--bulldozer:hover::after{
    background-color: #ff66006d;
    border-radius: 10px;
    opacity: 0.5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "durante";
}
.vehicles__heavy--bulldozer::after{
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
    top: 0%;
    bottom: 0;
    left: 0;
    right: 0;
}
.vehicles__heavy--bulldozer{
    background-image:url(img/after3.jpeg);
    position: relative;
}
.vehicles__heavy--nivelator:hover::after{
    content: "despues";
    color: white;
    opacity:.1 ;
    background-color: #ff66006d;
    border-radius: 10px;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vehicles__heavy--nivelator::after{
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0%;
    bottom: 0;
    left: 0;
    right: 0;
}
.vehicles__heavy--nivelator{
    background-image:url(img/after1.jpeg); 
    position: relative;  
}
.contain__logo{
    overflow: hidden; 
    width: 500px;
    height: 500px;
} 
h2{
    color: black;
    font-size: 30px;
}
.space{
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.9;
    padding: 30px;
    height: 90vh;
}
.space__text{
    height: 50vh;
    width: 50%;
    margin-top: 400px;
    font-size: 30px;
    text-align: justify;
}
.contain__silueta{
    overflow: hidden;
    height: 600px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cont__buttons{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
}
.butt{
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-family: fruktur;
    border: none;
    outline: none;
    perspective: 10px;
}
.butt:not(:active){
    background-color: #ffffff;
    transform: translate(-5px ,5px);
    box-shadow: 5px -5px;
}
.space__silueta{
    height: 70vh;
    filter: drop-shadow(15px 15px #ff6500);
    margin-right: 25px;
}
.footer{
    height: 40vh;
    width: 100%;
    background-color:#181a3b;
    align-items: center;
    justify-content: space-around;
    display: flex;
    margin: 0;
    overflow: hidden;
}
.float{
    background-image: url(img/whatsapp.svg) ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 70px;
    height: 70px;
    position: inherit;
    background-color: #45c556;
    border-radius: 50%;
}
.contain__float{
    position: fixed;
    bottom: 100px;
    right: 90px;
    z-index: 100;
}
#rpg{
    flex-direction: column;
}
#rpg a{
color: #ff6500;
filter: drop-shadow(1px 1px gold);
}
.footers{
    height: 200px;
    width: 200px;
    color: white;
    text-align: justify;
    font-size: 19px;
    justify-content: center;
    align-items: center;
    display: flex;
}
.footer__formulary{
    width: 500px;
    height: 90%;
    background-color: #181a3b;
    color: white;
    font-weight: 700;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
}
.buttons{
    background-color: #444cf7;
    color: white;
    font-weight: normal;
    font-size: 1rem;
    padding: .8em 5px;
    border: none;
    border-radius:10px ;
    cursor: pointer;
    transition: transform .5s;
}
.logo__empresa{
    height: 600px;
    width: 600px;
    background-image: url(img/logo.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 10px;
}
.hidden{
    width: 700px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.info{
    border: none;
}
.cont{
    position: relative;
    --color: #5757575e;
    margin: 10px;
}
.container{
    margin-top: 20px;
    display: grid;
    gap: 2em;
}
.info{
    border: none;
    outline: none;
    border-radius: 10px;
    background-color:white;
    width: 100%;
    height: 40px;
    bottom: 0;
    transform: translateY(10px);
    color:#706c6c;
    font-size: 1rem;
    padding:  .6rem .3rem;
    border-bottom: #000 solid 1px var(--color);
    font-family: 'Baumans', cursive;
}
.touch{
    color: var(--color);
    cursor: pointer;
    top: 0;
    left: 5px;
    position: absolute;
    transform: translateY(10px);
    transform-origin:left bottom;
    transition: .5s, color .3s;
}
p{
    font-size: 20px;
}

.header__entre > .hidden{
    display: flex;
    width: 100%;
    flex-direction: column;
}
.header__entre > h2{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    gap: 100px;
}
.logo__empresa{
    width: 500px;
    height: 500px;
    transform: translateX(-10px);
}
.hidden{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
}
.header__entre{
    padding: 0;
    transform: translateX(10px);
}
h2 a{
    text-align: justify center;
    width: 400px;
}
@keyframes aparecer{
    0%{opacity: 0;

    }
    100%{
        opacity:1;
    }

}
    </style>
</body>
</html>

`
document.write("theWorld")
