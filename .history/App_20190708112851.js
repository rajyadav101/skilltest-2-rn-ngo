import React, { Fragment } from "react";
import { createAppContainer } from "react-navigation";
import MainNavigator from "./navigation/MainNavigator";

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
    return <AppContainer />;
};

export default App;
