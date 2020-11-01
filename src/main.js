class Desserts {
   constructor (type, calories) {
        this.type = type;
        this.calories = calories;
    }
}

class iceCream extends Desserts {
    constructor (type, calories, flavor, scoops) {
        super(type, calories);
    }

    includeSpoon() {
        if(this.type === 'Ice Cream') {
        console.log('Here is your spoon!')
        }
    }

}

const vanillaIceCream = new iceCream('Ice Cream', 340, 'Vanilla', 3);

console.log(vanillaIceCream);

vanillaIceCream.includeSpoon();
