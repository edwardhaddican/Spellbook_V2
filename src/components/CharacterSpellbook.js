import React from 'react'

const CharacterSpellbook = (props) => {
  const currentCharacterId = props.match.params.characterId



  return (
    <div className='character-spellbook-main-container'>
      <h1>Character Spellbook</h1>
      <p>Character Id: {currentCharacterId}</p>

    </div>
  )
}

export default CharacterSpellbook
