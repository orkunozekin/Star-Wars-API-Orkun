import React from 'react';
import './SearchName.css';
import UserContext from '../ContextProvider';
import ValidationError from './ValidationError';


export default class SearchName extends React.Component {

    state = {
        name: {
            value: '',
            touched: false
        }
    };

    nameChanger = (newName) => {
        this.setState({ name: { value: newName, touched: true } })
    }

    validateName() {
        const name = this.state.name.value;
        if (name.length === 0) {
            return 'Name is required';
        }
    }

    render() {
        const nameError = this.validateName();
        return (
            <UserContext.Consumer>
                {({ handleSubmit }) => (
                    <section className="search-name">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(this.state.name.value)

                        }}
                        >
                            <label htmlFor="char-name">Character Name:</label>
                            <input onChange={e => this.nameChanger(e.target.value)} id="char-name" type="text" placeholder="Skywalker" required></input>
                            <button disabled={this.validateName()} type="submit">Search</button>
                            {this.state.name.touched && <ValidationError message={nameError} />}
                        </form>
                    </section>
                )}
            </UserContext.Consumer>
        )
    }
}
