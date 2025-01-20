import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Popover from "react-native-popover-view";

const [isPopover1Visible, setIsPopover1Visible] = useState(true);
const [isPopover2Visible, setIsPopover2Visible] = useState(false);

const spellTutorial = () => {
  return (
    <View style={styles.container}>
      {/* ----------------------------------Spell Level and Reset------------------------------------------*/}
      <View style={styles.resetButtonView}>
        <Text style={styles.textHeader} ref={ref1}>
          Spell Level: 3
        </Text>
        <Popover
          isVisible={isPopover1Visible}
          fromView={ref1.current}
          onRequestClose={() => {
            setIsPopover1Visible(false), setIsPopover2Visible(true);
          }}
        >
          <View style={styles.popoverContent}>
            <Text>This is a popup pointing at Button 1</Text>
          </View>
        </Popover>
        <TouchableOpacity style={styles.buttonReset}>
          <Text style={styles.buttonText}>Reset Spell</Text>
        </TouchableOpacity>
      </View>
      {/* ----------------------------------Spell Display------------------------------------------*/}
      <ScrollView style={styles.scrollViewHeader}>
        <Text style={styles.textBody}>
          Time to Cast: Action{"     "}Range: 60 feet
        </Text>
        <Text style={styles.textBody}>Area of Effect: 20ft square</Text>
        <Text style={styles.textBody}>
          Save: Dexterity {"      "}Duration: instantaneous
        </Text>
        <Text style={styles.textBody}>
          Spell Damage: 2d8
          {"      "}Damage Type: Fire
        </Text>
        <Text style={styles.textBody}>
          Spell Effect: Target is afraid of the spellcaster and has the
          frightened condition. Target cannot willingly move toward the
          spellcaster and has disadvantage on ability checks and attack rolls
          while they can see the spellcaster.
        </Text>
      </ScrollView>
      <View style={styles.divider}></View>
      {/* ----------------------------------Spell Options------------------------------------------*/}
      <ScrollView style={styles.scrollViewBody}>
        {/* ----------------------------------Damage Value------------------------------------------*/}
        <Text style={styles.textSubtitle}>Damage: 2d8</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.buttonSelected} disabled={true}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textSubtitle}>2</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* -------------------------------Damage Range -------------------------------------*/}
        <TouchableOpacity style={styles.buttonSelected}>
          <Text style={styles.buttonText}>Ranged Spell</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Touch Spell</Text>
        </TouchableOpacity>
        {/* -------------------------------Damage Type -------------------------------------*/}
        <Text style={styles.textSubtitle}>Damage Type: Fire</Text>
        <TouchableOpacity style={styles.buttonSelected}>
          <Text style={styles.buttonText}>Fire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lightning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Thunder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Necrotic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Acid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Poison</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Radiant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Psychic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Force</Text>
        </TouchableOpacity>
        {/* ----------------------------------AOE ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Area of Effect: 20ft square</Text>
        {/* -------------------------------AOE Level 1 -------------------------------------*/}
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>10ft square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>15ft line</Text>
        </TouchableOpacity>
        {/* -------------------------------AOE Level 2 -------------------------------------*/}
        <TouchableOpacity style={styles.buttonSelected}>
          <Text style={styles.buttonText}>20ft square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>30ft line</Text>
        </TouchableOpacity>
        {/* ----------------------------------Duration ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Spell Duration: instantaneous</Text>
        {/* -------------------------------Duration Level 1 -------------------------------------*/}
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>10 minutes</Text>
        </TouchableOpacity>
        {/* ----------------------------------Effect ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Magic Effects: Fear</Text>
        {/* -------------------------------Effect Level 0 -------------------------------------*/}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Knock Prone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Push 10ft</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pull 10ft</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Half Speed Movement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1d4 Aid</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1d4 Penalty</Text>
        </TouchableOpacity>

        {/* -------------------------------Effect Level 1 -------------------------------------*/}
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Levitate 20ft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSelected}>
          <Text style={styles.buttonText}>Fear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Charm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Restrain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Incapacitate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Slow</Text>
        </TouchableOpacity>
        {/* -------------------------------Effect Level 2 -------------------------------------*/}
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Fly 60ft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Teleport 30ft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Paralyze</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Haste</Text>
        </TouchableOpacity>
        {/* -------------------------------Effect Level 3 -------------------------------------*/}
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.buttonTextBlack}>Barrier</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default spellTutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
  },
  textTitle: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    padding: "5%",
  },
  textSubtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
  },
  textBody: {
    color: "white",
    fontSize: 16,
    textAlign: "left",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
  },
  textHeader: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "green",
    paddingVertical: "5%",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "purple", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: "1.5%",
  },
  button1: {
    backgroundColor: "blue", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: "1.5%",
  },
  button2: {
    backgroundColor: "green", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: "1.5%",
  },
  button3: {
    backgroundColor: "yellow", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: "1.5%",
  },
  buttonSelected: {
    backgroundColor: "grey", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: "1.5%",
  },
  buttonReset: {
    backgroundColor: "red", // Red background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: "1.5%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold", // Bold text
  },
  buttonTextBlack: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold", // Bold text
  },
  scrollViewHeader: {
    height: "20%",
  },
  scrollViewBody: {
    height: "60%",
  },
  divider: {
    height: "1%",
    backgroundColor: "white",
  },
  resetButtonView: {
    height: "20%",
    alignContent: "center",
    justifyContent: "center",
  },
  popoverContent: {
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
});
