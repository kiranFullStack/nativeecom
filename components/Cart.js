import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart({ navigation }) {
  const cart = useSelector((state) => state.cart.value)

  return (
    <View>
      <Text style={styles.heading}>Cart</Text>
      <Text>{JSON.stringify(cart, null, 2)}</Text>
      <Button
        title='Order'
        onPress={() => navigation.navigate('Order')}
      />
      <Image
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button
        onPress={() => {
          console.log(
            'Button',
            '<------This is the data😊😊😊😊😊😊😊😊😊😊😊😊'
          )
        }}
        title='Hello'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: '30px',
    color: 'red',
  },
})
