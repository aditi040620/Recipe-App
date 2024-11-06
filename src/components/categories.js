import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from "react-native-reanimated";
import { CachedImages } from "../helpers/images";

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="space-x-4"
            >
                {categories.map((cat, index) => {
                    const isActive = cat.strCategory === activeCategory;
                    const activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10';
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleChangeCategory(cat.strCategory)}
                            className="flex items-center space-y-1"
                        >
                            <View className={`rounded-full p-[6px] ${activeButtonClass}`}>
                                <CachedImages
                                    uri={cat.strCategoryThumb}
                                    style={{ width: hp(6), height: hp(6) }}
                                    className="rounded-full"
                                />
                            </View>
                            <Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
                                {cat.strCategory}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </Animated.View>
    );
}
