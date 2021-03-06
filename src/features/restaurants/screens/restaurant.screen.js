import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../componants/restaurant.info-card.components"
export const RestaurantsScreen = () => (

    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
    <RestaurantInfoCard />
    </View>
   </SafeAreaView>

);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16,
      backgroundColor: "white",
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "transparent",
    },
  });





