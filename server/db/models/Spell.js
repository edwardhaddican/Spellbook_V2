const Sequelize = require("sequelize");
const db = require("../db");

const Spell = db.define("spell", {
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
      min: 0,
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
  description: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  higher_level: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  area_of_effect_size: {
    type: Sequelize.INTEGER,
  },
  area_of_effect_type: {
    type: Sequelize.STRING,
  },
  casting_time: {
    type: Sequelize.STRING,
  },
  components: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  material: {
    type: Sequelize.TEXT,
  },
  concentration: {
    type: Sequelize.BOOLEAN,
  },
  damage_at_slot_level: {
    type: Sequelize.JSON,
  },
  dc_type: {
    type: Sequelize.STRING,
  },
  dc_success: {
    type: Sequelize.STRING,
  },
  damage_type: {
    type: Sequelize.STRING,
  },

  duration: {
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
