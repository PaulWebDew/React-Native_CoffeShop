import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme.ts';
import {GradientBgIcon} from './GradientBGIcon.tsx';
import {ProfilePic} from './ProfilePic.tsx';

export interface IHeaderBarProps {
  title?: string;
}
export const HeaderBar: FC<IHeaderBarProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <GradientBgIcon
        name={'menu'}
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
