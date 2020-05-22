import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import SearchName from './components/SearchName';
import UserContext from './ContextProvider'
import Results from './components/Results'
import {withRouter} from 'react-router'

class App extends React.Component {
  state = {
    results: [],
    loading : false
  }

  handleSubmit = (name) => {
    this.setState({ loading: true})
    fetch(`https://swapi-thinkful.herokuapp.com/api/people/?search=${name}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        else {
          throw new Error(res.status)
        }
      })
      .then((data) => {
        console.log(data)
        console.log(data.results.map(character => character.name))
        // let nameResults= data.results.map(character => character.name)
        this.setState({ results: data.results, loading:false })
        this.props.history.push('/results')
      })
  }





  render() {
    console.log(this.state.results)
    if (this.state.loading === true) {
      return <p className="loading">Loading...</p>
    }
    return (
      <UserContext.Provider
      value={{
          results: this.state.results,
          handleSubmit : this.handleSubmit
      }}
    >
      <main className='App'>
        <Header />
          <Route path="/" exact component={SearchName} />
          <Route path="/results"component={Results}/>
      </main>
      </UserContext.Provider>
    )
  }
}

export default withRouter (App);