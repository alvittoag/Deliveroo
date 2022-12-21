import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 9,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard
        imgUrl="https://images.creativemarket.com/0.1.0/ps/8111445/1820/1205/m1/fpnw/wm1/olfrocsimodqfy08a5nm2fmpqiddwufisocy30smtx6uh1dz6ua8quj4yyujeinb-.jpg?1586524255&s=c4a34b7e4f96fa6f51fa8de113b47601"
        title="Bread"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/asian-soup-noodles-ramen-with-egg-dark-background_66899-475.jpg"
        title="Ramen"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/traditional-japanese-food-sushi-rolls-chopsticks-sushi-dark-background-top-view_2829-2361.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/chinese-food-set-dim-sum-sticks-black-background-top-view-chinese-food-set-dim-sum-sticks-black-desk-background-134076336.jpg"
        title="Dimsum"
      />
      <CategoryCard
        imgUrl="https://i.pinimg.com/originals/be/c4/de/bec4de77e9c454368367727167fcb65f.jpg"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/fresh-seafood-fish-dark-rustic-background_220768-15644.jpg"
        title="Seafood"
      />
    </ScrollView>
  );
};

export default Categories;
