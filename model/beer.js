class Beer extends Beverage {
    constructor(name, producer, yob, quantity, alcohol, type, color) {
        super (name, producer, yob, quantity, alcohol);
        this.type = type;
        this.color = color;
    }

    toString(){
        let string = super.toString() + "\n" +
                     "type: " + this.type + "\n" +
                     "color: " + this.color;
        return string
    }
}