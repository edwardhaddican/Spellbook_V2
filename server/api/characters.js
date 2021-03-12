const router = require('express').Router()
const {character} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const characters = await character.findAll()
    res.json(characters)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleCharacter = await character.findById({
      where: {
        id: req.params.id
      }
    })
    res.json(singleCharacter)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCharacter = await character.create({
      name: req.body.name,
      level: req.body.level,
      class: req.body.class,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma
    })
    res.status(201).json(newCharacter)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const singleCharToUpdate = await character.findById({
      where: {
        id: req.params.id
      }
    })
    await singleCharToUpdate.update(req.body)
    res.status(200).json(singleCharToUpdate)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const charToDelete = await character.findById({
      where: {
        id: req.params.id
      }
    })
    await charToDelete.destroy()
    res.status(200).send('The character was deleted')
  } catch (err) {
    next(err)
  }
})
