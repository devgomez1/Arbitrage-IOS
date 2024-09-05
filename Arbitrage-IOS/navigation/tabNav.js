import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArbitrageScreen from "../screens/arbitrageScreen.js";
import SettingsScreen from "../screens/settingsScreen.js";
import ProfileScreen from "../screens/profileScreen.js";
import SportsbookScreen from "../screens/sportsbookScreen.js";
import TrackerScreen from "../screens/trackerScreen.js";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Arbitrage" component={ArbitrageScreen} />
        <Tab.Screen name="Odds" component={SportsbookScreen} />
        <Tab.Screen name="Tracker" component={TrackerScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
