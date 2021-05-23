function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




// Troca de classe para desktop //
var largura = screen.width
var altura = screen.height

if (largura >= 700 || altura >= 700) {

  var el = document.getElementById('imagem')
  var ell = document.getElementById('texto')
  var elll = document.getElementById('corpo')



  el.className = 'imagem-dekstop'
  ell.className = 'texto-desktop'
  elll.className = 'corpo-desktop'


}



// Bem vindo //
partText = "";
var index=-1;
function escrever(text) {   

    index++;

    if(index<text.length){    
      partText += (text.charAt(index));   
      document.getElementById("iniciar-titulo").innerHTML = partText;
    }  
    else
    {
      clearInterval(timer);
    }

  }


var timer= setInterval(function(){escrever("Olá, seja bem vindo!")}, 200);



// Apresentalção //
partTextt = "";
var indexx=-1;
function escreverr(textt) {   

    indexx++;

    if(indexx<textt.length){    
      partTextt += (textt.charAt(indexx));   
      document.getElementById("termino-titulo").innerHTML = partTextt;
    }  
    else
    {
      clearInterval(timerr);
    }

  }


var timerr= setInterval(function(){escreverr("Meu nome é Fernando, aqui vou falar um pouco sobre mim.")}, 200);




// Funções onclick redes sociais //
var facebook = document.getElementById('facebook')
var linkedin = document.getElementById('linkedin')
var whatsapp = document.getElementById('whatsappp')


function facebookk() {
  window.location = "https://www.facebook.com/feep3";
}
function linkedinn() {
  window.location = "https://www.linkedin.com/in/fernando-espadas-paranhos-ba5745165/";
}
function whatsappp() {
  window.location = "https://api.whatsapp.com/send?1=pt_BR&phone=5511972326000";
}



