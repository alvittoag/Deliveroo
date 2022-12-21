import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

import React from "react";

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address }) => {
  console.log(id);
  return (
    <>
      {id === 1 && (
        <TouchableOpacity className="bg-white mr-3 shadow rounded-lg">
          <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-t-lg" />
          <View className="px-3 pb-4 space-y-1">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby · {address} </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {id === 2 && (
        <TouchableOpacity className="bg-white mr-3 shadow rounded-lg">
          <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-t-lg" />
          <View className="px-3 pb-4 space-y-1">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby · {address} </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {id === 3 && (
        <TouchableOpacity className="bg-white mr-3 shadow rounded-lg">
          <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-t-lg" />
          <View className="px-3 pb-4 space-y-1">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby · {address} </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default RestaurantCard;
