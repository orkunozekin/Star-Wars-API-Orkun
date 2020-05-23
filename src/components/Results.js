import React from 'react';
import UserContext from '../ContextProvider';
import './Results.css'

export default class Results extends React.Component {
    static contextType = UserContext;

    render() {
        const results = this.context.results.map((character, index) => {
            return (
                <li key={index}>
                    <p className="char-name"><strong>{character.name}</strong></p>
                    <p>- Starred in {character.films.length} Star Wars films.</p>
                    <p><strong>Skin Color:</strong> {character.skin_color}</p>
                </li>
            )
        })
        return (

            <section className="results">
                <h5>Star Wars Character(s) You Searched For:</h5>
                <ul>
                    {results}
                </ul>
            </section>

        )
    }
}



