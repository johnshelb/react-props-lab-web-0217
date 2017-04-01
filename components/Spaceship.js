const React = require('react')
const ReactDOM = require('react-dom')

class Spaceship extends React.Component{
  render(){
    return(<div className="spaceship">
            <h1>{this.props.name}</h1>
            <p>Speed: {this.props.speed}</p>
            <p>Has rockets?: {this.props.hasRockets}</p>
            <p>Colors: {this.props.colors.join(", ")}</p>
           </div>
         )
       }
     }

    Spaceship.defaultProps = {
      hasRockets: false,
      colors: ['black', 'red']
    }

    module.exports = Spaceship;
