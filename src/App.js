import React from "react"
import img from "../src/img/ronaldo1.webp"
import "./App.css"

import NavP from "../src/NavP/NavP";

export default class App extends React.Component {

  state = {
    Person: {
      fullName: "chaabani majdi ",
      bio: ` diplome en license fondamentale en gestion; ma specialité finance ,`,

      profession: "chef de project ",
      imgSrc: img,


    },
    show: false
  };

  // componentDidMount() {

  //   let person = this.state.Person;
  //   setInterval(() => {
  //     console.log(person)
  //   }, 1000);
  // };


  render() {
    return (

      <div className="section">

        <NavP />
        {this.state.show ?
          <div className="blocI">
            <div  >
              <p>{this.state.Person.fullName}</p>
              <p>{this.state.Person.bio}</p>
              <p>{this.state.Person.profession}</p>

            </div>
            <div>
              <img src={this.state.Person.imgSrc} />

            </div>

          </div> : null

        }





        <div class="center">
          <button onClick={() => { this.setState({ show: !(this.state.show) }) }}>click</button>
          {console.log((this.state.show))}
        </div>



      </div>
    );
  }
}