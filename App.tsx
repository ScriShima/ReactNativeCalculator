/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import Button from "./components/Buttons";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ToastAndroid,
  Alert,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import MyKeyboard from "./components/MyKeyboard";
import { Styles } from "./Styles/GlobalStyles";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function notifyMessage(number: string) {
  switch (number) {
    case "1":
      ToastAndroid.show("1", ToastAndroid.SHORT);
      break;
    case "2":
      ToastAndroid.show("2", ToastAndroid.SHORT);
  }
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}
      >
        <MyKeyboard />
      </View>
    </SafeAreaView>
  );
}
export default App;
