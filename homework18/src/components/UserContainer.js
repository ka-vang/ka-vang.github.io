import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import UserInfo from "./UserInfo";
import UserList from "../data/directory.json";

class UserContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: UserList,
      search: "",
    }
    this.sortBy = this.sortBy.bind(this);
  }
  sortBy = (key) => {
    this.setState({
      results: UserList.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
    })
  }

  componentDidMount() {
    this.searchUsersFirst();
  }


  searchUsersFirst = () => {
    const searchQuery = this.state.search.trim();
    const searchResultsFirst = UserList.filter((user) => user.first === searchQuery);
    this.setState({ 'result': searchResultsFirst });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsersFirst();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <UserInfo
              search={this.state.search}
              sortBy={this.sortBy}
            />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default UserContainer;
