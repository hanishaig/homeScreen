import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Surgery2SurgeryTeam = () => {
  return (
    <ScrollView>
      <View className="bg-[#F5FBFF] px-5 py-6 flex-row items-center justify-between">
        <View className="flex-row items-center gap-3 w-4/5">
          <Image
            source={require('../assests/sampledoctorimg.webp')}
            style={{height: 70, width: 55, borderRadius: 5}}
          />
          <View className="flex-1">
            <Text className="font-semibold text-base text-[#000]">
              Dr. Sonam Mathur
            </Text>
            <Text className="text-sm text-[#606060]">
              Senior Consultant - Medical Gastroenterology
            </Text>
          </View>
        </View>
        <MaterialIcons name="phone" size={30} color="#000" />
      </View>
    </ScrollView>
  );
};

export default Surgery2SurgeryTeam;
