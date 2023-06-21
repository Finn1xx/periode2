const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = 576;

const gravity = 0.5;

class Player {
    constructor(x, y, imgSrc) {
        this.position = { x: x, y: y };
        this.velocity = { x: 0, y: 0 };
        this.width = 50;
        this.height = 50;
        this.img = new Image();
        this.img.src = imgSrc;
        this.img.onload = () => {
            this.draw();
        }
    }
    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw();
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }
    }
}

const player = new Player(100, 100, "player.png");










class Platform {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 500;
        this.height = 20;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

}


class Platform2 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 80;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}


class Platform3 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 80;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}
class Platform4 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 200;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}
class Platform5 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 150;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}

class Platform6 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 120;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}

class Platform7 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 300;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}

class Platform8 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 150;
        this.height = 100;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}

class Platform9 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 300;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}

class Platform10 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 400;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}

class Platform11 {
    constructor({ x, y, imgSrc }) {
        this.position = { x, y };
        this.originalPosition = { x, y };
        this.width = 600;
        this.height = 50;

        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}

const platforms = [
    new Platform({ x: 500, y: 560, imgSrc: "platform.png" }),

    new Platform({ x: 0, y: 560, imgSrc: "platform.png" }),

    new Platform({ x: 1300, y: 560, imgSrc: "platform.png" }),

    new Platform({ x: 2000, y: 500, imgSrc: "platform.png" }),

    new Platform2({ x: 2600, y: 300, imgSrc: "platform2.png" }),

    new Platform2({ x: 2950, y: 200, imgSrc: "platform2.png" }),

    new Platform2({ x: 3250, y: 200, imgSrc: "platform2.png" }),

    new Platform2({ x: 3500, y: 300, imgSrc: "platform2.png" }),

    new Platform3({ x: 3800, y: 350, imgSrc: "platform4.png" }),

    new Platform4({ x: 4000, y: 500, imgSrc: "platform5.png" }),

    new Platform4({ x: 4500, y: 500, imgSrc: "platform5.png" }),

    new Platform2({ x: 4850, y: 450, imgSrc: "platform2.png" }),

    new Platform4({ x: 5100, y: 520, imgSrc: "platform5.png" }),

    new Platform4({ x: 5300, y: 520, imgSrc: "platform5.png" }),

    new Platform4({ x: 5500, y: 520, imgSrc: "platform5.png" }),

    new Platform4({ x: 5700, y: 520, imgSrc: "platform5.png" }),

    new Platform5({ x: 5950, y: 400, imgSrc: "platform4.png" }),

    new Platform7({ x: 6600, y: 500, imgSrc: "platform4.png" }),

    new Platform4({ x: 7000, y: 300, imgSrc: "platform4.png" }),

    new Platform4({ x: 7200, y: 300, imgSrc: "platform4.png" }),

    new Platform4({ x: 7850, y: 300, imgSrc: "platform4.png" }),

    new Platform6({ x: 8300, y: 320, imgSrc: "platform4.png" }),

    new Platform8({ x: 8600, y: 500, imgSrc: "platform6.png" }),

    new Platform4({ x: 8900, y: 300, imgSrc: "platform4.png" }),

    new Platform8({ x: 9500, y: 250, imgSrc: "platform6.png" }),

    new Platform8({ x: 9900, y: 250, imgSrc: "platform6.png" }),

    new Platform9({ x: 10300, y: 300, imgSrc: "platform2.png" }),

    new Platform4({ x: 10550, y: 250, imgSrc: "platform4.png" }),

    new Platform4({ x: 11300, y: 500, imgSrc: "platform4.png" }),

    new Platform4({ x: 11500, y: 500, imgSrc: "platform4.png" }),

    new Platform8({ x: 11700, y: 400, imgSrc: "platform6.png" }),

    new Platform8({ x: 12000, y: 300, imgSrc: "platform6.png" }),

    new Platform8({ x: 12300, y: 400, imgSrc: "platform6.png" }),

    new Platform8({ x: 12600, y: 300, imgSrc: "platform6.png" }),

    new Platform8({ x: 12900, y: 400, imgSrc: "platform6.png" }),

    new Platform8({ x: 13200, y: 300, imgSrc: "platform6.png" }),

    new Platform8({ x: 13500, y: 400, imgSrc: "platform6.png" }),

    new Platform8({ x: 13800, y: 300, imgSrc: "platform6.png" }),

    new Platform9({ x: 14300, y: 500, imgSrc: "platform8.png" }),

    new Platform9({ x: 14800, y: 300, imgSrc: "platform8.png" }),

    new Platform9({ x: 15300, y: 100, imgSrc: "platform8.png" }),

    new Platform9({ x: 15800, y: 300, imgSrc: "platform8.png" }),

    new Platform8({ x: 16200, y: 500, imgSrc: "platform6.png" }),

    new Platform8({ x: 16600, y: 300, imgSrc: "platform6.png" }),

    new Platform9({ x: 17000, y: 100, imgSrc: "platform8.png" }),

    new Platform10({ x: 17900, y: 500, imgSrc: "platform8.png" }),

    new Platform10({ x: 18300, y: 500, imgSrc: "platform8.png" }),

    new Platform10({ x: 18700, y: 500, imgSrc: "platform8.png" }),

    new Platform10({ x: 19300, y: 300, imgSrc: "platform8.png" }),

    new Platform9({ x: 19700, y: 300, imgSrc: "platform8.png" }),

    new Platform9({ x: 20000, y: 100, imgSrc: "platform8.png" }),

    new Platform9({ x: 20600, y: 300, imgSrc: "platform8.png" }),

    new Platform9({ x: 21000, y: 300, imgSrc: "platform8.png" }),

    new Platform8({ x: 21500, y: 500, imgSrc: "platform6.png" }),

    new Platform9({ x: 22000, y: 300, imgSrc: "platform8.png" }),

    new Platform8({ x: 22600, y: 500, imgSrc: "platform6.png" }),

    new Platform9({ x: 23000, y: 300, imgSrc: "platform8.png" }),

    new Platform3({ x: 23600, y: 350, imgSrc: "platform4.png" }),

    new Platform9({ x: 24000, y: 500, imgSrc: "platform4.png" }),

    new Platform11({ x: 24400, y: 300, imgSrc: "platform8.png" }),

    new Platform11({ x: 25100, y: 300, imgSrc: "platform9win.png" }),

];

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
};
let scrollOffset = 0;

const background = new Image();
background.src = "achtergrond.jpg";

function animate() {
    requestAnimationFrame(animate);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach((platform) => {
        platform.draw();
    });

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 7;
    } else if ((keys.left.pressed && player.position.x > 100)
        || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
        player.velocity.x = -7;
    } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
            scrollOffset += 5;
            platforms.forEach((platform) => {
                platform.position.x -= 7;
            });
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= 5;
            platforms.forEach((platform) => {
                platform.position.x += 7;
            });
        }
    }





    platforms.forEach(platform => {
        if (player.position.y + player.height
            <= platform.position.y && player.position.y + player.height + player.velocity.y >=
            platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <=
            platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })
      
   

   

    

    const resultDiv = document.getElementById("result");

    if (scrollOffset > 17650) {
        clearInterval(intervalId);
        resultDiv.innerHTML = "YOU WON" + " "  ;
    }
    

    

    

    
    if (player.position.y > canvas.height) {
        init();
    }

}
init();
animate();

addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 65:
            keys.left.pressed = true
            break;
        case 83:

            break;
        case 68:
            keys.right.pressed = true
            break;
        case 87:
            player.velocity.y -= 17
            break;
    }
});

addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 65:
            keys.left.pressed = false
            break;
        case 83:

            break;
        case 68:
            keys.right.pressed = false
            break;
        case 87:

            break;
    }
});

function init() {
    player.position = { x: 100, y: 100 };
    player.velocity = { x: 0, y: 0 };
    scrollOffset = 0;


    platforms.forEach((platform) => {
        platform.position = { x: platform.originalPosition.x, y: platform.originalPosition.y };
    });
}

let intervalId;
let timer = 61;

function updateScore() {
    if (timer > 0) {
        timer--;
        document.getElementById("timer").innerHTML = timer;
    } else {
        clearInterval(intervalId);
        displayGameOver();
    }
}

function updateScore() {
    if (timer > 0) {
        if (player.position.x > 25000) {
            clearInterval(intervalId);
            document.getElementById("timer").innerHTML = "You won!";
            player.velocity.x = 0;
            player.velocity.y = 0;
            removeEventListener("keydown", player);
            removeEventListener("keyup", player);
            setTimeout(() => { location.reload(); }, 5000);
            return;
        }
        timer--;
        document.getElementById("timer").innerHTML = timer;
    } else {
        clearInterval(intervalId);
        displayGameOver();
    }
}

function displayGameOver() {
    document.getElementById("timer").innerHTML = "YOU LOSE";
    player.velocity.x = 0;
    player.velocity.y = 0;
    removeEventListener("keydown", player);
    removeEventListener("keyup", player);
    setTimeout(() => { location.reload(); }, 1000);
}

intervalId = setInterval(updateScore, 1000);











































