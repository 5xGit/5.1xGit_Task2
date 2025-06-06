

const rollDice = () => {
    const image1 = document.querySelector(".img1");
    const image2 = document.querySelector(".img2");

    const msg = document.querySelector(".display-msg");
    image1.classList.add("shake");
    image2.classList.add("shake");
    
    setTimeout(() => {
        const randomNumber1 = Math.floor(Math.random() * 6 + 1);
        const randomNumber2 = Math.floor(Math.random() * 6 + 1);

        image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
        image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

        if (randomNumber1 > randomNumber2) {
            msg.innerHTML = "Player 1 wins!";
        } else if (randomNumber2 > randomNumber1) {
            msg.innerHTML = "Player 2 wins!";
        } else {
            msg.innerHTML = "It's a draw!";
        }

        image1.classList.remove("shake");
        image2.classList.remove("shake");  


    }, 400);
}
window.onload = () => {
    setTimeout(() => {
        rollDice();
    }, 500);
};
