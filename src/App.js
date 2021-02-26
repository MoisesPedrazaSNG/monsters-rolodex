import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/searchbox/searchbox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    console.log('The component is mounted!');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users);
        this.setState({ monsters: users });
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <Searchbox placeholder="Search Monsters" handleChange={e => this.setState({searchField: e.target.value})} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
