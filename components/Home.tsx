import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ navigation }: any) => {
  return (
    <View className="h-full w-screen">
      <View className="h-full justify-center">
      <TouchableOpacity
          className="rounded-lg py-2 mx-[20]"
          onPress={() => navigation.navigate('Surgery1')}
        >
          <LinearGradient
            colors={['#000000', '#0060A2']}
            style={{ paddingVertical: 12, borderRadius: 8 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text className="text-white text-center text-3xl">Surgeries</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-lg py-2 mx-[20]"
          onPress={() => navigation.navigate('Emergency1')}
        >
          <LinearGradient
            colors={['#000000', '#0060A2']}
            style={{ paddingVertical: 12, borderRadius: 8 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text className="text-white text-center text-3xl">Emergency</Text>
          </LinearGradient>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Home;
