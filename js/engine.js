/* Arquivo Javascript */

//Setor de declarações


var coracao = "Xís";

var estrela = "Bola";

var vetor = new Array();

var atual;

var posicao;

var empate = "talvez";

var jogadas;

//Funçoes


function zera(){
//ZERA CAMPOS

	var i = 0;
	for(i=0;i<9;i++){
		valor = 40 + i;
		vetor[i] = valor;
		//alert("vetor["+i+"] = "+valor);
	}	

	var i = 0;
	for(i=0;i<9;i++){

	    document.getElementById("campo"+i).innerHTML = "<input type=\"button\" value=\"\" style=\"width:100px;height:100px;float:left; margin-bottom:5px;margin-right:2px;margin-left:2px;\" onclick=\"verifica(this.parentElement.id)\" title=\"campo"+i+"\" />";
	
	}
	
	atual = coracao;
	jogadas = 0;
} //FIM ZERA()


function verifica(campoatual){

	if(atual == coracao){
	    document.getElementById(campoatual).innerHTML = "";
	    

		
		jogadas = jogadas +1;

		posicao = campoatual.replace(/[^\d]+/g,'');
		//alert("Campo: "+posicao);
		vetor[posicao] = atual;
		document.getElementById(campoatual).innerHTML = "<img src=\"img/xis.png\" title=\"posição "+posicao+" tem: "+vetor[posicao]+"\" />";
		
		quemganhou();
		
		

		atual = estrela;
	
	}else{
		document.getElementById(campoatual).innerHTML = "";
	    //Senão atual é igual a estrela então...
	    
		
		
		jogadas = jogadas +1;

		posicao = campoatual.replace(/[^\d]+/g,'');
		//alert("Campo: "+posicao);
		vetor[posicao] = atual;
		document.getElementById(campoatual).innerHTML = "<img src=\"img/circulo.png\"  title=\"posição "+posicao+" tem: "+vetor[posicao]+"\"/>";	
		
		quemganhou();
		
			

		atual = coracao;

	}



}//FIM VERICA

function quemganhou(){
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Verifica se coração ganhou 

	if(vetor[0] == coracao && vetor[1] == coracao && vetor[2] == coracao){
		alert("Jogador X venceu!");
		desabilitarClick();
		empate = "nao";
		
	}
	if(vetor[3] == coracao && vetor[4] == coracao && vetor[5] == coracao){
		alert("Jogador X venceu!");
		desabilitarClick();
		empate = "nao";
	}
	if(vetor[6] == coracao && vetor[7] == coracao && vetor[8] == coracao){
		alert("Jogador X venceu!");
		desabilitarClick();
		empate = "nao";
	}
	

	if(vetor[0] == coracao && vetor[3] == coracao && vetor[6] == coracao){
		alert("Jogador X venceu!");
		desabilitarClick();
		empate = "nao";
	}
	if(vetor[1] == coracao && vetor[4] == coracao && vetor[7] == coracao){
		alert("Jogador X venceu!");
		desabilitarClick();
		empate = "nao";
	}
	if(vetor[2] == coracao && vetor[5] == coracao && vetor[8] == coracao){
		alert("Jogador X venceu!");
		desabilitarClick();
		empate = "nao";
	}


	if(vetor[0] == coracao && vetor[4] == coracao && vetor[8] == coracao){
		alert("Jogador X venceu!");
		desabilitarClick();
		empate = "nao";
	}

	if(vetor[2] == coracao && vetor[4] == coracao && vetor[6] == coracao){
		alert("Coração venceu!");
		desabilitarClick();	
		empate = "nao";
	}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//				0 1 2
//				3 4 5
//				6 7 8
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Verifica se estrela ganhou 

	if(vetor[0] == estrela && vetor[1] == estrela && vetor[2] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}
	if(vetor[3] == estrela && vetor[4] == estrela && vetor[5] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}
	if(vetor[6] == estrela && vetor[7] == estrela && vetor[8] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}
	

	if(vetor[0] == estrela && vetor[3] == estrela && vetor[6] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}
	if(vetor[1] == estrela && vetor[4] == estrela && vetor[7] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}
	if(vetor[2] == estrela && vetor[5] == estrela && vetor[8] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}


	if(vetor[0] == estrela && vetor[4] == estrela && vetor[8] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}

	if(vetor[2] == estrela && vetor[4] == estrela && vetor[6] == estrela){
		alert("Jogador Bola venceu!");
		desabilitarClick();
		empate = "nao";
	}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	if(empate != "nao"){
			empatou();
	}

}

function empatou(){

	if(jogadas == 9){
				alert("Fim de Jogo!!!\n EMPATE!");
				desabilitarClick();
			}
}


function desabilitarClick(){

	var nodes = document.getElementById("tudo").getElementsByTagName("*");
	var i;
	for(i=0;i<nodes.length;i++){
	
	    nodes[i].disabled = true;
	
	}

}