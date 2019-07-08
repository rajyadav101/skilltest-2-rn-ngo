import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoading";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

//Importing Screen
import Login from "../screens/Login";
import NgoList from "../screens/NgoList";
import EventList from "../screens/EventList";
import RegisterNgo from "../screens/RegistorNgo";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import NgoMain from "../screens/NgoMain";

//App Navigator
const AppNavigator = createStackNavigator(
    {
        NgoList: NgoList,
        RegisterNgo: RegisterNgo,
        Ngo: Ngo,
        EventList: EventList
    },
    {
        initialRouteName: "NgoList"
    }
);

//For Auth chaeck route
const AuthNavigator = createStackNavigator({
    Login: Login
});

//Main Navigaitor
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
