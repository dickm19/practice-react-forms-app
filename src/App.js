import React, {Component} from 'react'
import CharacterContainer from './Containers/CharacterContainer'
import Filter from './Components/Filter'
import NewCharForm from './Components/NewCharForm'
import api from './api'

import './App.css';

class App extends Component {

  state = {
    api: api,
    searchValue: ''
  }

  handleCharFormSubmit = (name, image, show) => {
    let newArray = [...api]
    let newChar = {id: 8, name: name, img: image, show: show}
    newArray.push(newChar)
    this.setState({
      api: newArray
    })
  }

  handleFilter = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  filteredCharacters = () => {
    return this.state.api.filter(character => character.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  render(){
    return (
      <div>
        <NewCharForm handleSubmit={this.handleCharFormSubmit}/>
        <Filter handleFilter={this.handleFilter} searchValue={this.state.searchValue}/>
        <CharacterContainer characters={this.filteredCharacters()}/>
      </div>
    );

  }
}


export default App;
