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
    );
  }
}

export default RandomLogic;