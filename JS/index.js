

const handOptions = {
    "rock":"/assets/Rock.png",
    "paper":"/assets/Paper.png",
    "scissors":"/assets/Scissors.png"    
}


//Creating a function for user choice 
const pickUserHand = (hand)=>{
    console.log(hand);
//onClick hide current page
let hands = document.querySelector(".hands");
hands.style.display = "none";
// Show the Results
let contest = document.querySelector(".contest")
contest.style.display = "flex";
//Set the User Picked 
document.getElementById("userPickImage").src = handOptions[hand];
 let cpHand = pickComputerHand();


}
const pickComputerHand = ()=> {
    let hands = ["rock","paper","scissors"]
    let cpHand = hands[Math.floor(Math.random()*3)]
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    return cpHand;

}

