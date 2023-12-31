import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfile = ({ navigation }) => {
  const handlePasswordChange = () => {
    navigation.navigate('ChangePassword');
  };
//   const handleEmailChange = () => navigation.navigate('ChangeEmail');
  const handleSettings = () => navigation.navigate('Settings');

  const handleUsernameChange = () => {
    navigation.navigate('ChangeUserName');
};

  const handleEmailChange = () => {
    navigation.navigate('ChangeEmail');
  };
  
  // Bottom Navigation Bar Actions (replace these placeholders with your actual navigation logic)
  const navigateToOverview = () => {
    navigation.navigate('DashBoard');
  };
  const navigateToPrediction = () => console.log('Navigate to Prediction');
  const navigateToRoomWise = () => console.log('Navigate to Room Wise');
  const navigateToProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileSection}>
        <Image source={require('../assets/icon.png')} style={styles.avatar} />
          <Text style={styles.name}>Bashir</Text>
          <Text style={styles.email}>Bashir@gmail.com</Text>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={handleUsernameChange}>
            <Text style={styles.optionText}>Change Username</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={handlePasswordChange}>
            <Text style={styles.optionText}>Change Password</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={handleEmailChange}>
            <Text style={styles.optionText}>Change Email</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={handleSettings}>
            <Text style={styles.optionText}>Settings</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#171A1F',
  },
  email: {
    fontSize: 16,
    color: '#707070',
    marginBottom: 32,
  },
  optionsContainer: {
    marginHorizontal: 20,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 16,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
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
});

export default EditProfile;