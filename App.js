import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  MainHeader from './components/MainHeader';
import WatchList from './components/WatchList';

export default function App(props) {
  return (
    <View style={styles.container}>
      <MainHeader style= {styles.header} />
      {/* <ScrollView alwaysBounceVertical={false} bounces={false} contentContainerStyle={styles.contentContainer} > */}
        <WatchList style={styles.WatchList}/>
      {/* </ScrollView> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  header: {
  },
  watchList: {
    flex: 1,
  },
  contentContainer: {
    // paddingVertical: 20,
    flex: 1,
  }
});
