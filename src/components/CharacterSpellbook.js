import React from 'react'

const CharacterSpellbook = (props) => {
  const currentCharacterId = props.match.params.characterId
console.log(currentCharacterId)
  return (
    <div className='character-spellbook-main-container'>
      <h1>hello world </h1>
      <p>Character Id: {currentCharacterId}</p>

    </div>
  )
}

export default CharacterSpellbook
