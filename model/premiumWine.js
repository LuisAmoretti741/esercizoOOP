class PremiumWine extends Wine {
    constructor(name, producer, yob, quantity, alcohol, vite, location, certification) {
        super(name, producer, yob, quantity, alcohol, vite, location);
        this.certification = certification;
    }

    toString(){
        let string = super.toString() + "\n" +
                     "certification: " + this.certification;
        return string;
    }
}