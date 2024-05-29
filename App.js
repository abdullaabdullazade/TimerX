import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Timer from './Timer';

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });
  return (
    <View style={styles.container}>
      {isShowSplashScreen ? <SplashScreen /> : <Timer/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});