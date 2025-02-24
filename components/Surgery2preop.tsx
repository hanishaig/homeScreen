import {View, Text} from 'react-native';
import React from 'react';

const Surgery2preop = () => {
  return (
    <View className="flex gap-4">
      <Text className="text-xl font-bold ">
        Patient Prepped with antibiotics
      </Text>
      <View>
        <Text className="text-xl font-bold ">Condition</Text>
        <Text className="text-sm font-light ">Acute Appendictis</Text>
      </View>
      <Text className="text-xl font-bold ">
        Allergic to penicillin-alternative antibiotics
      </Text>
    </View>
  );
};

export default Surgery2preop;
