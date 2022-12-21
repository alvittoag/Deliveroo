import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-10">
      {/* Header */}
      <View className="flex-row pb-3 mx-2  space-x-2 items-center">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-8 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Hi, Alvitto</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 p-3 rounded-md">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Feature Rows */}
        <FeatureRow
          id={1}
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeatureRow
          id={2}
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeatureRow
          id={3}
          title="Offers near you"
          description="Why not support your local restaurant tonight!"
        />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
