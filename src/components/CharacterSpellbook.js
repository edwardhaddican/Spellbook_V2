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


  console.log(allCharacters)



  return (
    <div className='character-spellbook-main-container'>
      <h1>Character Spellbook</h1>
      <p>Current Character: {currentCharacterId}</p>

    </div>
  )
}

export default CharacterSpellbook
