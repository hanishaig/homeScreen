import {View, Text, ScrollView,Alert} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SurgeryCard from './SurgeryCard';

const Surgery1 = ({navigation}: any) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{padding: 16}}>
        <SurgeryCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Surgery1;
