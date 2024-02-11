import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {BORDERRADIUS, SPACING} from '../theme/theme.ts';
import CustomIcon from './CustomIcon.ts';

export interface IBGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}
export const BGIcon: FC<IBGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.iconBG, {backgroundColor: BGColor}]}>
      <CustomIcon color={color} name={name} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
