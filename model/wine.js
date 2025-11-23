class Wine extends Beverage {
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, _price, vite, location) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, _price);
        this.vite = vite;
        this.location = location;
    }

    toString(){
        let string = super.toString() + "\n" +
                     "vite: " + this.vite + "\n" +
                     "location: " + this.location;
        return string;
    }
}