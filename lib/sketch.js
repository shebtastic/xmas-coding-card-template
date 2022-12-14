const random = (min, max) => min + Math.random() * (max - min + 1);
const randomInt = (min, max) => Math.floor(random(min, max));

const width = 100;
const height = 150;
const frameRate = 30;

const sketch = (count, speed, wind, angularMomentum) => (sketch) => {
  let snowflakes = [];

  sketch.setup = () => {
    sketch.createCanvas(width, height);
    sketch.fill(240);
    sketch.noStroke();
    sketch.frameRate(frameRate);
  };

  sketch.draw = () => {
    sketch.clear();

    const time = sketch.frameCount / frameRate;

    for (let i = 0; i < randomInt(0, count); i++) {
      snowflakes.push(
        new Snowflake(
          sketch,
          (ref) => {
            snowflakes = snowflakes.filter((flake) => flake !== ref);
          },
          { speed, angularMomentum, wind }
        )
      );
    }

    for (let flake of snowflakes) {
      flake.update(time);
    }
  };
};

class Snowflake {
  // initialize coordinates
  constructor(sketch, cleanUp, options) {
    this.speed = options.speed;
    this.angularMomentum = options.angularMomentum;
    this.wind = options.wind;
    this.sketch = sketch;
    this.cleanUp = cleanUp;
    this.posX = random(-width * options.wind, 0);
    this.posY = 0;
    this.initialangle = random(0, 2 * Math.PI);
    this.size = randomInt(2, 7) / 2;
    this.radius = Math.sqrt(randomInt(0, Math.pow(width / 2, 2)));
  }

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area

  update(time) {
    // different size snowflakes fall at slightly different y speeds
    this.posY += Math.pow(this.size, 0.5 * this.speed);
    // x position follows a circle
    const angle = this.angularMomentum * time + this.initialangle;
    this.posX =
      width / 2 + this.radius * Math.sin(angle) + this.posY * this.wind;

    // delete snowflake if past end of screen
    if (this.posY > height) {
      this.cleanUp(this);
      return;
    }
    this.display();
  }

  display() {
    this.sketch.ellipse(this.posX, this.posY, this.size);
  }
}

const createSnowfall = ({
  count = 1,
  speed = 1,
  wind = 0,
  angularMomentum = 0.7,
} = {}) => {
  const element = document.querySelector(".card .front .snowfall");
  new p5(sketch(count, speed, wind, angularMomentum), element);
};

const createCardFlip = ({duration = 800} = {}) => {
  document.addEventListener("click", () => {
    const card = document.querySelector(".card");
    const headline = document.querySelector(".headline")
    const snowfall = document.querySelector(".snowfall")
    
    if(!card) {
      alert("we seem to be missing the .card class in our HTML! 🤔")
      return
    }

    if(!card.dataset.flipped || card.dataset.flipped === "false") {
      card.dataset.flipped = "true"
    } else {
      card.dataset.flipped = "false"
    }

    if(card.dataset.flipped === "true" && !headline) {
      alert("we seem to be missing the .headline class in our HTML! 🤔")
    }
    
    let starttime = null
    let deg = null
    let tick = 0

    const flip = (timestamp) => {
      if(!starttime) {
        deg = 0
        starttime = timestamp
        requestAnimationFrame(flip)
        return
      }

      const timingPosition = (timestamp - starttime) / duration
      tick++

      card.style = `transform: rotateY(${deg}deg)`
      const rotation = 180 * (timingPosition / tick)
      deg += rotation
      if(deg + rotation >= 180) {
        card.style = `transform: rotateY(180deg)`
        return
      }

      if(deg - rotation > 90) {
        if(headline) {
          headline.style = "z-index: -1"
        }
        if(snowfall) {
          snowfall.style = "z-index: -1"
        }
      }

      requestAnimationFrame(flip)
    }

    const unflip = (timestamp) => {
      console.log("unflip")
      if(!starttime) {
        deg = 180
        starttime = timestamp
        requestAnimationFrame(unflip)
        return
      }

      const timingPosition = (timestamp - starttime) / duration
      tick++

      card.style = `transform: rotateY(${deg}deg)`
      const rotation = 180 * (timingPosition / tick)
      deg -= rotation
      if(deg - rotation <= 0) {
        card.style = `transform: rotateY(0deg)`
        return
      }

      if(deg - rotation < 90) {
        if(headline) {
          headline.style = "z-index: 1"
        }
        if(snowfall) {
          snowfall.style = "z-index: 2"
        }
      }

      requestAnimationFrame(unflip)
    }
    
    if(card.dataset.flipped === "true") {
      requestAnimationFrame(flip)
    } else {
      requestAnimationFrame(unflip)
    }
  });
};

if (location.search.includes("clickSelf=true")) {
  const click = () => {
    const timeout = Math.random() * 20000 + 10000;
    setTimeout(() => {
      document.body.click();
      click();
    }, timeout);
  };

  click();
}

export { createSnowfall, createCardFlip };
