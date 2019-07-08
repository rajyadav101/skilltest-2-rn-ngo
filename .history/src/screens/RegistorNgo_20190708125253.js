import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

export default class AddNgo extends Component {
    static navigationOptions = {
        headerTitle: "Add NGO"
    };
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };
    }

    render() {
        const { name, description } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    label="NGO Name"
                    onChangeText={text => this.handleTextChange(text, "name")}
                    value={name}
                    style={styles.textField}
                />
                <TextInput
                    label="Working Area"
                    onChangeText={text => this.handleTextChange(text, "area")}
                    value={area}
                    style={styles.textField}
                />
                <TextInput
                    label="NGO Description"
                    onChangeText={text =>
                        this.handleTextChange(text, "description")
                    }
                    value={description}
                    style={styles.textField}
                />
                <Button mode="contained" onPress={this.handleSubmit}>
                    REGISTER
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    textField: {
        margin: 10
    }
});
