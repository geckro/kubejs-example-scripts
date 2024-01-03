/* eslint-disable object-curly-spacing */
/*
 Read server_scripts/basicRecipes.js first before looking at this file!

 Everything that will be put in this callback can be reloaded
 in-game with /reload
*/
ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: 'minecraft:green_dye' }, // the filter to filter all recipes
    'minecraft:green_dye', // the item to replace
    'minecraft:echo_shard', // the item to replace it with
  );


  const reallyCoolMushroomFunc = (output, randomIngredient) => {
    event.shaped(output, [
      'NjN',
      'jNj',
    ], {
      N: 'minecraft:oak_trapdoor',
      j: randomIngredient,
    });
  };

  reallyCoolMushroomFunc('minecraft:red_mushroom', 'minecraft:acacia_door');
  reallyCoolMushroomFunc('minecraft:brown_mushroom', 'minecraft:cauldron');
  reallyCoolMushroomFunc('minecraft:mushroom_stem', 'minecraft:spruce_boat');
});
