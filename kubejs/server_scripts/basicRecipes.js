/*
 Listen for the "recipes" server event.

 TIP: you can change event to whatever you like,
 as long as any instance of event is also changed. i.e.,
 event.shaped to recipe.shaped

 Everything that will be put in this callback can be reloaded
 in-game with /reload
*/
ServerEvents.recipes((event) => {
  event.shaped('64x minecraft:oak_planks', [ // output
    'ACA',
    'CBC',
    'ACA',
  ], {
    A: 'minecraft:oak_log',
    B: 'minecraft:diamond_block',
    C: 'minecraft:dragon_egg',
  });

  event.shapeless('8x minecraft:spruce_planks', [
    '2x minecraft:bread',
    'minecraft:sand',
  ]);

  //                 \/ output                 \/ input
  event.smelting('3x minecraft:birch_planks', 'minecraft:diamond');

  //             this is a tag for all minecraft wool \/
  event.blasting('minecraft:acacia_planks', '#minecraft:wool');

  event.smoking('2x minecraft:mangrove_planks', 'minecraft:beacon');

  event.campfireCooking('minecraft:crimson_planks', 'minecraft:brewing_stand');

  event.stonecutting('64x minecraft:nether_star', 'minecraft:dirt');

  event.smithing(
    'minecraft:jungle_planks', // output
    'minecraft:iron_ingot', // item to be upgraded
    'minecraft:barrier', // upgrade item
    '#minecraft:planks', // netherite smithing template area
  );
});


// Removing Recipes
ServerEvents.recipes((remove) => {
  // Removes all recipes in the game
  // remove.remove({});

  // ID: Remove the recipe by the ID given
  /* To find a recipe ID, use F3+H + REI/JEI/EMI
        REI: hover over the [+] symbol
        JEI: hover over the output
        EMI: Go into the EMI config, go to Dev category and enable "Show recipe IDs", then hover over the output
  */
  remove.remove({ id: 'minecraft:crafting_table' });

  // OUTPUT: Remove all recipes with the specified output
  remove.remove({ output: 'minecraft:packed_ice' });

  // INPUT: Remove all recipes with the specified input
  remove.remove({ input: 'minecraft:sandstone' });
});
