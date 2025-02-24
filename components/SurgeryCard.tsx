import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SurgeryCard = () => {
  const navigation = useNavigation();

  return (
    <View className="boxcomponent h-full flex-1">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Surgery2')}>
        <View className="box shadow-sm p-5 mb-5 rounded-[4]">
          <View className="flex-row justify-between">
            <Text className="bg-[#0060A2] text-white p-2 rounded font-medium text-lg">
              UHIDAIG.1234
            </Text>
            <Text className="bg-[#FF000040] text-[#DF1010] py-2 px-4 rounded-[20] font-medium text-lg">
              Emergency
            </Text>
          </View>
          <View className="flex-row mt-2">
            <Text className="text-[#0060A2]">Surgery Date & Time: </Text>
            <Text>12-10-2024 | 10:30AM</Text>
          </View>
          <View className="flex-row mt-2">
            <Text>Manjunath | 51 Years | Male</Text>
          </View>
          <Text className="mt-2">Laparoscopic Appendectomy</Text>
          <Text className="mt-1">OT Room 2</Text>
          <View className="flex-row mt-2">
            <Text className="text-[#0060A2]">Anesthetist :</Text>
            <Text> Suma</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Surgery2')}>
        <View className="box rounded-[4] shadow-sm p-5 mb-5">
          <View className="flex-row justify-between">
            <Text className="bg-[#0060A2] text-white p-2 rounded font-medium text-lg">
              UHIDAIG.1234
            </Text>
            <Text className="bg-[#2BFF0040] text-[#209E07] py-2 px-4 rounded-[20] font-medium text-lg ">
              Scheduled
            </Text>
          </View>
          <View className="flex-row mt-2">
            <Text className="text-[#0060A2]">Surgery Date & Time: </Text>
            <Text>12-10-2024 | 10:30AM</Text>
          </View>
          <View className="flex-row mt-2">
            <Text>Manjunath | 51 Years | Male</Text>
          </View>
          <Text className="mt-2">Laparoscopic Appendectomy</Text>
          <Text className="mt-1">OT Room 2</Text>
          <View className="flex-row mt-2">
            <Text className="text-[#0060A2]">Anesthetist :</Text>
            <Text> Suma</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SurgeryCard;
