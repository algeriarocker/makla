import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <>
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
    <View style={{ padding: 16, backgroundColor: "green"}} >
     <Text> search bar </Text>
    </View>
    <View style={{flex: 1, padding: 16, backgroundColor: "blue"}} >
    <Text> list </Text>
    </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  
});
