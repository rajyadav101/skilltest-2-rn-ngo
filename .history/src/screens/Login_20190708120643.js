import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default class Login extends Component {
    static navigationOptions = {
        headerTitle: "NGO Compliance"
    };
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = (text, name) => this.setState({ [name]: text });

    submit = () => {
        this.props.navigation.navigate("App");
    };

    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    label="User Name"
                    onChangeText={text => this.handleChange(text, "username")}
                    value={email}
                    style={styles.textField}
                />
                <TextInput
                    label="Password"
                    onChangeText={text =>
                        this.handleTextChange(text, "password")
                    }
                    value={password}
                    style={styles.textField}
                />
                <Button mode="contained" onPress={this.submit}>
                    LOGIN
                </Button>
            </View>
        );
    }
}

//Basic styling
const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1
    },
    textField: {
        margin: 10
    }
});
