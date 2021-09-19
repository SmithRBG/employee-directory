import React, { Component } from "react";
import Card from "./Card";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import UserDetail from "./UserDetail";
import SearchForm from "./SearchForm";
import API from "../utils/API";
//make import for container, row, col, userdetail, usersearch, searchform 

class RandomLogic extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchNames("");
    }

    searchNames = query => {
        API.search(query)
        .then(res => this.setState({result:res.data.results}
        ))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value//[name]=> search: "r"
        });
       const findEmployees = this.state.result.filter(person => {
         return person.name.first.toLowerCase().includes(value.toLowerCase()) ||  person.name.last.toLowerCase().includes(value.toLowerCase())
       });
       this.setState({
         result:findEmployees
       })

    };

    // When the form is submitted, search the API for the value of `this.state.search`
    

  render() {
    return (
    
       <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Name"}
            >
              {this.state.result.length>0 ? (
                this.state.result.map(person =>{
                  return (
                    <UserDetail
                    photo={person.picture.thumbnail}
                    first={person.name.first}
                    last={person.name.last}
                    email={person.email}
                    Phone={person.phone}
                  />
                  )
                })
              
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
             
              />
            </Card>
          </Col>
        </Row>
      </Container>


/*       <Card
              heading={this.state.result.Title || "Search for a Name"}
            >
              {this.state.result.Title ? (
                <UserDetail
                  first={this.state.result.first}
                  last={this.state.result.last}
                  location={this.state.result.location}
                  email={this.state.result.email}
                  age={this.state.result.age}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
          </Card> */
    );
  }
}

export default RandomLogic;




/* componentDidMount()

setState()

componentWillUnmount() */


/* In general what you would do is:
1. When the component loads you need to fetch using randomUser API and keep that array rendered using table
2. When the user tries to sort based on certain criteria such as age or name  , sort and render
Just a front end react stuff that you have to do, no back end work.  It is pretty much like your weather forecast hw that you would have done in HW 6 or 
so, where you will use fetch to get weather data and render, here you will use react and react components to render */