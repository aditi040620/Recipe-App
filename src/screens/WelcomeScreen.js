import { View, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen(){
    const ring1padding = userSharedValue(0);
    const ring2padding = userSharedValue(0);
    const navigation = useNavigation();
    useEffect(()=>{
        ring1padding.value=0;
        ring2padding.value=0;
        setTimeout(()=> ring1padding.value = (ring1padding.value+hp(5)),100);
        setTimeout(()=> ring2padding.value = (ring2padding.value+hp(5.5)),300);

        setTimeout(()=> navigation.navigate('Home'),2500)
    },[])
    return(
        <View classname="flex-1 justify-center items-center space-y-10 bg-amber-500">
            <StatusBar style="light"/>

            {/* logo image with rings*/}
            <Animated.View classname="bg-white/20 rounded-full " style={{padding: ring2padding}}>
                <Animated.View classname="bg-white/20 rounded-full "style={{padding:ring1padding}}>
                    <Image source={require('../assets/images/welcome.png')}
                        style={{width:hp(20),height:hp(20)}}/> 
                </Animated.View>
            </Animated.View>
            {/* title and punchline*/}
            <View classname="flex items-center space-y-2">
                <Text style={{fontSize:hp(7)}}classname="font-bold text-white tracking-widest test-6xl">
                    Foody
                </Text>
                <Text style={{fontSize:hp(2)}}classname="font-bold text-white tracking-widest text-lg">
                    Food is always right
                </Text>
            </View>
        </View>
    )
} 