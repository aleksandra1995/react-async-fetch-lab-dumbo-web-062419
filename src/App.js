// create your App component here
import React, { Component } from 'react'

class App extends Component {
    state = {
        people: ''
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(people => console.log(people)
         )
    }

    render() {
        return (
            <div>
                {this.state.people}
            </div>
        )
    }
}

export default App
