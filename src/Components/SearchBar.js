import React from'react';

class SearchBar extends React.Component{
    state={term:''}
    // onInputChange(event){
    //     console.log(event.target.value)
    // }
    onFormSubmit = (event)=> {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
        // in a class based component we refrence props with this, in functional component there is no need of this, just props.onSubmit
    }

    render(){
        return (
        <div className='ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>
                        Image search
                    </label>
                    <input type='text' 
                    value={this.state.term} 
                    onChange={(e)=>
                    this.setState({term:e.target.value.toUpperCase()})
                    }
                    />
                    {/* onChange={(event)=> console.log(event.target.value)} */}
                    {/* above line will do the same as the onINputChange function on top,
                    arrow functions can be placed directly into the of the property */}
                </div>
                
            </form>
        </div>
        )
    }
}

export default SearchBar;