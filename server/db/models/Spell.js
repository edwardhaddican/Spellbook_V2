const Sequelize = require("sequelize");
const db = require("../db");

const Spell = db.define("character", {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  index: {
    type: Sequelize.STRING,
    unique: true,
  },
  level: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 9,
    },
  },
  school: {
    type: Sequelize.ENUM(
      "abjuration",
      "conjuration",
      "divination",
      "enchantment",
      "evocation",
      "illusion",
      "necromancy",
      "transmutation"
    ),
  },
  classes: {
    type: Sequelize.ARRAY(
      Sequelize.ENUM(
        "barbarian",
        "bard",
        "cleric",
        "druid",
        "fighter",
        "monk",
        "paladin",
        "ranger",
        "rogue",
        "sorcerer",
        "warlock",
        "wizard"
      )
    ),
  },

  url: {
    type: Sequelize.STRING,
    unique: true,
  },

  attack_type: {
    type: Sequelize.STRING,
  },
  area_of_affect_size: {
    type: Sequelize.INTEGER,
  },
  area_of_affect_type: {
    type: Sequelize.STRING,
  },
  casting_time: {
    type: Sequelize.STRING,
  },
  components: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  concentration: {
    type: Sequelize.BOOLEAN,
  },
  //DOES THIS WORK? CAN DAMAGE BE AN OBJECT? it needs damage_at_slot_level and damage_type properties
  damage_at_slot_level: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  damage_type: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  duration: {
    type: Sequelize.STRING,
  },

  higher_level: {
    type: Sequelize.TEXT,
  },
  material: {
    type: Sequelize.STRING,
  },
  range: {
    type: Sequelize.STRING,
  },
  ritual: {
    type: Sequelize.BOOLEAN,
  },
  subclasses: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Spell;
