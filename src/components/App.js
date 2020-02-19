import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
      console.log(newType.target.value)
      newType.persist()
      this.setState((prevState) => {
        return {
        ...prevState,
        filters: {
          ...prevState.filters,
          type: newType.target.value
        }
      }
    })
      
      
  }

  onAdoptPet = (id) => {
    // find the pet
    // make a copy of the pet
    // set the state
      // set the pets key equal to a new array
        //* in the new array, concat it with a the copy of pet put in an array literal
    
    const pet = this.state.pets.find(pet => pet.id === id)
    if (!pet.isAdopted) {
    this.setState((prevState => {
      return {
        ...prevState,
        pets: prevState.pets.map(pet => {
          if (pet.id === id ) {
             return {
               ...pet,
               isAdopted: true
             }  
          } else {
            return pet            
          }
        })
      }
    }))
  }

  }

  onFindPetsClick = () => {
    let url = "/api/pets";
    if (this.state.filters.type === "cat") url += `?type=cat`;
    else if (this.state.filters.type === "dog") url += `?type=dog`;
    else if (this.state.filters.type === "micropig") url += `?type=micropig`;
    console.log(url)
    return fetch(url).then(resp => resp.json()).then(pets => this.setState({
      ...this.state,
      pets: pets
    }))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
