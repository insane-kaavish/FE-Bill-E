import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

const DashBoard = () => {
  const navigation = useNavigation(); // Hook to access the navigation prop

  const navigateToOverview = () => {
    navigation.navigate('DashBoard');
  };
  const navigateToPrediction = () => console.log('Navigate to Prediction');
  const navigateToRoomWise = () => console.log('Navigate to Room Wise');
  const navigateToProfile = () => {
    navigation.navigate('EditProfile');
  };

  const today = new Date();

  const day = today.getDate();
  const monthName = today.toLocaleString('default', { month: 'long' });
  // const year = today.getFullYear();

  const getOrdinalNum = (n) => {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
  };

  const dateString = `${getOrdinalNum(day)} ${monthName}`;

  return (
    <MenuProvider style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.menuButtonContainer}>
          <Menu>
            <MenuTrigger>
              <Ionicons name="menu" size={30} color="black" />
            </MenuTrigger>
            <MenuOptions style={styles.menuOptionsStyle}>
              <MenuOption onSelect={() => {
                navigation.navigate('EditProfile');
              }}>
                <Text style={styles.menuOptionText}>Profile</Text>
              </MenuOption>
              <MenuOption onSelect={() => {
                navigation.navigate('Settings'); 
              }}>
                <Text style={styles.menuOptionText}>Settings</Text>
              </MenuOption>
              <MenuOption onSelect={() => {
                navigation.navigate('HelpCenter');
              }}>
                <Text style={styles.menuOptionText}>Help center</Text>
              </MenuOption>
              <MenuOption onSelect={() => {
                navigation.navigate('SignIn');
              }}>
                <Text style={styles.menuOptionText}>Sign out</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
        <View style={styles.BillEcontainer}>
            <Text style={styles.BillEtext}>Bill-E</Text>
        </View>
        
        {/* Date*/}
        <View style={styles.Datecontainer}>
          <Text style={styles.Datetext}>{dateString}</Text>
        </View>
        {/* over view text */}
        <View style={styles.OVcontainer}>
            <Text style={styles.OVtext}>Overview</Text>
        </View>
        {/* Current units container or container 4 */}
        <View style={styles.c4}>
            <View style={styles.c4circleContainer}>
                <View style={styles.c4innerCircleContainer}>
            <View style={styles.c4innermostCircleContainer}>
            {/* <View style={styles.c4blackCircle}></View> */}
            <Image source={require('../extra/assets/OV.png')}/>
          </View>
        </View>
      </View>
      <Text style={styles.c4title}>Current Units</Text>
      <Text style={styles.c4description}>
        Based on your current consumption data, your predicted units are 213 and consider good.
      </Text>
      <Text style={styles.c4unitsCount}>213</Text>
        </View>
        <View style={styles.HLcontainer}>
            <Text style={styles.HLtitle}>Highlights</Text>
        </View>
      <View style={styles.VMbuttonContainer}>
        <TouchableOpacity style={styles.VMbutton}>
          <Text style={styles.VMbuttonText}>View more</Text>
          <View style={styles.VMarrowContainer}>
            <View style={styles.VMarrowLine}></View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.c11cardContainer}>
        <Text style={styles.c11expectedBillText}>Expected Bill</Text>
        <Text style={styles.c11amountText}>Rs. 10,523.21</Text>
        <Text style={styles.c11usagePatternText}>Based on ongoing usage pattern</Text>
        <View style={styles.c11iconContainer}>
          <Image source={require('../extra/assets/c11.png')}/>

        </View>
      </View>
      {/* c13 */}
      <View style={styles.c13cardContainer}>
        <Text style={styles.c13titleText}>Latest Consumption Data</Text>
        <View style={styles.c13dateContainer}>
          <Text style={styles.c13numberText}>35</Text>
          <Text style={styles.c13daysAgoText}>days ago</Text>
        </View>
        <View style={styles.c13iconContainer}>
          <View style={styles.c13iconInnerContainer}>
          <Image source={require('../extra/assets/c13.png')}/>
          </View>
        </View>
        <Text style={styles.c13updateRequiredText}>Data Update Required!</Text>
      </View>
      {/* c14 or peak hour card*/}
      <View style={styles.c14container}>
        <Text style={styles.c14title}>Peak Hours</Text>
        <Text style={styles.c14time}>6:30 - 11:30 pm</Text>
        <Text style={styles.c14updated}>updated a week ago</Text>
        <View style={styles.c14iconContainer}>
          <Image source={require('../extra/assets/c14.png')}/>
        </View>
      </View>
      <View style={styles.c12container}>
        <Text style={styles.c12titleText}>Per Unit Price</Text>
        <Text style={styles.c12priceText}>Rs. 23.91</Text>
        <Text style={styles.c12updatedText}>updated 1 day ago</Text>
        <View style={styles.c12iconContainer}>
        <Image source={require('../extra/assets/c12.png')}/>
        </View>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={navigateToOverview}>
          <Ionicons name="home-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPrediction}>
          <Ionicons name="stats-chart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToRoomWise}>
          <Ionicons name="grid-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToProfile}>
          <Ionicons name="person-outline" size={24} color="#000" /> 
        </TouchableOpacity>
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
    // boxShadow: '0px 2px 5px rgba(23, 26, 31, 0.17)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10, // Ensure the menu is above other elements
  },
  menuButtonContainer: {
    padding: 30, // Increase touchable area
  },
  menuOptionsStyle: {
    marginTop: 40, // Adjust the position of the menu dropdown
  },
  menuOptionText: {
    padding: 10,
    fontSize: 16,
  },
  BillEcontainer: {
    left: 60,
    top: 40,
    position: 'absolute',
    textAlign: 'center',
    color: '#171A1F',
    
  },
  BillEtext: {
    fontSize: 48,
    fontFamily: 'Outfit-Bold',
    fontWeight: '700',
    lineHeight: 68,
    wordWrap: 'wrap',
  },
  Iconcontainer: {
    width: 44,
    height: 44,
    left: 316,
    top: 52,
    position: 'absolute',
    backgroundColor: '#CACDF8',
    borderRadius: 22,
    overflow: 'hidden',
  },
  IconimageContainer: {
    width: 44,
    height: 44,
    position: 'absolute',
  },
  Iconimage: {
    width: 44,
    height: 44,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  Iconoverlay: {
    width: 11,
    height: 11,
    left: 32,
    top: 32,
    position: 'absolute',
    backgroundColor: '#1DD75B',
    borderRadius: 5.5,
    borderWidth: 1.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  Datetext: {
    color: '#565E6C',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    fontWeight: '700',
    lineHeight: 20, 
    wordWrap: 'break-word',
  },
  Datecontainer: {
    left: 52,
    top: 114,
    position: 'absolute',
  },
  OVcontainer: {
    left: 21,
    top: 136,
    position: 'absolute',
  },
  OVtext: {
    color: '#171A1F',
    fontSize: 32,
    fontFamily: 'Outfit-Bold',
    fontWeight: '700',
    lineHeight: 48,
    wordWrap: 'break-word',
  },
//   c4
c4: {
    width: 348,
    height: 144,
    left: 21,
    top: 208,
    position: 'absolute',
    backgroundColor: '#F1F2FD',
    borderRadius: 16,
    shadowColor: 'rgba(23, 26, 31, 0.19)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 9,
    elevation: 2, // for Android
  },
  c4circleContainer: {
    width: 72,
    height: 72,
    left: 259,
    top: -1,
    position: 'absolute',
  },
  c4innerCircleContainer: {
    width: 72,
    height: 72,
    left: 0,
    top: 1.31,
    position: 'absolute',
  },
  c4innermostCircleContainer: {
    width: 72,
    height: 72,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  c4blackCircle: {
    width: 72,
    height: 72,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: 'black',
  },
  c4greenCircle: {
    width: 62.35,
    height: 69.38,
    left: 4.82,
    top: 0,
    position: 'absolute',
    backgroundColor: '#2EE82E',
  },
  c4title: {
    left: 20,
    top: 8,
    position: 'absolute',
    color: '#171A1F',
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
    fontWeight: '600',
    lineHeight: 28,
    wordWrap: 'break-word',
  },
  c4description: {
    width: 198,
    left: 20,
    top: 40,
    position: 'absolute',
    color: '#171A1F',
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    lineHeight: 22,
    wordWrap: 'break-word',
  },
  c4unitsCount: {
    left: 276,
    top: 12,
    position: 'absolute',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Outfit-Regular',
    fontWeight: '700',
    lineHeight: 36,
    wordWrap: 'break-word',
  },
//   Highlight text
  HLcontainer: {
    left: 21,
    top: 384,
    position: 'absolute',
  },
  HLtitle: {
    color: '#171A1F',
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    fontWeight: '600',
    lineHeight: 30,
    wordWrap: 'break-word',
  },
//   View more button
  VMbuttonContainer: {
    position: 'absolute',
    left: 285,
    top: 385,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  VMbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  VMbuttonText: {
    color: '#424955',
    fontSize: 11,
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    lineHeight: 18,
    wordWrap: 'break-word',
  },
  VMarrowContainer: {
    width: 12,
    height: 12,
    marginLeft: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  VMarrowLine: {
    width: 1.80,
    height: 3.60,
    borderWidth: 0.72,
    borderColor: '#424955',
  },
//   c11
c11cardContainer: {
    width: 166,
    height: 180,
    left: 21,
    top: 430,
    position: 'absolute',
    backgroundColor: '#7C83ED',
    borderRadius: 16,
    boxShadow: '0px 4px 9px rgba(23, 26, 31, 0.19)',
  },
  c11expectedBillText: {
    left: 8,
    top: 91,
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    fontWeight: '500',
    lineHeight: 22,
    wordWrap: 'break-word',
  },
  c11amountText: {
    left: 7,
    top: 113,
    position: 'absolute',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Outfit-Bold',
    fontWeight: '500',
    lineHeight: 36,
    wordWrap: 'break-word',
  },
  c11usagePatternText: {
    left: 7,
    top: 149,
    position: 'absolute',
    color: 'white',
    fontSize: 11,
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    lineHeight: 18,
    wordWrap: 'break-word',
  },
  c11iconContainer: {
    width: 58,
    height: 58,
    left: 90,
    top: 17,
    position: 'absolute',
  },
  c11icon: {
    width: 38.67,
    height: 48.33,
    left: 9.67,
    top: 4.83,
    position: 'absolute',
    backgroundColor: 'white',
  },
//   c13
c13cardContainer: {
    width: 166,
    height: 180,
    left: 202,
    top: 430,
    position: 'absolute',
    backgroundColor: '#2ACCCF',
    borderRadius: 16,
    boxShadow: '0px 4px 9px rgba(23, 26, 31, 0.19)',
  },
  c13titleText: {
    left: 4,
    top: 94,
    position: 'absolute',
    color: 'white',
    fontSize: 13,
    fontFamily: 'Outfit-Regular',
    fontWeight: '500',
    lineHeight: 22,
    wordWrap: 'break-word',
  },
  c13dateContainer: {
    left: 9,
    top: 113,
    position: 'absolute',
    flexDirection: 'row',
  },
  c13numberText: {
    color: '#FE8754',
    fontSize: 24,
    fontFamily: 'Outfit-Regular',
    fontWeight: '500',
    lineHeight: 36,
    // wordWrap: 'break-word',
  },
  c13daysAgoText: {
    top: 11,
    color: '#FE8754',
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    fontWeight: '500',
    lineHeight: 22,
    // wordWrap: 'break-word',
  },
  c13iconContainer: {
    width: 60,
    height: 60,
    left: 88,
    top: 16,
    position: 'absolute',
  },
  c13iconInnerContainer: {
    width: 50.05,
    height: 50.69,
    left: 6.04,
    top: 4.36,
    position: 'absolute',
  },
  
  c13updateRequiredText: {
    left: 12,
    top: 149,
    position: 'absolute',
    color: 'white',
    fontSize: 11,
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    lineHeight: 18,
    // wordWrap: 'break-word',
  },
//   c14
  c14container: {
    width: 166,
    height: 189,
    left: 21,
    top: 633,
    position: 'absolute',
    backgroundColor: '#125D95',
    borderRadius: 16,
    elevation: 3,
  },
  c14title: {
    left: 7,
    top: 90,
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Outfit-Bold',
    fontWeight: '500',
    lineHeight: 22,
  },
  c14time: {
    left: 7,
    top: 113,
    position: 'absolute',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Outfit-Bold',
    fontWeight: '500',
    lineHeight: 34,
  },
  c14updated: {
    left: 7,
    top: 149,
    position: 'absolute',
    color: 'white',
    fontSize: 11,
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    lineHeight: 18,
  },
  c14iconContainer: {
    width: 58,
    height: 58,
    left: 90,
    top: 20,
    position: 'absolute',
  },
//   c12
  c12container: {
    width: 166,
    height: 189,
    left: 203,
    top: 633,
    position: 'absolute',
    backgroundColor: '#21A1A3',
    boxShadow: '0px 4px 9px rgba(23, 26, 31, 0.19)',
    borderRadius: 16,
  },
  c12titleText: {
    left: 12,
    top: 90,
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    fontWeight: '500',
    lineHeight: 22,
  },
  c12priceText: {
    left: 12,
    top: 112,
    position: 'absolute',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Outfit-Regular',
    fontWeight: '500',
    lineHeight: 36,
  },
  c12updatedText: {
    left: 12,
    top: 149,
    position: 'absolute',
    color: 'white',
    fontSize: 11,
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    lineHeight: 18,
  },
  c12iconContainer: {
    width: 66,
    height: 66,
    left: 82,
    top: 16,
    position: 'absolute',
  },

  

});


export default DashBoard;