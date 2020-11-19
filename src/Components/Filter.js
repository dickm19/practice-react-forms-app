import React, {Component} from 'react'

class Filter extends Component {


    handleChange = (event) => {
        this.props.handleFilter(event) 
    }
    render(){
        return(
            <form>
                <input type="text" onChange={this.handleChange} value={this.props.searchValue} placeholder="search"/>
            </form>
        )
    }
}


export default Filter