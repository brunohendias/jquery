/* Seletores e metodo de encadeamento */

$(document).ready(function(){
	$('a').css('color', '#0f0')
	.on('click', ()=>{
		$('#texto')
			.html('Metodo de encadiamento')
			.css('color', '#a00')
	});
});

/* 	$("") SELETORES

	"#texto" = seleciona por ID, 
	".texto" = eleciona por CLASS, 
	"div" = seleciona por TAG,
	":input" = seleciona todos os INPUTs
	":button" = INPUT do tipo BUTTON
	"div, a" = seleciona dois ou mais elementos
	"div span" = seleciona por DESCENDENCIA seleciona o span
	"li > ul" = elemento FILHO de li seleciona o ul
	"#first + a" = primerio IRMÃO "#first ~ a" seleciona TODOS os IRMÃOS
	"a:first" = PRIMEIRO elemento
	"a:last" = ULTIMO elemento
	"a:not(a:last)" = seleciona todos MENOS o ultimo
	"a:even" = seleciona todos na POSIÇÃO PAR 0,2,4...
	"a:odd" = seleciona todos na POSIÇÃO IMPAR 1,3,5...
	"a:eq(1)" = elemento na POSIÇÃO 1
	"a:gt(1)" = elementos MAIORES que 1
	"a:lt(1)" = elementos MENORES que 1
	"a:contains(ola 1)" = elemento que contem TEXT ola 1
	"a:empty" = elemento com TEXTO VASIO
	"a:has(strong)" = elemento que CONTEM tag strong
	"a[name=menu]" = elemento que contenha ATRIBUTO name com valor menu
	"a[name!=menu]" = ATRIBUTO name que não tenha menu  
	"a[name|=menu]" = todos que COMEÇE com menu
	"a[name$=js]" = todos que TERMINE com js

*/
/* MANIPULANDO atributos
	
	$('#img').attr({ metodo de encadeamento passando chave valor
		src: "novo/novaImagem.jpg",
		title: "novo titulo da imagem"
	});

	$('#img').removeAttr("src"); = REMOVE o ATRIBUTO src do elemento

	$('#img').addClass('destaque'); = ADICIONA a CLASS destaque ao elemento
	$('#img').hasClass('destaque'); = verifica se EXISTE a CLASS no elemento
	$('#img').removeClass('destaque') = REMOVE a class

	$('#img').toggleClass('destaque'); = ALTERNADOR se existe a class remova, senão adicione 

*/
/* 	MANIPULANDO DOM 

img = $('<img/>', {
	src:'img/ricardo.png',
	title:'filha do papai'
}); cria a tag img e seta os atributos, $('body').append(img);

	APPEND = adiciona o conteudo no FINAL
	PREPEND = adiciona no INICIO
	AFTER = FORA e APOS o elemento
	BEFORE = FORA e ANTES do elemento
	WRAP = ENVOLVE o alvo com elemento passado
	CLONE =  COPIA o elemento somando a quantidade ja existentes

	$('h1').remove('#titulo'); = DELETA todos os h1 com id titulo
	$('ul').empty(); = LIMPA oque tiver dentro do elemento
	$('ul').unwrap(); = REMOVE o elemento que estava ENVOLVENDO

*/
/*	MANIPULANDO CSS

	$('img').css({
		width: '300px',
		background: '#0f0',
		border: '3px solid #000';
	});

	$('img').css('height'); = pega o valor do elemento
	$('img').innerWidth(); = LARGURA da imagem
	$('img').outerWidth(); = LARGURA total da imagem e borda

*/
/*
	MANIPULANDO EVENTOS
	
	$('img').on('evento', function());
	.on('click') = CLICK
	.on('dbclick') = CLICK DUPLO
	.on('mouseover') = PASSAR MOUSE
	.on('mouseout') = TIRAR O MOUSE
	.on('mousedown') = MANTER PRECIONADO
	.on('mouseup') = DESPRECIONAR
	.on('mousemove') = POSIÇÃO DO MOUSE

	EVENTO TECLADO
	.on('keyup') = RECUPERA E REESCREVE
	.on('keydown') = RECUPERA MAIS NÃO ATUALIZA
	.on('focus') = FOCAR O ELEMENTO
	.on('blur') = REMOVE O FOCU QUANDO TIRA O MOUSE

	EVENTO FORMULARIO

	$('from').submit(); validar formulario
	$(':select').change(); verifica alteração
	$('textarea').select(); verifica seleção de algo

*/
/*	EFEITOS

	$('img').hide(3000); ESCONDE ELEMENTO ('slow, normal, fast')
	$('img').show(); MOSTRA ELEMENTO
	$('img').toggle(); ALTERNA ENTRE MOSTRAR E ESCONDER

		OPACITY

	$('div').fadeOut(1000); SOME  ELEMENTO
	$('div').fadeIn(1000);	MOSTRA ELEMENTO
	$('div').fadeTo(1000, 0.3); INTENCIDADE OPACITY	
	$('div').fadeToggle(1000);	ALTERNA EM MOSTRAR E SUMIR

		SLIDE
		
	$('div').slideUp(1000); SLIDE baixo para cima 
	$('div').slideDown(1000);	SLIDE cima para baixo
	$('div').slideToggle(1000);	ALTERNA

*/
/*	FORMULARIO

	MARCAR OU DESMARCAR CHECKBOX
	$('.toogle').change(function(){
		//se estiver marcado selecione todos os checkbox
		if(this.checked){
			$(':checkbox[name=tecnologia').attr('checked', 'checked');
		}else{
			//desmarca todos os checkebox com name tecnologia
			$(':checkbox[name=tecnologia').removeAttr('checked');			
		}
	})

*/