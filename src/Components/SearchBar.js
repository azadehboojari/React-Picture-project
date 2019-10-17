import React from'react';

class SearchBar extends React.Component{
    
    // onInputChange(event){
    //     console.log(event.target.value)
    // }
    render(){
        return (
        <div className='ui segment'>
            <form className='ui form'>
                <div className='field'>
                    <label>
                        Image search
                    </label>
                    <input type='text' onChange={this.onInputChange}/>
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