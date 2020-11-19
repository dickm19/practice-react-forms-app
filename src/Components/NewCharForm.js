import React, {Component} from 'react'

class NewCharForm extends Component {

    state = {
        name: '',
        image: '',
        show: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.name, this.state.image, this.state.show)
        this.setState({
            name: '',
            image: '',
            show: ''
        })
    } 

    handleNameChange = (event) => {
        
        this.setState({
            name: event.target.value
        })
    }
    handleImgChange = (event) => {
        
        this.setState({
            image: event.target.value
        })
    }
    handleShowChange = (event) => {
        this.setState({
            show: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleNameChange} type="text" name="name" value={this.state.name.value} placeholder="Character Name"/>
                <input onChange={this.handleImgChange} type="text" name="image" value={this.state.image.value} placeholder="Image Url"/>
                <input onChange={this.handleShowChange} type="text" name="show" value={this.state.show.value} placeholder="Show"/>
                <input type="submit" />

            </form>
        )
    }
}


export default NewCharForm