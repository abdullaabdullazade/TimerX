import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image, Animated, Text } from "react-native";
import icon from "./timer_icon.jpg";

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, { opacity: fadeAnimation }]}>
        <Image style={styles.image} source={icon} />
      </Animated.View>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  text: {
    marginTop: 20,
    color: "#FFD3D3",
    fontSize: 50,
    textAlign: "center",
  },
});
