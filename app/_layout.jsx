import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import exercises from './exercises'

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="exercises" options={{
        presentation: 'fullScreenModal'
      }} />
    </Stack>
  )
}