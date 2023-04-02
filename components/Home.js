import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useGetProductsQuery } from '../features/APISlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function Home({ navigation }) {
  const { data, error, isLoading } = useGetProductsQuery()

  const dispatch = useDispatch()

  return (
    <View>
      <Text style={styles.heading}>Home</Text>
      <Button
        title='Cart'
        onPress={() => navigation.navigate('Cart')}
      />
      {data?.map((item) => (
        <View key={item.id}>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Image
            source={{
              uri: item.image,
            }}
            style={{ width: 200, height: 200 }}
          />
          <Button
            onPress={() => dispatch(addToCart(item))}
            title='Buy'
          />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: '30px',
    color: 'red',
  },
})
