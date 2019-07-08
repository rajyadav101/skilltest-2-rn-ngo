import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, Button, Card, FAB } from "react-native-paper";
import { ngos } from "../utils/dummyData";

export default class NgoList extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: "NGO Compliance"
    };
    addNgo = () => {
        this.props.navigation.navigate("AddNgo");
    };

    handleEventNavigation = () => {
        this.props.navigation.navigate("Events");
    };

    viewDetail = ngo => {
        this.props.navigation.navigate("Ngo", { ngo: ngo });
    };

    render() {
        return (
            <View>
                <ScrollView>
                    {ngos.map((ngo, index) => {
                        return (
                            <Card
                                style={styles.card}
                                key={index}
                                onPress={() => this.viewDetail(ngo)}
                            >
                                <Card.Title
                                    title={ngo.name}
                                    subtitle={ngo.description}
                                />
                                <Card.Actions>
                                    <Button>More info</Button>
                                </Card.Actions>
                            </Card>
                        );
                    })}
                </ScrollView>
                <Button style={styles.fab1} icon="add" onPress={this.addNgo} />
                <Button
                    style={styles.fab2}
                    icon="event-note"
                    onPress={this.handleEventNavigation}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        elevation: 2
    },
    fab1: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 0
    },
    fab2: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 70
    }
});
