import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Emergency1 = ({navigation}:any) => {
  return (
    <SafeAreaView className="h-full w-screen mt-4 p-5 mb-5 rounded-[4]">
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Patient1')}>
        <View className="box shadow-sm p-5 mb-5 rounded-[4]">
          <View className="flex-row justify-between">
            <Text className="bg-[#0060A2] text-white p-2 rounded font-medium text-lg">
              UHIDAIG.1234
            </Text>
          </View>
          <View className="flex-row mt-2">
            <Text className="text-[#0060A2]">Surgery Date & Time: </Text>
            <Text>12-10-2024 | 10:30AM</Text>
          </View>
          <View className="flex-row mt-2">
            <Text>Manjunath | 51 Years | Male</Text>
          </View>
          <Text className="mt-2">Severe Abdominal PAIN</Text>
          <Text className="mt-1">OT Room 2</Text>
          <View className="flex-row mt-2">
            <Text> A-9-NS 3/934</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Patient1')}>
        <View className="box shadow-sm p-5 mb-5 rounded-[4]">
          <View className="flex-row justify-between">
            <Text className="bg-[#0060A2] text-white p-2 rounded font-medium text-lg">
              UHIDAIG.1234
            </Text>
          </View>
          <View className="flex-row mt-2">
            <Text className="text-[#0060A2]">Surgery Date & Time: </Text>
            <Text>12-10-2024 | 10:30AM</Text>
          </View>
          <View className="flex-row mt-2">
            <Text>Manjunath | 51 Years | Male</Text>
          </View>
          <Text className="mt-2">Severe Abdominal PAIN</Text>
          <Text className="mt-1">OT Room 2</Text>
          <View className="flex-row mt-2">
            <Text> A-9-NS 3/934</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Emergency1;
