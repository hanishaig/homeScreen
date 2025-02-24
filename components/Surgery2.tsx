import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Surgery2Innercard from './Surgery2Innercard';
import Surgery2SurgeryTeam from './Surgery2SurgeryTeam';
import Surgery2preop from './Surgery2preop';


const Surgery2 = () => {
  const [activeTab, setActiveTab] = useState('Vitals');

  return (
    <SafeAreaView className="h-full flex-1 mx-7">
      <View className="topCard bg-[#000000] mt-4 rounded-tl-2xl rounded-br-2xl p-4 shadow-2xl mb-4">
        <View className="flex-row justify-between">
          <View className="flex-row gap-4">
            <Text className="text-[#FFFFFF]">22/10/2024</Text>
            <Text className="text-[#FFFFFF]">11:50 PM</Text>
          </View>
          <Text className="bg-[#FFFFFF] text-[#DF1010] px-5 py-1 rounded-3xl font-bold">
            Emergency
          </Text>
        </View>
        <View>
          <Text className="text-[#FFFFFF] font-bold text-lg">UHIDAIG.1234</Text>
          <Text className="text-[#FFFFFF] font-light text-lg">
            Manjunath | 51 Years
          </Text>
        </View>
        <View>
          <Text className="text-[#FFFFFF] font-light text-sm">
            Laparoscopic Appendectomy
          </Text>
          <Text className="text-[#FFFFFF] font-light text-sm">OT Room 2</Text>
        </View>
      </View>

      
      <View className="bar flex-row justify-between bg-[#E8F6FF] rounded-md px-2 py-3 mb-4">
        {['Vitals', 'Surgery Team', 'Pre-op Notes'].map(tab => (
          <TouchableOpacity
            key={tab}
            className={`rounded-lg px-6 py-3 ${
              activeTab === tab ? 'bg-[#0060A2]' : 'bg-transparent'
            }`}
            onPress={() => setActiveTab(tab)}>
            <Text
              className={`font-medium ${
                activeTab === tab ? 'text-white' : 'text-[#0060A2]'
              }`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
      <View className="bg-gray-100 h-96 px-7 py-3 rounded">
        <View className="flex-row flex-wrap gap-3 justify-between">
          {activeTab === 'Vitals' && (
            <>
              <Surgery2Innercard />
              <Surgery2Innercard />
              <Surgery2Innercard />
              <Surgery2Innercard />
              <Surgery2Innercard />
              <Surgery2Innercard />
              <Surgery2Innercard />
              <Surgery2Innercard />
            </>
          )}

          {activeTab === 'Surgery Team' && (
            <>
              <Surgery2SurgeryTeam />
              <Surgery2SurgeryTeam />
              <Surgery2SurgeryTeam />
            </>
          )}

          {activeTab === 'Pre-op Notes' && (
             <>
              <Surgery2preop></Surgery2preop>
             </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Surgery2;
