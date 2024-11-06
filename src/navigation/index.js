import * as React from 'react';
import {Navigationcontainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native';
import HomeScreen from 'screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <Navigationcontainer>
            <Stack.Navigator initialRouteName = 'Home' scrrenOptions = {{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="RecipeDeatil" component={RecipeDeatilScreen}/>
            </Stack.Navigator>
        </Navigationcontainer>
    );
}

export default AppNavigation; 