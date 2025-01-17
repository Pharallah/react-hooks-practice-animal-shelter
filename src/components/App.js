import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(filter) {
    const updateFilter = {
      type: filter
    }
    setFilters(updateFilter)
  }

  function onFindPetsClick() {
    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
      .then(res => res.json())
      .then(animals => setPets(animals))
    } else if (filters.type === "cat") {
      fetch("http://localhost:3001/pets?type=cat")
      .then(res => res.json())
      .then(animals => setPets(animals))
    } else if (filters.type === "dog") {
      fetch("http://localhost:3001/pets?type=dog")
      .then(res => res.json())
      .then(animals => setPets(animals))
    } else if (filters.type === "micropig") {
      fetch("http://localhost:3001/pets?type=micropig")
      .then(res => res.json())
      .then(animals => setPets(animals))
    }
  }

  function onAdoptPet(id) {
    const updatedPets = pets.map(pet => {
      if (pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
            filters={filters} 
            onChangeType={onChangeType}
            onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
            pets={pets}
            onAdoptPet={onAdoptPet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;