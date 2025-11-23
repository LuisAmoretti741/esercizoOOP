class PremiumWine extends Wine {
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, _price, vite, location, certification) {
        super(name, producer, yob, quantity, alcohol, bottleNumber, _price, vite, location);
        this.certification = certification;
    }

    get price() {
        const currentYear = new Date().getFullYear();
        const aging = currentYear - this.yob;

        return this._price + (this._price / 10 * aging);
    }

    toString(){
        let string = super.toString() + "\n" +
                     "certification: " + this.certification;
        return string;
    }
}