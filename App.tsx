import { StatusBar } from 'expo-status-bar';
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { styles as stylesHome } from "./pages/Home";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins Bold": require("./assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return (<ActivityIndicator style={stylesHome.iconWrapper} size="large" color="white" />);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={
          {
            headerShown: false,
          }
        }/>
        <Stack.Screen name="Todo" component={Todo} options={
          {
            headerShown: false,
          }
        }/>
      </Stack.Navigator>
    <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
