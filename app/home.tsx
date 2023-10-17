import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../constants";
import PopularJobs from "../components/home/PopularJobs";
import NearbyJobs from "../components/home/NearbyJobs";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/Welcome";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch() {
    search && router.push(`/search/${search}`);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              onPress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              onPress={() => {}}
            />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            search={search}
            setSearch={setSearch}
            onPress={handleSearch}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
