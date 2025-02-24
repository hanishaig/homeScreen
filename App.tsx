import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './components/Home';
import Surgery1 from './components/Surgery1';
import Surgery2 from './components/Surgery2';
import Emergency1 from './components/Emergency1';
import LinearGradient from 'react-native-linear-gradient';
import './global.css';
import Patient1 from './components/Patient1';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: '400'},
            headerBackground: () => (
              <LinearGradient
                colors={['#000000', '#0060A2']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Surgery1"
          component={Surgery1}
          options={{
            title: 'Surgery',
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: '400'},
            headerBackground: () => (
              <LinearGradient
                colors={['#000000', '#0060A2']}
                style={{height: 56}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Surgery2"
          component={Surgery2}
          options={{
            title: 'Surgery',
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: '400'},
            headerBackground: () => (
              <LinearGradient
                colors={['#000000', '#0060A2']}
                style={{height: 56}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
          }}
        />
         <Stack.Screen
          name="Emergency1"
          component={Emergency1}
          options={{
            title: 'Emergency',
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: '400'},
            headerBackground: () => (
              <LinearGradient
                colors={['#000000', '#0060A2']}
                style={{height: 56}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Patient1"
          component={Patient1}
          options={{
            title: 'Patient Surgery',
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: '400'},
            headerBackground: () => (
              <LinearGradient
                colors={['#000000', '#0060A2']}
                style={{height: 56}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
