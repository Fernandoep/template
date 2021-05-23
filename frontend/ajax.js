$ (document) .ready ( function  () {  
    $ ( "#Save" ) .click ( function  () {  
        var  person =  new  Object ();  
        person.nome = $ ( '#name' ) .val ();  
        person.email = $ ( '#emaill' ) .val ();  
        person.telefone = $ ( '#telefone' ) .val();
        person.conteudo = $ ( '#conteudo' ) .val();
        console.log('Person ==>', person);
        $.post('https://portifolio-jk.herokuapp.com/login', person, function (data) {  
            console.log(data);  

   

        document.getElementById('formulario').reset();
        });  
    });  
});  

let enviar = () => {
    var  person =  new  Object ();  
    person.nome = $('#nome') .val ();  
    person.email = $('#emaill') .val ();  
    person.telefone = $('#telefone') .val();
    person.conteudo = $('#conteudo') .val();

    $.post('https://portifolio-jk.herokuapp.com/login', person, function (data) {  
        console.log('Sucesso ==>', data);  
    });  

    
    alert('Mensagem enviada com sucesso, em breve entrarei em contato')
    
    
    
    }






