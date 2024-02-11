import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LottieView from 'lottie-react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme.ts';

export interface IEmptyListAnimationProps {
  title: string;
}
export const EmptyListAnimation: FC<IEmptyListAnimationProps> = ({title}) => {
  return (
    <View style={styles.emptyCartContainer}>
      <LottieView
        style={styles.lottieStyle}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.lottieText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lottieStyle: {
    height: 300,
  },
  lottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});