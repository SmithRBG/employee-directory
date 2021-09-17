import React, { Component } from "react";
import Card from "./Card";

class RandomContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchNames("Adam");
    }

    searchNames = query => {
        AudioParam.search(query)
        .then(res => this.setState({result:res.data}
        ))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchNames(this.state.search);
    };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
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
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RandomContainer;




/* componentDidMount()

setState()

componentWillUnmount() */