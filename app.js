 let amigos = [];

 function adicionarAmigo(){
     campo = document.querySelector('input').value;
     nome = campo != "" ? amigos.push(campo) : alert("Por favor digite um nome valido");
        let lista = document.getElementById('listaAmigos');
        let novoItem = document.createElement('li');
        novoItem.textContent = campo;
        lista.appendChild(novoItem);
     document.getElementById('amigo').value="";
 }

 function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[nomeSorteado];

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = "";
    document.getElementById('listaAmigos').innerHTML = [];
    let item = document.createElement('li');
    item.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultadoLista.appendChild(item);
}












