        //Convert JSON to string and get score
        let score = JSON.parse(localStorage.getItem('score'));

        //If statement to check score is null or not
        if (score === null) {
            score = {win : 0,
            losses : 0,
            ties :0};
        }

        scorefun();

        //Creat a functon for playerMove and computerMove
        function game(playermove) {
            const computermove = move();

            let result = '';

            if (playermove === 'scissors') {
                if (computermove === 'rock') {
                    result = 'You lose';
                } else if (computermove === 'paper') {
                    result = 'You win';
                } else if (computermove === 'scissors') {
                    result = 'Tie';
                }

            } else if (playermove === 'paper') {
                if (computermove === 'rock') {
                    result = 'You win';
                } else if (computermove === 'paper') {
                    result = 'Tie';
                } else if (computermove === 'scissors') {
                    result = 'You lose';
                }
                
            } else if (playermove === 'rock') {
                if (computermove === 'rock') {
                    result = 'Tie';
                } else if (computermove === 'paper') {
                    result = 'You lose';
                } else if (computermove === 'scissors') {
                    result = 'You win';
                }
            }

            if (result === 'You win') {
                score.win +=1
            } else if (result === 'You lose') {
                score.losses +=1
            } else if (result === 'Tie') {
                score.ties +=1
            }
            //Store gameScore in local stogare in JSON
            localStorage.setItem('score', JSON.stringify(score))

            scorefun();

            document.querySelector('.js-results').innerHTML = result;
            
            //Get images and print them on player move
            document.querySelector('.js-moves').innerHTML = `You
                <img src="${playermove}-emoji.png" class="move-icon">
                <img src="${computermove}-emoji.png" class="move-icon">
                Computer`;

            //document.querySelector('.js-moves').innerHTML = `Your move ${playermove} - Computer move ${computermove}`;
        }

        //Creat function to show score on html page
        function scorefun () {
            document.querySelector('.js-score') .innerHTML = `wins: ${score.win},
                losses: ${score.losses},  ties: ${score.ties}`;
        }

        //Creat logic of the game
        function move() {
            const randomNumber = Math.random();
            let computermove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computermove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computermove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computermove = 'scissors';
            }
            return computermove;
        }