import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Campus from './Campus';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='main'
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='home'
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='campus'
            component={Campus}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='signup'
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
