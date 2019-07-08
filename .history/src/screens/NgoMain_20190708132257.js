import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class NgoMain extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam("ngo").name
    });
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const ngo = this.props.navigation.getParam("ngo");
        return (
            <View style={styles.container}>
                <Text style={styles.description}> {ngo.description} </Text>
                <Text>Location : {ngo.location}</Text>
                <Text>Since : {ngo.date}</Text>
                <Text>Working Area/Areas : {ngo.area}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    description: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10
    }
});
