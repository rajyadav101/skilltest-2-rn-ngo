import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import eventList from "../services/Events";

class EventList extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: "Schedule events"
    };

    render() {
        return (
            <View>
                <ScrollView>
                    {eventList.map((event, index) => {
                        return (
                            <Card style={styles.card} key={index}>
                                <Card.Title
                                    title={event.name}
                                    subtitle={event.date}
                                    subtitle={event.location}
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
