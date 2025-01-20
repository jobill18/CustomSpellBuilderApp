import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
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
          Use this app to create custom spells for Dungeons and Dragons! If this
          is your first time, take a look at the tutorial. Otherwise, enjoy
          crafting your own unique spells. Happy spell crafting!!!
        </Text>

        <TouchableOpacity style={styles.buttonTutorial}>
          <Link href="/(tabs)/tutorial">
            <Text style={styles.buttonText}>Tutorial</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link href="/(tabs)/spellOptions">
            <Text style={styles.buttonText}>Create a Spell</Text>
          </Link>
        </TouchableOpacity>
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
    marginHorizontal: "1.5%",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: "1.5%",
    marginHorizontal: "15%",
  },
  buttonTutorial: {
    backgroundColor: "purple", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: "5%",
    marginHorizontal: "15%",
  },
  buttonText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold", // Bold text
  },
});
