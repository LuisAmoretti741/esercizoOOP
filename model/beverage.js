class Beverage {
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, _price) {
        this.name = name;
        this.producer = producer;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;
        this.bottleNumber = bottleNumber;
        this._price = _price;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if (newPrice < 0) {
            console.log("Errore: prezzo negativo.");
            return;
        }
        this._price = newPrice;
    }

    sellBottles(b) {
        if (b <= this.bottleNumber) {
            this.bottleNumber -= b;
        } else {
            console.log("Errore: non ci sono abbastanza bottiglie da vendere.");
        }
    }

    toString(){
        return "name: " + this.name + "\n" +
               "producer: " + this.producer + "\n" +
               "yob: " + this.yob + "\n" +
               "quantity: " + this.quantity + "\n" +
               "alcohol: " + this.alcohol + "\n" +
               "Nro Bottiglia: " + this.bottleNumber + "\n" +
               "Prezzo: " + this._price;
    }
}