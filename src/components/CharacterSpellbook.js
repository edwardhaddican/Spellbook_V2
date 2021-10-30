import React, { useEffect }  from 'react'
import { useStore, useSelector } from 'react-redux'

const CharacterSpellbook = (props) => {
  const currentCharacterId = props.match.params.characterId
  const store = useStore()
  const currentState = store.getState()
  console.log(currentState)

  const allCharacters = useSelector((state) => {

    return state.characters;
  });

console.log(currentCharacterId)
  console.log(allCharacters)

  // const currentCharacterData = allCharacters.find((char) => {

  //   console.log(char)
  //   if(char.id === currentCharacterId){
  //     return true
  //   }

  // })

  const currentCharacterData = allCharacters.find(char => char.id === Number(currentCharacterId))

  console.log(currentCharacterData)



  return (
    <div className='character-spellbook-main-container'>
      <h1>Character Spellbook</h1>
      <p>Current Character: {currentCharacterId}</p>

    </div>
  )
}

export default CharacterSpellbook
