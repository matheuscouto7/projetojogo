document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById('startGameBtn').addEventListener('click', startGame)
});


function startGame() {
  var input = parseInt(
    prompt(`Escolha seu personagem:\n 
\n1- Geralt:  O Guerreiro 
\n2 -Harold: O Mago 
\n3 -Scarlet: A Bruxa`)
  );

  if (![1, 2, 3].includes(input)) {
    alert("Personagem invalido, tente novamente!");
    input = null;
    document.location.reload();
    return;
  }

  var personagemText = {
    1: `Geralt, nascido em Resília.
Perdeu sua família para um mestre de magia negra chamado Java quando tinha 10 anos. Ao atingir a maioridade, Geralt se tornou um guerreiro de Resília e só pensa em se vingar.`,
    2: `Harold, nascido em um pequeno vilarejo ao norte de Resília.
Nasceu com o dom da magia, porém o seu vilarejo não abriga ninguém capaz de ensiná-lo controlar sua magia, por isso Harold aspira se mudar para a cidade e trabalhar para conseguir um professor que possa ajudá-lo.`,
    3: `Scarlet, origem desconhecida.
Apesar de ter nascido de pais humanos, Scarlet é uma bruxa muito poderosa e atualmente está refugiada em Resília com o objetivo de formar uma sociedade.`
  };

  alert(personagemText[input]);
  document.location.href = "/faseum.html";
}
