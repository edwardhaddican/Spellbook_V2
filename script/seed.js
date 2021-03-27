"use strict";

// this does not work yet, just copied over as a template!!!!!!!

const db = require("../server/db");
const { User, Character } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({
      firstName: "Blue",
      lastName: "Ghost",
      email: "blue@gmail.com",
      password: "123",
      imageUrl: "https://i.imgur.com/zhBKT0q.png",
    }),
    User.create({
      firstName: "Pink",
      lastName: "Ghost",
      email: "pink@gmail.com",
      password: "123",
      imageUrl: "https://i.imgur.com/HENTupr.png",
    }),

    User.create({
      firstName: "Edward",
      lastName: "Haddican",
      email: "ed@gmail.com",
      password: "123",
      isAdmin: "true",
    }),
  ]);

  const characters = await Promise.all([
    Character.create({
      imageUrl:
        "https://cdnb.artstation.com/p/assets/images/images/000/981/689/large/johan-grenier-ork.jpg?1437495031",
      characterName: "bob",
      level: 1,
      class: "Paladin",
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8,
    }),

    Character.create({
      imageUrl:
        "https://i.pinimg.com/564x/8f/d0/a7/8fd0a73ba1881af2ec004648285516cf.jpg",
      characterName: "Grandma",
      level: 5,
      class: "Wizard",
      strength: 6,
      dexterity: 6,
      constitution: 8,
      intelligence: 20,
      wisdom: 6,
      charisma: 16,
    }),

    Character.create({
      imageUrl:
        "https://cdnb.artstation.com/p/assets/images/images/000/981/689/large/johan-grenier-ork.jpg?1437495031",
      characterName: "Grom Bull",
      level: 1,
      class: "Mechanic",
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8,
    }),

    Character.create({
      id: 1,
      imageUrl:
        "https://cdnb.artstation.com/p/assets/images/images/000/981/689/large/johan-grenier-ork.jpg?1437495031",
      characterName: "Akroc",
      level: 1,
      class: "Paladin",
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8,
    }),

    Character.create({
      imageUrl:
        "https://i.pinimg.com/564x/8f/d0/a7/8fd0a73ba1881af2ec004648285516cf.jpg",
      characterName: "Helix",
      level: 5,
      class: "Wizard",
      strength: 6,
      dexterity: 6,
      constitution: 8,
      intelligence: 20,
      wisdom: 6,
      charisma: 16,
    }),

    Character.create({
      imageUrl:
        "https://cdnb.artstation.com/p/assets/images/images/000/981/689/large/johan-grenier-ork.jpg?1437495031",
      characterName: "Victor",
      level: 1,
      class: "Mechanic",
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${characters.length} products`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
