import { expect, describe, it } from "vitest";
import { Item, Brie, Legendary, Ticket, Conjured, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("quality goes down by 2 once sellIn day is reached", () => {
    const testItem = new Item("basic", 0, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(1);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("quality does not go below 0", () => {
    const testItem = new Item("basic", 0, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("increases quality of Aged Brie by 1 each day", () => {
    const testItem = new Brie("Aged Brie", 10, 15);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(16);
    expect(testItem.sellIn).toBe(9);
  });
});

describe("updateQuality", () => {
  it("increases quality of Aged Brie by 2 once sellin day reached", () => {
    const testItem = new Brie("Aged Brie", 0, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("does not increase Brie above 50 when 50 quality reached", () => {
    const testItem = new Brie("Aged Brie", 0, 49);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("Sulfuras, Hand of Ragnaros quality and sellIn never changes", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });
});

describe("updateQuality", () => {
  it("Sulfuras, Hand of Ragnaros quality and sellIn never changes", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", -1, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert increases quality by 1 when >10 days away from sellIn day", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 12, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(21);
    expect(testItem.sellIn).toBe(11);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert increases quality by 1 when 10 > sellIn > 5 days away from sellIn day", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 10, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(9);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert increases quality by 1 when < 6 days away from sellIn day", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 5, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(23);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert quality drops to 0 after sellIn date reaches < 0", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert increases quality by 1 when >10 days away from sellIn day and does not exceed 50 quality", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 12, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(11);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert increases quality by 1 when 10 > sellIn > 5 days away from sellIn day and quality does not exceed 50", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 10, 49);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(9);
  });
});

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert increases quality by 1 when < 6 days away from sellIn day and quality does not exceed 50", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 5, 48);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("Conjured items decrement twice per day", () => {
    const testItem = new Conjured("Conjured decrementing item", 3, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8);
    expect(testItem.sellIn).toBe(2);
  });
});

describe("updateQuality", () => {
  it("Conjured items do not drop below 0 quality", () => {
    const testItem = new Conjured("Conjured decrementing item", 3, 1);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(2);
  });
});

