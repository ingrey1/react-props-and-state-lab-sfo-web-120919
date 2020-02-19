import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    console.log(this.props.pets)
  return <div className="ui cards">{this.props.pets.map((pet, index) => <Pet key={index} onAdoptPet={this.props.onAdoptPet} pet={pet} />)}</div>
  }
}

export default PetBrowser
