import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ title, imgUrl }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-[83px] rounded-md contrast-50"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold text-s">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
