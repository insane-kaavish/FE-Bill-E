import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const NavBar = () => {
    const navigation = useNavigation(); // Hook to access the navigation prop
  
    const navigateToOverview = () => {
      navigation.navigate('DashBoard');
    };
    // Updated function to navigate to Prediction screen
    const navigateToPrediction = () => {
      navigation.navigate('Prediction'); // Ensure 'Prediction' matches the route name defined in your navigator
    };
    const navigateToRoomWise = () => console.log('Navigate to Room Wise');
    const navigateToProfile = () => {
      navigation.navigate('EditProfile');
    };

    return(
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

    );
}

const styles = StyleSheet.create({
    
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
});