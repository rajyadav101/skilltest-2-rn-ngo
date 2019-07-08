import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card } from "react-native-paper";
import events from "../services/Events";

class EventList extends Component {
    static navigationOptions = {
      headerTitle: "Upcoming events"
    };
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <View>
          <ScrollView>
            {events.map((event, index) => {
              return (
                <Card style={styles.card} key={index}>
                  <Card.Title
                    title={`${faker.commerce.productAdjective()} ${faker.commerce.productName()} Meet`}
                    subtitle={`On ${faker.date.future()}, ${faker.random.number(
                      2000
                    )} people attending`}
                    left={props => <Avatar.Icon {...props} icon="event-note" />}
                  />
                </Card>
              );
            })}
          </ScrollView>
        </View>
      );
    }
  }
  
  export default class Events extends Component {
    static navigationOptions = {
      headerTitle: "Upcoming events"
    };
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <View>
          <ScrollView>
            {events.map((event, index) => {
              return (
                <Card style={styles.card} key={index}>
                  <Card.Title
                    title={`${faker.commerce.productAdjective()} ${faker.commerce.productName()} Meet`}
                    subtitle={`On ${faker.date.future()}, ${faker.random.number(
                      2000
                    )} people attending`}
                    left={props => <Avatar.Icon {...props} icon="event-note" />}
                  />
                </Card>
              );
            })}
          </ScrollView>
        </View>
      );
    }
  }
  
  export default EventList;
  
  const styles = StyleSheet.create({
    card: {
      margin: 10,
      elevation: 2
    }
  });
