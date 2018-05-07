// ustawić i wyswietlic początkową wartość wszystkich procedur na 0;
setTo(0)

//dodać event na buttony

$('button').on('click' , function(){
//sprawdzić wartość butonu
	if($(this).val()==="plus"){
		//zaznaczyć <span> obok tego butonu
			var finalScore=$(this).prev().val();
			//podnieść wartość wyniku o 1			
			finalScore++;
			$(this).prev().val(finalScore);
			// podmienic wynik końcowy
		$(this).prev().text(finalScore);
		}
		//sprawdzić wartość butonu
	if($(this).val()==="minus")	{
		//zaznaczyć <span> obok tego butonu
			var finalScore=$(this).next().val();
			//pomniejszyć wartość wyniku o 1
		finalScore--;
		$(this).next().val(finalScore);
		// test zaznaczenia ->
		$(this).next().text(finalScore);		
		}
});
				// oznaczanie procedur kolorami biały / czerwony / zielony
 
$('.firstCol ').on('click' , function(){
			//czerwony
	if (	$(this).hasClass('red')	=== false && $(this).hasClass('green') === false  ){
		$(this).addClass('red');
	}
			// zielony
	else if ( $(this).hasClass('red')=== true ){
		$(this).removeClass('red');
		$(this).addClass('green');
	}
			// biały
	else if ( $(this).hasClass('green')=== true) {
		$(this).removeClass('green');
	};		
});


function setTo(n){
	parseInt($(".wynik").val(n).html(n));
}




