import React from 'react';
import { Container, Header, Title, Content, Body, Text } from 'native-base';

export default class ActiveToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header><Body><Title>Active</Title></Body></Header>
        <Content><Text>Active Section</Text></Content>    
      </Container>
    );
  }
}