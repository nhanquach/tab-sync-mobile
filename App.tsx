import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  // enables edge-to-edge mode
  NavigationBar.setPositionAsync("absolute");
  // transparent backgrounds to see through
  NavigationBar.setBackgroundColorAsync("#ffffff00");

  return (
    <>
      <WebView
        source={{ uri: "https://tab-sync-b16b4.web.app/mobileapp" }}
        style={styles.container}
        cacheEnabled={false}
      />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff00",
  },
});
