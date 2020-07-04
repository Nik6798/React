import React, { Component } from "react";
import { CardList } from "./Components/CardlList.component";
import "./App.css";
import SearchBox from "./Components/SearchBox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      frameworks: [
        {
          id: "1001",
          name: "ReactJS",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          id: "1002",
          name: "Angular",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
        },
        {
          id: "1003",
          name: "VueJS",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          id: "1004",
          name: "MeteorJS",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/meteor-icon.svg",
        },
        {
          id: "1005",
          name: "ReactJS",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          id: "1006",
          name: "Angular",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
        },
        {
          id: "1007",
          name: "VueJS",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          id: "1008",
          name: "MeteorJS",
          link: "https://reactjs.org/",
          image: "https://cdn.worldvectorlogo.com/logos/meteor-icon.svg",
        },
      ],
      Search: "",
    };
  }

  render() {
    const { frameworks, Search } = this.state;
    const modifiedFrameworks = frameworks.filter((framework) =>
      framework.name.toLowerCase().includes(Search.toLowerCase())
    );
    return (
      <div>
        <h1 className="heading">JavaScript Framworks</h1>
        <SearchBox
          placeholder="Search Here"
          handlechange={(e) => this.setState({ Search: e.target.value })}
        />
        <CardList frameworks={modifiedFrameworks} />
      </div>
    );
  }
}

export default App;
