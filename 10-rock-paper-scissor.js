function resetScore() {
      const resetButton = document.querySelector('.reset');
      if(resetButton.innerText === 'Reset Score') {
        resetButton.innerHTML = 'Score Reseted';
        } else {
          resetButton.innerHTML = 'Reset Score';
        }
    }

        const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, tie: 0 };
        updateScore();
      function playGame(move) {

        const random = Math.random();
        let compmove = '';

        if (random < 1/3 && random >= 0) {
          compmove = 'rock';
        } else if (random < 2/3 && random >= 1/3) {
          compmove = 'paper';
        } else {
          compmove = 'scissors';
        }

        if (move === compmove) {
score.tie++
          document.querySelector('.jsresult').innerHTML = "It's a tie!";
          document.querySelector('.jsmove').innerHTML = `YOU-
        <img src="image/${move}-emoji.png" class="move">
        <img src="image/${compmove}-emoji.png" class="move">
        -COMPUTER`;
          

        } else if (move === 'rock' && compmove === 'scissors') {
score.wins++
          document.querySelector('.jsresult').innerHTML = "You win!";
          document.querySelector('.jsmove').innerHTML = `YOU-
        <img src="image/${move}-emoji.png" class="move">
        <img src="image/${compmove}-emoji.png" class="move">
        -COMPUTER`;
          

        } else if (move === 'paper' && compmove === 'rock') {
score.wins++
          document.querySelector('.jsresult').innerHTML = "You win!";
          document.querySelector('.jsmove').innerHTML =  `YOU-
        <img src="image/${move}-emoji.png" class="move">
        <img src="image/${compmove}-emoji.png" class="move">
        -COMPUTER`;

        } else if (move === 'scissors' && compmove === 'paper') {
score.wins++
          document.querySelector('.jsresult').innerHTML = "You win!";
          document.querySelector('.jsmove').innerHTML =  `YOU-
        <img src="image/${move}-emoji.png" class="move">
        <img src="image/${compmove}-emoji.png" class="move">
        -COMPUTER`;
          

        } else {
score.losses++
          document.querySelector('.jsresult').innerHTML = "You lose!";
          document.querySelector('.jsmove').innerHTML =  `YOU-
        <img src="image/${move}-emoji.png" class="move">
        <img src="image/${compmove}-emoji.png" class="move">
        -COMPUTER`;
          

        }
updateScore();
localStorage.setItem('score', JSON.stringify(score)); 
      }

      function updateScore() {
        const scoreElement = document.querySelector('.jsscore');
        scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
      }