import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const MenuComponent = () => {
  const navigation = useNavigation();

  return (
    <MenuProvider>
      <TouchableOpacity>
        <Menu>
          <MenuTrigger>
            <Ionicons name="menu" size={30} color="black" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => navigation.navigate('EditProfile')}>
              <Text>Profile</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('Settings')}>
              <Text>Settings</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('HelpCenter')}>
              <Text>Help center</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('SignIn')}>
              <Text>Sign out</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </TouchableOpacity>
    </MenuProvider>
  );
};

export default MenuComponent;
