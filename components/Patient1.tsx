import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import Surgery2Innercard from './Surgery2Innercard';
import Surgery2SurgeryTeam from './Surgery2SurgeryTeam';
import Surgery2preop from './Surgery2preop';

const Patient1 = () => {
  const [activeTab, setActiveTab] = useState('Summary');

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
            Pushpa | 85 Years
          </Text>
        </View>
        <View>
          <View className="bg-[#B7E2FF96] rounded-lg self-start flex-row py-2  px-4 align-middle justify-center items-center ">
            <Image
              source={require('../assests/bed.png')}
              style={{height: 35, width: 45}}
            />
            <Text
              className=" text-lg text-white font-bold px-2 
            ">
              A-9-NS 3/934
            </Text>
          </View>
        </View>
      </View>
      <View className=" impatientbox mb-4">
        <Text className="text-center font-bold mb-2 text-xl">
          Impatient Consultation Note
        </Text>
        <View className=" flex-row gap-3 items-center justify-center">
          <Image
            source={require('../assests/time.png')}
            style={{height: 20, width: 20}}
          />
          <Text className="text-[#0060A2] text-center ">
            Reported Time: 22/10/2024 12:30 PM
          </Text>
        </View>
      </View>

      <View className="bar flex-row justify-between bg-[#E8F6FF] rounded-md px-2 py-3 mb-4">
        {['Summary', 'Vitals', 'Reports'].map(tab => (
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

          {activeTab === 'Summary' && (
            <>
              <View>
                <Text className="flex gap-5 bg-[#0060A212] h-89 leading-8 px-4 py-2">
                  <Text>
                    Similar history in the past - managed with ppi infusion no
                    source identified.
                  </Text>
                  <Text>Adv </Text>
                  <Text>Mhc</Text>
                  <Text>2d echo</Text>
                  <Text>Cardiology clearance</Text>
                  <Text>Ugie - to look for source of malena</Text>
                  <Text>
                    In pan 80mg iv stat followed by 8 mg/hr infusion. To
                    confusion rest medicine as before.
                  </Text>
                </Text>
                <View className="flex flex-row gap-2 justify-end mt-4 ">
                  <TouchableOpacity className="">
                    <Text>Download</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className=" rounded-md bg-[#000000]  self-start px-4 border-black  ">
                    <Text className="text-white  ">Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}

          {activeTab === 'Reports' && (
            <>
              <View className=" px-4 py-6  border-gray-400 mb5 shadow-lg ">
                <Text className="text-lg font-bold ">Scan Reports</Text>
                <Text className="text-xl text-pink-500">
                  CT Scan for abdomen
                </Text>
                <View className="flex flex-row gap-2 ">
                  <View className="flex-row">
                    <Image
                      source={require('../assests/location.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Text className="text-xl ">AIG Hospital,Gachibowli</Text>
                  </View>
                  <View className="flex-row gap-3 ">
                    <Image
                      source={require('../assests/send.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Image
                      source={require('../assests/install.png')}
                      style={{height: 20, width: 20}}
                    />
                  </View>
                </View>
              </View>
              <View className=" px-4 py-6 border-gray-400 mb5 shadow-lg ">
                <Text className="text-lg font-bold">Lab Reports</Text>
                <Text className="text-xl text-pink-500">
                  CT Scan for abdomen
                </Text>
                <View className="flex flex-row gap-2 ">
                  <View className="flex-row">
                    <Image
                      source={require('../assests/location.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Text className="text-xl ">AIG Hospital,Gachibowli</Text>
                  </View>
                  <View className="flex-row gap-3 ">
                    <Image
                      source={require('../assests/send.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Image
                      source={require('../assests/install.png')}
                      style={{height: 20, width: 20}}
                    />
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Patient1;
