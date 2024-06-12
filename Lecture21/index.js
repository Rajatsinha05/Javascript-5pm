
// class Human {

//     constructor(hath, pair, ankh, muh, sir) {
//         this.hath = hath
//         this.pair = pair
//         this.ankh = ankh
//         this.sir = sir
//         this.muh = muh
//     }
// }



// let human = new Human(4, 2, 4, 1, 1,)

// console.log(human);




// class Student {
//     constructor(name, grid, course, age) {
//         this.name = name;
//         this.roll = grid;
//         this.course = course;
//         this.age = age;
//     }
//     ageprint(){
//         console.log(`${this.name} and ${this.age}`);
//     }

//     speak(){

//     }
// }

// let std = new Student("vandan", 4535, "full stack", 110);
// let std2 = new Student("jigar", 4523, "full stack", 170);
// console.log(std2);
// std.ageprint()
// std2.ageprint()
class Animal {
    #name
    #voice
    constructor(name, voice) {
        this.#name = name;
        this.#voice = voice;
    }
    isRunning() {
        console.log(`${this.#name} is running`);
    }
    setName(name) {
        this.#name = name
    }
    isFly() {
        console.log(this.getName() + " can fly");
    }
    getName() {
        return this.#name
    }
}

let ani = new Animal("dog", "dog-voice");
ani.setName("cat")
// console.log(ani.isFly());

ani.getName()