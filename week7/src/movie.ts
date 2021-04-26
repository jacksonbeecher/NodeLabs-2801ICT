class Movie implements Item {
    constructor(public year, public title, public author){}
    
    display() {
        console.log(`${this.year}, ${this.author}, "${this.title}"`);
    }
}