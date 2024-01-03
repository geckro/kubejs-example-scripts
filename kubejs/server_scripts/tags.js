/*
 Listen for the "item tags" server event.

 Everything that will be put in this callback can be reloaded
 in-game with /reload
*/
ServerEvents.tags('item', (event) => {
  // Add an enchanting table to #minecraft:wool
  event.add('minecraft:wool', 'minecraft:enchanting_table');

  // Remove all entries from this tag
  event.removeAll('minecraft:beacon_payment_items');

  // Make an entirely new tag and add an item
  event.add('kubejs:taggingrn', '#minecraft:anvils');

  const spawnEggs = [
    'mooshroom_spawn_egg',
    'witch_spawn_egg',
    'slime_spawn_egg',
  ];
  // Use a forEach loop to add all spawn eggs to a custom tag
  spawnEggs.forEach((spawnEgg) => {
    event.add('kubejs:spawneggs', spawnEgg);
  });
  // You can also use a for loop, which is much quicker for bigger arrays
  for (const spawnEgg of spawnEggs) {
    event.add('minecraft:planks', spawnEgg);
  }
});

/*
 Listen for the "block tags" server event.

 Everything that will be put in this callback can be reloaded
 in-game with /reload

 See all tags with:
 /kjs list_tag minecraft:block
*/
ServerEvents.tags('block', (event) => {
  // Make sugar cane climbable!
  event.add('minecraft:climbable', 'minecraft:sugar_cane');
});
