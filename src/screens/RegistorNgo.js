import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

class RegistorNgo extends Component {
    static navigationOptions = {
        headerTitle: "Add NGO"
    };
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            area: "",
            type: "",
            category: ""
        };
    }

    render() {
        const { name, description, area, type, category } = this.state;
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
                    label="Type"
                    onChangeText={text => this.handleTextChange(text, "type")}
                    value={type}
                    style={styles.textField}
                />
                <TextInput
                    label="Category"
                    onChangeText={text =>
                        this.handleTextChange(text, "category")
                    }
                    value={category}
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

export default RegistorNgo;
