/*
 Wiki page: https://wiki.latvian.dev/books/kubejs/page/item-modification

 Listen for the "item events" startup event.
 As this is initialized on the start of the game, you must restart the game to see results.
*/
ItemEvents.modification((event) => {
  event.modify('minecraft:red_mushroom', (item) => {
    item.maxStackSize = 41;
    item.rarity = 'EPIC'; // Changes it to a pink display color
    item.fireResistant = true; // Is fire resistant, like netherite
    // Leave a red mushroom block when crafting, e.g., milk bucket > bucket in cake
    item.craftingRemainder = Item.of('minecraft:red_mushroom_block').item;
  });
});
