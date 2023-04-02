import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './features/store'
import Counter from './components/Counter'
import Home from './components/Home'
import Cart from './components/Cart'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Order from './components/Order'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
          />
          <Stack.Screen
            name='Order'
            component={Order}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
})
