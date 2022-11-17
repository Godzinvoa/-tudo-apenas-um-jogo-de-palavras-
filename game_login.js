function adduser(){
    nome1=document.getElementById("Jogador1").value;
    nome2=document.getElementById("Jogador2").value;
    localStorage.setItem("J1", nome1);
    localStorage.setItem("J2", nome2);
    window.location = "game_page.html";
}
