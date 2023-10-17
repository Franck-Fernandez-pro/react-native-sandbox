import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES, icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

export default function PopularJobCard({
  item,
  selectedJob,
  handleCardPress,
}: {
  item: Job;
  selectedJob: string;
  handleCardPress: (item: Job) => void;
}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
      }}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={{
          ...styles.logoContainer,
          backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
        }}
      >
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : icons.FALLBACK,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={{
            ...styles.jobName,
            color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
          }}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    // color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});
