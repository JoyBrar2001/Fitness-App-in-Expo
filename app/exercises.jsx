import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Exercises() {
  const router = useRouter()
  const item = useLocalSearchParams()
  console.log('Got item : ', item)
  return (
    <SafeAreaView>
      <StatusBar style='light' />
      <Text>Exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}