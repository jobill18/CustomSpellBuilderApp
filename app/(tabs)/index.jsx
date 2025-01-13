import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import backgroundWizard from "@/assets/images/Background.jpg";

const home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundWizard}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.textTitle}>Custom Spell Builder</Text>
        <Text style={styles.textBody}>
          Use this app to create custom spells for Dungeons and Dragons! Use the
          navigation below to look at the available spell options. After
          choosing your options, the spell level and effects will be displayed.
        </Text>
      </ImageBackground>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  textTitle: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  textBody: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
