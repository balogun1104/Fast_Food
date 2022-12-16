import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const OrderDelivery = () => {

  const renderMap = () => {
    return (
      <View>
        <Text>OrderDelivery</Text>
      </View>
    )
  }
  return (
   <SafeAreaView>
    {
      renderMap()
    }
   </SafeAreaView>
  )
}

export default OrderDelivery