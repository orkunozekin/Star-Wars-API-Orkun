import React from 'react';
import './SearchName.css'
import UserContext from '../ContextProvider';

export default class SearchName extends React.Component {

    state = {
        name: {
          value: '',
          touched: false
        }
    };
    
    nameChanger = (newName) => {
        this.setState({name: {value: newName, touched: true}})
    }

    render() {
        return (
            <UserContext.Consumer>
                {({handleSubmit }) => (
                    <section className="search-name">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(this.state.name.value)
                            
                        }}
                        >
                            <label htmlFor="char-name">Character Name:</label>
                            <input onChange={e => this.nameChanger(e.target.value)} id="char-name" type="text" placeholder="Skywalker" required></input>
                            <button type="submit">Search</button>
                        </form>
                    </section>
                )}
            </UserContext.Consumer>
        )
    }
}
  