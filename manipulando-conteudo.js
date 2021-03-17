var p = document.getElementsByTagName('p');

 // p
//Retorna o conteudo ---> alert(p[0].innerHTML);


p[0].innerHTML = 'manipualado via JS ';


for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado com sucesso: '+ i;
}