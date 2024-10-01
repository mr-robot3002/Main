import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.post(`http://127.0.0.1:8000/api/account/registration/`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          {
            this.state.persons
              .map(person =>
                <li key={person.id}>{person.name}</li>
              )
          }
        </ul>
      )
    }
  }