import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MenuComponent = () => {
  const navigation = useNavigation(); // Hook to access the navigation prop

  return (
    <View style={styles.container}>
      <MenuProvider>
        <View style={styles.headerContainer}>
          <Menu>
            <MenuTrigger>
              <Ionicons name="menu" size={30} color="black" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => { navigation.navigate('EditProfile'); }}>
                <TouchableOpacity style={styles.touchableOption}>
                  <Text>Profile</Text>
                </TouchableOpacity>
              </MenuOption>
              <MenuOption onSelect={() => { navigation.navigate('Settings'); }}>
                <TouchableOpacity style={styles.touchableOption}>
                  <Text>Settings</Text>
                </TouchableOpacity>
              </MenuOption>
              <MenuOption onSelect={() => { navigation.navigate('HelpCenter'); }}>
                <TouchableOpacity style={styles.touchableOption}>
                  <Text>Help center</Text>
                </TouchableOpacity>
              </MenuOption>
              <MenuOption onSelect={() => { navigation.navigate('SignIn'); }}>
                <TouchableOpacity style={styles.touchableOption}>
                  <Text>Sign out</Text>
                </TouchableOpacity>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </MenuProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    position: 'absolute',
    right: 5,
    top: 25,
    zIndex: 10,
  },
  touchableOption: {
    padding: 10,
    backgroundColor: 'lightgray', // Add background color for visibility
  },
});

export default MenuComponent;
