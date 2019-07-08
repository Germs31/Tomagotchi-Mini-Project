console.log("sanity");

//Buttons for game 

const feedBtn = document.querySelector("#feed-me");
feedBtn.addEventListener('click', () => {
    console.log(game.pet.feedMe())
    
})

const playBtn = document.querySelector("#play-me")
playBtn.addEventListener('click', () => {
    console.log(game.pet.play())
})

const sleep = document.querySelector("#sleep")
sleep.addEventListener('click', () =>{
    console.log(game.pet.rest())
})

const begin = document.querySelector("#start")
begin.addEventListener('click', () => {
    //increases numbers
    game.increaseAge();
    game.increaseHealth();
    game.increaseBoredom();
    game.increaseSleep();
})


//tomagotchi class 
class Tomagotchi {
    constructor(name){
        this.name = name;
        this.health = 0;
        this.boredom = 0;
        this.sleep = 0;
        this.age = 0; 
    }

    feedMe(){
        console.log('feedme is being called')
        this.health -= 1;
        console.log(this.health);

        const decHealth = document.querySelector('.health')
        decHealth.innerText = this.health
    }

    play(){
        console.log('play me is being called')
        this.boredom -= 1;
        console.log(this.boredom);

        const decBored = document.querySelector('.bored')
        decBored.innerText = this.boredom;
    }

    rest(){
        console.log('sleep is being called')
        this.sleep -= 1;
        console.log(this.sleep)
        const decSleep = document.querySelector(".sleep");
        decSleep.innerText = this.sleep;
    }

    addAge(){
        this.age += 1
        const incAge = document.querySelector(".age")
        incAge.innerText = this.age;
    }

    increaseFeed(){
        this.health += 1;
        const incHealth = document.querySelector('.health')
        incHealth.innerText = this.health
    }

    increaseBored(){
        this.boredom += 1;
        const incBoredom = document.querySelector('.bored');
        incBoredom.innerText = this.boredom
    }

    increaseSleep(){
        this.sleep += 1;
        const incSleep = document.querySelector('.sleep');
        incSleep.innerText = this.sleep
    }

}

//game object 

const game = {
    pet: {},
    intervals : {
        age: null,
        health: null,
        boredom: null,
        sleep: null

    },

    gameInit(){
        const name = prompt("whats the name of your tamagotchi")
        const displayName = document.querySelector("#display-name")
        displayName.innerText = name;
        this.pet = new Tomagotchi(name)
        console.log(game.pet)

    },

    increaseAge() {
        this.intervals.age = setInterval(() => {
            this.pet.addAge()
            console.log(this.pet)
            if(this.pet.age >= 10) {
                clearInterval(this.intervals.age)
                alert('too old')
            }
            else if (this.pet.age > 7 ){
                const changeImgTwo = document.querySelector("img");
                changeImgTwo.src = "https://i.imgur.com/OhFXAxH.gif"
            }
            else if(this.pet.age > 3){
                const changeImg = document.querySelector("img")
                changeImg.src = "https://i.imgur.com/xn6R7ST.gif"
                
            }
        },3000)
    },

    increaseHealth(){
        this.intervals.health = setInterval(() => {
            this.pet.increaseFeed();
            if (this.pet.health >= 10){
                clearInterval(this.intervals.health)
                alert('death by starvation')
            }
        }, 1000)
    },

    increaseBoredom(){
        this.intervals.boredom = setInterval(() => {
            this.pet.increaseBored();
            if(this.pet.boredom >= 10){
                clearInterval(this.intervals.boredom)
                alert('death by boredom')
            }
        },1500)
        
    },
    increaseSleep(){
        this.intervals.sleep = setInterval(() => {
            this.pet.increaseSleep();
            if(this.pet.sleep >= 10){
                clearInterval(this.intervals.sleep)
                alert('sleep deprived')
            }
        },2000)

    }
}

game.gameInit();
