import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row item-center justify-between px-3">
        <Text className="text-xl font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-3">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}
        {id === 1 && (
          <>
            <RestaurantCard
              id={1}
              imgUrl="https://cdn-2.tstatic.net/aceh/foto/bank/images/Restoran-Karens-Diner-yang-Gemar-Memaki-Segera-Buka-di-Jakarta.jpg"
              title="Karren's Dinner"
              rating={4.5}
              genre="Western"
              address="South Jakarta"
              short_description="This is a sushi"
              dishes={[]}
              long={20}
              lat={0}
            />
            <RestaurantCard
              id={1}
              imgUrl="https://assets-pergikuliner.com/HjJ0n42dT0CvuePbZBz2J9VYb4Y=/385x290/smart/https://assets-pergikuliner.com/uploads/image/picture/2564223/picture-1658221289.jpg"
              title="Sushie Tei"
              rating={4.5}
              genre="Japanese"
              address="South Jakarta"
              short_description="This is a sushi"
              dishes={[]}
              long={20}
              lat={0}
            />
          </>
        )}

        {id === 2 && (
          <>
            <RestaurantCard
              id={2}
              imgUrl="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/kfc-blunder-mc-221110-5c93b1.jpg"
              title="KFC Mall Cikampek"
              rating={4.9}
              genre="Western"
              address="Mall Cikampek, Karawang"
              short_description="This is a sushi"
              dishes={[]}
              long={20}
              lat={0}
            />
            <RestaurantCard
              id={2}
              imgUrl="https://asset.kompas.com/crops/PBPw9-I0nBQAr5uiY4NWwnr8VqM=/119x60:839x540/750x500/data/photo/2019/07/02/2448469017.jpg"
              title="MCD Purwasari"
              rating={4.5}
              genre="Western"
              address="Purwasari, Karawang"
              short_description="This is a sushi"
              dishes={[]}
              long={20}
              lat={0}
            />
          </>
        )}

        {id === 3 && (
          <RestaurantCard
            id={3}
            imgUrl="https://img.freepik.com/premium-photo/asian-soup-noodles-ramen-with-egg-dark-background_66899-475.jpg"
            title="Yo ! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="This is a sushi"
            dishes={[]}
            long={20}
            lat={0}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
