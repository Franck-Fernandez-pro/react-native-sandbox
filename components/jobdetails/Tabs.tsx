import { Dispatch } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";

const TabButton = ({
  name,
  activeTab,
  onPress,
}: {
  name: string;
  activeTab: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={{
      ...styles.btn,
      backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    }}
    onPress={onPress}
  >
    <Text
      style={{
        ...styles.btnText,
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
      }}
    >
      {name}
    </Text>
  </TouchableOpacity>
);

export default function Tabs({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        data={tabs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onPress={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  btnText: {
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
  },
});
