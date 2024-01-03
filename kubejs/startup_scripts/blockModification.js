/*
 Wiki page: https://wiki.latvian.dev/books/kubejs/page/block-modification

 Listen for the "block events" startup event.
 As this is initialized on the start of the game, you must restart the game to see results.
*/
BlockEvents.modification((event) => {
  // This is the red mushroom that spawns in the world, not the item in the inventory.
  event.modify('minecraft:red_mushroom', (block) => {
    block.requiresTool = true; // needs an axe to collect
    block.hasCollision = true; // You can walk on the collision of the mushroom
    block.lightEmission = 15; // Emits a light level of 15
  });
});
