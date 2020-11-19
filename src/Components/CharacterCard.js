import React, {Component} from 'react'


class CharacterCard extends Component {


    render(){
        return(
            <div className="character-flex-card">
                <h2>{this.props.character.name}</h2>
                <img className="image-div" src={this.props.character.img} alt="b"></img>
                <h3>Show: {this.props.character.show}</h3>
            </div>
        )
    }
}


export default CharacterCard