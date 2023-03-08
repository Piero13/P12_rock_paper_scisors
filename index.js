const choices = [
    {
        name: "rock",
        src: "./assets/rock.png",
        alt: "dessin d'une main imitant une pierre"
    },
    {
        name: "paper",
        src: "./assets/paper.png",
        alt: "dessin d'une main imitant une feuille de papier"
    },
    {
        name: "scisors",
        src: "./assets/scisors.png",
        alt: "dessin d'une main imitant une paire de ciseaux"
    }
]

rep = 0;
itr = 25;
let computerChoice;
let gameUser = document.getElementById("gameUser");
let gameUserCard = document.getElementById("game__user");
let gameComputer = document.getElementById("gameComputer");
let gameComputerCard = document.getElementById("game__computer");
let result = document.getElementById("result");

function play(playedChoice) {
    let userChoice = choices[playedChoice];
    gameUserCard.style.boxShadow = "none";
    gameComputerCard.style.boxShadow = "none";
    gameUser.setAttribute("src", userChoice.src);
    gameUser.setAttribute("alt", userChoice.alt);

    if(playedChoice == 0) {
        t = setTimeout("play(0)", 150);
    } else if(playedChoice == 1) {
        t = setTimeout("play(1)", 150);
    } else {
        t = setTimeout("play(2)", 150);
    }
    
    rep += 1;

    if(rep < itr) {
        computerChoice = choices[Math.floor(Math.random()*3)]
        gameComputer.setAttribute("src", computerChoice.src);
    } else {
        clearTimeout(t);

        gameComputer.setAttribute("alt", computerChoice.alt);

        if (userChoice.name == computerChoice.name) {
            result.innerHTML = "Egalité !";
        } else if (
            (userChoice.name == "rock" && computerChoice.name == "scisors") ||
            (userChoice.name == "paper" && computerChoice.name == "rock") || 
            (userChoice.name == "scisors" && computerChoice.name == "paper")
            ) {
            result.innerHTML = "Gagné !";
            gameUserCard.style.boxShadow = "5px 5px 8px rgb(0, 255, 0, 0.5), -5px -5px 8px rgb(0, 255, 0, 0.5), -5px 5px 8px rgb(0, 255, 0, 0.5), 5px -5px 8px rgb(0, 255, 0, 0.5)";
            gameComputerCard.style.boxShadow = "5px 5px 8px rgb(255, 0, 0, 0.5), -5px -5px 8px rgb(255, 0, 0, 0.5), -5px 5px 8px rgb(255, 0, 0, 0.5), 5px -5px 8px rgb(255, 0, 0, 0.5)";
        } else {
            result.innerHTML = "Perdu !";
            gameUserCard.style.boxShadow = "5px 5px 8px rgb(255, 0, 0, 0.5), -5px -5px 8px rgb(255, 0, 0, 0.5), -5px 5px 8px rgb(255, 0, 0, 0.5), 5px -5px 8px rgb(255, 0, 0, 0.5)";
            gameComputerCard.style.boxShadow = "5px 5px 8px rgb(0, 255, 0, 0.5), -5px -5px 8px rgb(0, 255, 0, 0.5), -5px 5px 8px rgb(0, 255, 0, 0.5), 5px -5px 8px rgb(0, 255, 0, 0.5)";
        }

        rep = 0;
    }
}