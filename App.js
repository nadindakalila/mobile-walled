import HomeScreen from "./Home";
import LoginScreen from "./Login";
import RegisterScreen from "./Register";
import TopUpScreen from "./TopUp";
import TransferScreen from "./Transfer";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthProvider, useAuth } from "./context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TopUp") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Transfer") {
            iconName = focused ? "send" : "send-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#19918F",
        tabBarInactiveTintColor: "darkgrey",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TopUp"
        component={TopUpScreen}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  const auth = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false, // menghilangkan header,
              }}
            />
             <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false, // menghilangkan header,
            }}
            />
          </>
        )}
           
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}
