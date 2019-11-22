import React from 'react';
import { Container, Header, Title, Content, Body, Text } from 'native-base';

export default class CompletedToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header><Body><Title>Completed</Title></Body></Header>
        <Content><Text>Completed Section</Text></Content>
      </Container>
    );
  }
}