import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import MainLogo from './MainLogo';
import SearchBar from './SearchBar';

const Main = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.welcomeText}>WELCOME TO THE NEU OSD!</Text>
      <MainLogo />
      <SearchBar />
      
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 50,
  },
  logoutButton: {
    marginTop: 130,
    backgroundColor: '#000053',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginBottom: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Main;