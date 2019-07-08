import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoading";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = createStackNavigator(
    {
        NgoList: NgoList,
        AddNgo: AddNgo,
        Ngo: Ngo,
        Events: Events
    },
    {
        initialRouteName: "NgoList"
    }
);
const MainNavigator = createSwitchNavigator(
    {
        AuthLoadingScreen: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: "AuthLoadingScreen"
    }
);

export default MainNavigator;
