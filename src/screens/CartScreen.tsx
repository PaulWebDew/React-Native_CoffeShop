import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useStore} from '../store/store.ts';

export const CartScreen: FC = () => {
  const cartList = useStore((state: any) => state.CartList);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
