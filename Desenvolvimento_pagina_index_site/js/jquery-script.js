//efeito de esconder formulário de cadastro

$(document).ready(function(){

  $("#botao-cadastrar").click(function(){
      $("#form-cadastrar").slideToggle("slow");
      $("#section-login").slideToggle("slow");

      $("#botao-logar").show();
      $("#botao-cadastrar").hide();
    })
    
    $("#botao-logar").click(function(){
      $("#form-cadastrar").slideToggle("slow");
      $("#section-login").slideToggle("slow");
      
      $("#botao-cadastrar").show();
      $("#botao-logar").hide();
  })

});