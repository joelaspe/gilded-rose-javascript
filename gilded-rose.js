export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  decrementQuality() {
     if(this.sellIn <= 0) {
        this.quality = this.quality - 2;
     } else {
      this.quality--;
     }
     if(this.quality < 0) this.quality = 0;
  }
  decrementSellIn() {
    this.sellIn--;
  }
}

export class Brie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  decrementQuality() {
    if(this.sellIn <= 0) {
       this.quality = this.quality + 2;
    } else {
     this.quality++;
    }
    if(this.quality > 50) this.quality = 50;
 }
}

export class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  decrementQuality() {
    // do nothing for legendary items
 }
 decrementSellIn() {
    // do nothing for legendary items
 }
}

export class Ticket extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  decrementQuality() {
    if(this.sellIn > 10) {
       this.quality++;
    } else if(this.sellIn > 5 && this.sellIn <= 10) {
      this.quality += 2;
    } else if(this.sellIn <= 5 && this.sellIn > 0){
      this.quality += 3;
    } else {  // 
      this.quality = 0;
   }
    if(this.quality > 50) {
      this.quality = 50;
    }
    if(this.quality < 0) {
      this.quality = 0;
    }
  }
}

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  decrementQuality() {
    if(this.sellIn <= 0) {
      this.quality -= 4;
    } else {
      this.quality -= 2;
    }    
    if(this.quality < 0) {
      this.quality = 0;
    }
 }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Brie("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80)); 
items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.decrementQuality();
    item.decrementSellIn();
   
  } 
};

