import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.authCheck();
    }

    // get token from local storage
    authCheck = async () => {
        const userToken = await AsyncStorage.getItem("userJWTToken");
        // switch to appropriate navigation screen
        this.props.navigation.navigate(userToken ? "App" : "Auth");
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
