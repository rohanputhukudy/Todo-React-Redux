import React from 'react';
import { Container, Header, Title, Content, Body, Text } from 'native-base';

export default class AllToDo extends React.Component {    
  render() {
    return (
      <Container>
        <Header><Body><Title>All</Title></Body></Header>
        <Content><Text>All Section</Text></Content>    
      </Container>
    );
  }
}
