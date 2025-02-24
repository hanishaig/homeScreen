import {View, Text} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Surgery2Innercard = () => {
  return (
    <View className="innercard bg-[#FFFFFF] w-40 py-2 px-2 rounded-2xl">
      <Text className="text-xs text-[#939393]">24 July 2024</Text>
      <View className="flex-row gap-4 items-center justify-center">
        <MaterialIcons name="monitor-heart" size={50} color="#DF1010" />
        <View>
          <Text className="text-xs text-[#939393]">Pulse</Text>
          <Text className="text-[#FF4646]">85 BPM</Text>
        </View>
      </View>
    </View>
  );
};

export default Surgery2Innercard;
