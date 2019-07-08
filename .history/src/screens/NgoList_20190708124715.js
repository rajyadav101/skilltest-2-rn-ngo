import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { ngoData } from "../services/ngoData";

class NgoList extends Component {
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
                    {ngoData.map((ngo, index) => {
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
                <Button onPress={this.addNgo} />
                <Button onPress={this.handleEventNavigation} />
            </View>
        );
    }
}

export default NgoList;

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
