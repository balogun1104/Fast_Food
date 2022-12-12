import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { isIphoneX } from 'react-native-iphone-x-helper';
import { icons, COLORS, SIZES, FONTS } from '../constants';

const Resturant = ({route, navigation}) => {
    const [restaurant, setRestaurant] =  useState(undefined);
    const [currentLocation, setCurrentLocation] = useState(undefined);

    useEffect(() => {
        let {item, currentLocation}  = route.params;
        
        setRestaurant(item);
        setCurrentLocation(currentLocation); 
    }, []);

    const renderHeader = () => {
         return (
              <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity style={{
                    width: 50,
                    paddingLeft: SIZES.padding2 * 2,
                    justifyContent: 'center',
                }}
                onPress={() => navigation.goBack() }
                >
                    <Image
                    source={icons.back}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30,
                    }}
                    />
                </TouchableOpacity>
                {/* Restuarnt Name Section */}
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: SIZES.padding * 3,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray3
                    }}
                    >
                        <Text style={{
                             ...FONTS.h3
                        }}>{restaurant?.name}</Text>
                    </View>
                </View>

                 <TouchableOpacity style={{ 
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center',
                 }} />
                 <Image 
                 source={icons.list}
                 resizeMode='contain'
                 style={{
                    height: 40,
                    width: 30,
                 }}
                 />
              </View>
         )
    }
  return (
    <SafeAreaView style= {styles.container}>
        {renderHeader()}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})
export default Resturant