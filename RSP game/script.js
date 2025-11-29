let userScore = 0;
let compScore = 0;

let userscore = document.querySelector("#userscore")
let compscore = document.querySelector("#compscore")
let newgame = document.querySelector("#newgame")

let userChose;
let compChose;

let choices = document.querySelectorAll(".rps")
let result = document.querySelector("#result")


let compchoice = () => {

   let choices = ["rock", "paper", "scissors"]
   randomindx = Math.floor(Math.random() * 3);
   console.log("computer generates:", choices[randomindx]);
   return choices[randomindx];

}

let userChoice = (choiceId => {
   return choiceId;

});


choices.forEach(choice => {
   console.log(choice);
   choice.addEventListener("click", () => {
      choiceId = choice.getAttribute("id");
      console.log("choice was clicked!", choiceId);
      userChose = userChoice(choiceId);
      compChose = compchoice();
      checkWinner(userChose, compChose);

   })

});


checkWinner = (userChoose, compChoose) => {
   let userWin;
   if (userChoose === compChoose) {
      result.innerText = `It's Draw.Play again!`
      result.style.backgroundColor = '#517664';
      return;               //means it will leave the entire function block
   }

   else {
      userWin = true;
      if (userChoose === "rock") {
         userWin = compChoose === "paper" ? false : true
      }

      else if (userChoose === "scissors") {

         userWin = compChoose === "rock" ? false : true
      }

      else {

         userWin = compChoose === "scissors" ? false : true
      }

   }
   showWinner(userWin);

}


let showWinner = (userWin) => {

   if (userWin === true) {
      userScore++
      userscore.innerText = userScore;
      //we have used userchose bsc it is globally declare and can be accessed
      result.innerText = `You Won!! Your ${userChose} beats ${compChose}`
      result.style.backgroundColor = '#da2929ff';

   }
   else {

      compScore++
      compscore.innerText = compScore;

      result.innerText = `You lose.${compChose} beats Your ${userChose}`
      result.style.backgroundColor = 'grey';

   }
}



newgame.addEventListener("click", () => {
   userScore = 0;            //reset actual value 
   compScore = 0;

   userscore.innerText = 0;       //reset on display only
   compscore.innerText = 0;
   result.innerText = "Pick your move!"      //reset  msg on display
   result.style.backgroundColor = "#517664"

})














