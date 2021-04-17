const router = require("express").Router();
const { Character, User } = require("../db/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    currentUserId = req.user.id;
    const characters = await Character.findAll({
      where: {
        userId: currentUserId,
      },
      include: User,
    });
    res.json(characters);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleCharacter = await Character.findByPk(req.params.id);

    if (
      singleCharacter.isPublic !== true &&
      singleCharacter.userId !== req.user.Id
    ) {
      res.status(403).send("You do not have permission to view this character");
    } else {
      res.json(singleCharacter);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {

  console.log(req.body)
  try {
    const newCharacter = await Character.create({
      name: req.body.characterName,
      level: req.body.level,
      class: req.body.class,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      userId: req.user.id,
      imageUrl: req.body.imageUrl,
    });
    res.status(201).json(newCharacter);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const singleCharToUpdate = await Character.findById({
      where: {
        id: req.params.id,
      },
    });
    await singleCharToUpdate.update(req.body);
    res.status(200).json(singleCharToUpdate);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const charToDelete = await Character.findById({
      where: {
        id: req.params.id,
      },
    });
    await charToDelete.destroy();
    res.status(200).send("The character was deleted");
  } catch (err) {
    next(err);
  }
});
