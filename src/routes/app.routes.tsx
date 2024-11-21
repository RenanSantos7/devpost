import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

const Tabs = createBottomTabNavigator();

export default function AppRoutes() {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Pesquisar" component={Search} />
            <Tabs.Screen name="Perfil" component={Profile} />
            {/* <Tabs.Screen name="Post" component={NewPost} /> */}
        </Tabs.Navigator>
    )
};
