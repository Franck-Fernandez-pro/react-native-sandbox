import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  DimensionValue,
} from "react-native";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  onPress = () => {},
}: {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{
          width: dimension,
          height: dimension,
          borderRadius: SIZES.small / 1.25,
        }}
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
    justifyContent: "center",
    alignItems: "center",
  },
});
