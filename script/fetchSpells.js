const axios = require("axios");
const { Spell } = require("../server/db/models");

const fetchSingleSpell = async (url) => {
  try {
    let baseUrl = "https://www.dnd5eapi.co";

    const response = await axios.get(baseUrl + url);

    if (response.data.Error) {
      console.log("you have an error: ", response.data.Error);
    } else {
      // console.log(response.data)
      if (response.data.index === "fireball") {
        console.log(response.data);
      }

      //put into database
      const data = response.data;

      Spell.create({
        name: data.name,
        index: data.index,
        level: data.level,
        school: data.school.index,
        classes: data.classes.map(function (currentClass) {
          return currentClass.index;
        }),
        url: data.url,
        description: data.desc,
        area_of_effect_size: data.area_of_effect
          ? data.area_of_effect.size
          : null,
        area_of_effect_type: data.area_of_effect
          ? data.area_of_effect.type
          : null,
        casting_time: data.casting_time,
        components: data.components,
        material: data.material,
        concentration: data.concentration,
        damage_at_slot_level: JSON.stringify(data.damage_at_slot_level),
        dc_type: data.dc ? data.dc.dc_type.index : null,
        dc_success: data.dc ? data.dc.dc_success : null,
        damage_type: data.damage
          ? data.damage.damage_type
            ? data.damage.damage_type.index
            : null
          : null,
        duration: data.duration,
        higher_level: data.higher_level,
        range: data.range,
        ritual: data.ritual,
        subclasses: data.classes.map(function (currentClass) {
          return currentClass.index;
        }),
      });
    }
  } catch (error) {
    console.log("You have an error", error);
  }
};

const allSpellList = async () => {
  try {
    let url = "https://www.dnd5eapi.co/api/spells";

    const response = await axios.get(url);

    if (response.data.Error) {
      console.log("you have an error: ", response.data.Error);
    } else {
      //add to my database
      // console.log(response.data.results)
      const promiseArray = response.data.results.map((spell) => {
        return fetchSingleSpell(spell.url);
      });

      await Promise.all(promiseArray);

      console.log("all done");
    }
  } catch (error) {
    console.log("You have an error", error);
  }
};

// const classSpellList = async () => {
//   try {
//     let url = "https://www.dnd5eapi.co";

//     const response = await axios.get(url + "/api/classes");

//     const promises = response.data.results.map((element) => {
//       return axios.get(`${url}${element.url}/spells`);
//     });

//     const classSpellResults = await Promise.all(promises);

//     const classSpells = classSpellResults.reduce((result, element, index) => {
//       const playerClass = response.data.results[index].index;
//       result[playerClass] = element.data.results;
//       return result;
//     }, {});
//     // console.log(classSpells, 'class spells in new script')
//   } catch (err) {
//     console.log("You have an error", error);
//   }
// };

Spell.sync({ force: true });
allSpellList();
// classSpellList();
