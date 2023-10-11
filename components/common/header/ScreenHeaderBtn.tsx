import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleProp,
  ImageSourcePropType,
  ImageStyle,
  DimensionValue,
  GestureResponderEvent,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  onPress,
}: {
  iconUrl: ImageSourcePropType;
  dimension: string;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};
export default ScreenHeaderBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: (dimension: DimensionValue): StyleProp<ImageStyle> => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});
