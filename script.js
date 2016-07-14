window.onload  = function(){

	function gerarCor(){
				//uma cor hexadecimal é formada por # + no minimo 3 valores
				//ex: #333 , #444 , #102 , #069 , #fff , #ff0 e etcc

				var x = Math.floor(Math.random()*9); // vai gerar numeros aleatorios entre 0 e 9

				var y = Math.floor(Math.random()*9); // vai gerar numeros aleatorios entre 0 e 9

				var z = Math.floor(Math.random()*9); // vai gerar numeros aleatorios entre 0 e 9

				document.getElementById("seila").style.background = "#"+x+""+y+""+z;
			
				document.getElementById("cor").innerHTML= "#"+x+""+y+""+z;
			}

	//pega o elemento html que tem como tag <span> o [0] quer dizer que eu vou pegar o primeiro span
	//e aplico uma função a ele quando for clicado 
	document.getElementsByTagName("span")[0].onclick = function(){
		var repeticao = setInterval(gerarCor, 600);

	}
	

}