import CharacterCard from '../Components/CharacterCard'
import React, {Component} from 'react'

class CharacterContainer extends Component {


    renderCharacters = () => {
        
        return this.props.characters.map(charObj => <CharacterCard key={charObj.id} character={charObj}/>)
    }
    render(){
        return(
            <div className="character-flex-container">
                {this.renderCharacters()}
            </div>
        )
    }
}

export default CharacterContainer