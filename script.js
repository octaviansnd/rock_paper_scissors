const rock_img = document.querySelector('#rock_img');
const paper_img = document.querySelector('#paper_img');
const scissors_img = document.querySelector('#scissors_img');
const player_score = document.querySelector('#player_score');
const computer_score = document.querySelector('#computer_score');
const computer_text = document.querySelector('#computer_move');

function makeMove(player_move) {
    let computer_move = Math.floor(Math.random() * 3);

    if (computer_move == 0) {
        computer_text.textContent = "Computer chose Rock!"
        
        if (player_move == 2) {
            let temp_score = parseInt(computer_score.textContent);
            temp_score++;
            computer_score.textContent = temp_score;
            computer_text.textContent += "\nComputer Wins!"
        }

        if (player_move == 1) {
            let temp_score = parseInt(player_score.textContent);
            temp_score++;
            player_score.textContent = temp_score;
            computer_text.textContent += "\nPlayer Wins!"
        }

        if (player_move == 0) {
            computer_text.textContent += "\nIt's a Draw!"
        }

        return;
    }

    if (computer_move == 1) {
        computer_text.textContent = "Computer chose Paper!"

        if (player_move == 0) {
            let temp_score = parseInt(computer_score.textContent);
            temp_score++;
            computer_score.textContent = temp_score;
            computer_text.textContent += "\nComputer Wins!"
        }

        if (player_move == 2) {
            let temp_score = parseInt(player_score.textContent);
            temp_score++;
            player_score.textContent = temp_score;
            computer_text.textContent += "\nPlayer Wins!"
        }

        if (player_move == 1) {
            computer_text.textContent += "\nIt's a Draw!"
        }

        return;
    }

    if (computer_move == 2) {
        computer_text.textContent = "Computer chose Scissors!"

        if (player_move == 1) {
            let temp_score = parseInt(computer_score.textContent);
            temp_score++;
            computer_score.textContent = temp_score;
            computer_text.textContent += " Computer Wins!"
        }

        if (player_move == 0) {
            let temp_score = parseInt(player_score.textContent);
            temp_score++;
            player_score.textContent = temp_score;
            computer_text.textContent += " Player Wins!"
        }

        if (player_move == 2) {
            computer_text.textContent += " It's a Draw!"
        }

        return;
    }
}

rock_img.addEventListener('click', () => makeMove(0));
paper_img.addEventListener('click', () => makeMove(1));
scissors_img.addEventListener('click', () => makeMove(2));