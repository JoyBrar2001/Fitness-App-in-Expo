import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Anticons from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'

const exerciseDetails = () => {
  const item = useLocalSearchParams()
  const router = useRouter()

  return (
    <SafeAreaView className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit='cover'
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="mx-2 absolute rounded-full mt-2 right-0"
        >
          <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
        </TouchableOpacity>

      </View>

      <ScrollView 
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-800 tracking-wide capitalize"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(300).delay(100).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-600 tracking-wide capitalize"
        >
          Equipment : <Text className="font-semibold text-neutral-800">{item.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(300).delay(200).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-600 tracking-wide capitalize"
        >
          Secondary Muscles : <Text className="font-semibold text-neutral-800">{item.secondaryMuscles}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(300).delay(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-600 tracking-wide capitalize"
        >
          Target : <Text className="font-semibold text-neutral-800">{item.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(300).delay(400).springify()}
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-800 tracking-wide capitalize"
        >
          Instructions :
        </Animated.Text>
        {item?.instructions.split(',').map((instruction, index) => {
          return(
            <Animated.Text
            entering={FadeInDown.duration(300).delay(400 + index*100).springify()}
              key={instruction}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800"
            >
              {instruction}
            </Animated.Text>
          )
        })}
      </ScrollView>
      <StatusBar style='dark' />
    </SafeAreaView>
  )
}

export default exerciseDetails