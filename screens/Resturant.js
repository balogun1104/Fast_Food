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
              <View style={{ flexDirection: 'row',  height: 50}}>
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
                             ...FONTS.h2
                        }}>{restaurant?.name}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ 
                    width: 50,
                    paddingRight: SIZES.padding2 * 3,
                    justifyContent: 'center',
                 }} />
                 <Image 
                 source={icons.list}
                 resizeMode='contain'
                 style={{
                    height: 30,
                    width: 30,
                 }}
                 />
              </View>
         )
    }

    // FoodInfo

    const renderFoodInfo = () => {
        return (
            <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}
            >
                {
                     restaurant?.menu.map((item, index) => (
                        <View 
                        key={`menu-${index}`}
                        style={{alignItems: 'center'}}
                        >
                            <View 
                            style={{height: SIZES.height * 0.35}}
                            >
                                {/* FOod Image */}
                                 <Image 
                                 source={item.photo}
                                 resizeMode= 'cover'
                                 style={{
                                    width: SIZES.width,
                                    height: '100%'
                                }}
                                 />

                                 {/* Quantity  Left*/}

                                 <View style={{
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    width: SIZES.width,
                                    height: 50,
                                    bottom: -20,
                                    flexDirection: 'row',
                                 }}>
                                     <TouchableOpacity
                                     style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25
                                     }}
                                     >
                                        <Text 
                                        style={{
                                            ...FONTS.body1
                                        }}
                                        >-</Text>
                                     </TouchableOpacity>
                                     {/* Quantity Itself */}
                                     <View style={{
                                        width: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLORS.white
                                     }}>
                                         <Text 
                                         style={{
                                            ...FONTS.h2
                                         }}
                                         >5</Text>
                                     </View>
                                     {/* Quantity Right */}
                                      <TouchableOpacity
                                      style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25
                                    }}
                                      >
                                         <Text 
                                        style={{
                                            ...FONTS.body1
                                        }}
                                        >+</Text>
                                      </TouchableOpacity>
                                 </View>
                            </View>

                            {/* Name And Description */}
                            <View 
                            style={{
                                width: SIZES.width,
                                alignItems: 'center',
                                marginTop: 15,
                                paddingHorizontal: SIZES.padding * 2,
                            }}
                            >
                                <Text style={{
                                    marginVertical: 10,
                                    textAlign: '10',
                                    ...FONTS.h2
                                }}
                                
                                >{item.name} - {item.price.toFixed(2)}</Text>
                            </View>
                        </View>

                     ))
                }
            </Animated.ScrollView>
        )
    }
  return (
    <SafeAreaView style= {styles.container}>
        {renderHeader()}
        {renderFoodInfo()}
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