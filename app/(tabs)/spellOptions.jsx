import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const spellOptions = () => {
  const [damage, setDamage] = useState(0);
  const [damageLevel, setDamageLevel] = useState(0);
  const [aoe, setAoe] = useState(0);
  const [duration, setDuration] = useState(0);
  const [effect, setEffect] = useState(0);
  const [damageValue, setDamageValue] = useState(1);
  const [isDamage, setIsDamage] = useState(false);
  const [isRanged, setIsRanged] = useState(true);
  const [isAoe, setIsAoe] = useState(false);
  const [isDuration, setIsDuration] = useState(false);
  const [isEffect, setIsEffect] = useState(false);
  const [allowDamage, setAllowDamage] = useState(true);
  const [allowAoe, setAllowAoe] = useState(true);
  const [allowDuration, setAllowDuration] = useState(true);
  const [allowEffect, setAllowEffect] = useState(true);
  const [damageSize, setDamageSize] = useState(8);
  const [damageRange, setDamageRange] = useState("120 feet");
  const [damageDeets, setDamageDeets] = useState("");
  const [damageDisplay, setDamageDisplay] = useState("");
  const [aoeDeets, setAoeDeets] = useState("single target");
  const [durationDeets, setDurationDeets] = useState("instantaneous");
  const [effectDeets, setEffectDeets] = useState("");
  const [saveType, setSaveType] = useState("Dexterity");
  const [damageType, setDamageType] = useState("");
  const [isDamageTypePlus, setIsDamageTypePlus] = useState(false);
  const [isDamageTypeNeutral, setIsDamageTypeNeutral] = useState(true);
  const [isDamageTypeMinus, setIsDamageTypeMinus] = useState(false);
  const [isSelectedDamageRange1, setIsSelectedDamageRange1] = useState(false);
  const [isSelectedDamageRange2, setIsSelectedDamageRange2] = useState(false);
  const [isSelectedDamageType1, setIsSelectedDamageType1] = useState(false);
  const [isSelectedDamageType2, setIsSelectedDamageType2] = useState(false);
  const [isSelectedDamageType3, setIsSelectedDamageType3] = useState(false);
  const [isSelectedDamageType4, setIsSelectedDamageType4] = useState(false);
  const [isSelectedDamageType5, setIsSelectedDamageType5] = useState(false);
  const [isSelectedDamageType6, setIsSelectedDamageType6] = useState(false);
  const [isSelectedDamageType7, setIsSelectedDamageType7] = useState(false);
  const [isSelectedDamageType8, setIsSelectedDamageType8] = useState(false);
  const [isSelectedDamageType9, setIsSelectedDamageType9] = useState(false);
  const [isSelectedDamageType10, setIsSelectedDamageType10] = useState(false);
  const [isSelectedAoe1, setIsSelectedAoe1] = useState(false);
  const [isSelectedAoe2, setIsSelectedAoe2] = useState(false);
  const [isSelectedAoe3, setIsSelectedAoe3] = useState(false);
  const [isSelectedAoe4, setIsSelectedAoe4] = useState(false);
  const [isSelectedDuration1, setIsSelectedDuration1] = useState(false);
  const [isSelectedEffect1, setIsSelectedEffect1] = useState(false);
  const [isSelectedEffect2, setIsSelectedEffect2] = useState(false);
  const [isSelectedEffect3, setIsSelectedEffect3] = useState(false);
  const [isSelectedEffect4, setIsSelectedEffect4] = useState(false);
  const [isSelectedEffect5, setIsSelectedEffect5] = useState(false);
  const [isSelectedEffect6, setIsSelectedEffect6] = useState(false);
  const [isSelectedEffect7, setIsSelectedEffect7] = useState(false);
  const [isSelectedEffect8, setIsSelectedEffect8] = useState(false);
  const [isSelectedEffect9, setIsSelectedEffect9] = useState(false);
  const [isSelectedEffect10, setIsSelectedEffect10] = useState(false);
  const [isSelectedEffect11, setIsSelectedEffect11] = useState(false);
  const [isSelectedEffect12, setIsSelectedEffect12] = useState(false);
  const [isSelectedEffect13, setIsSelectedEffect13] = useState(false);
  const [isSelectedEffect14, setIsSelectedEffect14] = useState(false);
  const [isSelectedEffect15, setIsSelectedEffect15] = useState(false);
  const [isSelectedEffect16, setIsSelectedEffect16] = useState(false);
  const [isSelectedEffect17, setIsSelectedEffect17] = useState(false);
  const [isSelectedEffect18, setIsSelectedEffect18] = useState(false);
  const [isDisabledIncrease, setIsDisabledIncrease] = useState(false);
  const [isDisabledDecrease, setIsDisabledDecrease] = useState(true);
  const spellLevel = damage + aoe + duration + effect;

  const resetSpell = () => {
    setDamage(0);
    setDamageLevel(0);
    setAoe(0);
    setDuration(0);
    setEffect(0);
    setDamageValue(1);
    setIsDamage(false);
    setIsRanged(true);
    setIsAoe(false);
    setIsDuration(false);
    setIsEffect(false);
    setAllowDamage(true);
    setAllowAoe(true);
    setAllowDuration(true);
    setAllowEffect(true);
    setDamageSize(8);
    setDamageRange("120 feet");
    setDamageDeets("");
    setDamageDisplay("");
    setAoeDeets("single target");
    setDurationDeets("instantaneous");
    setEffectDeets("");
    setSaveType("Dexterity");
    setDamageType("");
    setIsSelectedDamageRange1(false);
    setIsSelectedDamageRange2(false);
    setIsSelectedDamageType1(false);
    setIsSelectedDamageType2(false);
    setIsSelectedDamageType3(false);
    setIsSelectedDamageType4(false);
    setIsSelectedDamageType5(false);
    setIsSelectedDamageType6(false);
    setIsSelectedDamageType7(false);
    setIsSelectedDamageType8(false);
    setIsSelectedDamageType9(false);
    setIsSelectedDamageType10(false);
    setIsDamageTypePlus(false);
    setIsDamageTypeNeutral(true);
    setIsDamageTypeMinus(false);
    setIsSelectedAoe1(false);
    setIsSelectedAoe2(false);
    setIsSelectedAoe3(false);
    setIsSelectedAoe4(false);
    setIsSelectedDuration1(false);
    setIsSelectedEffect1(false);
    setIsSelectedEffect2(false);
    setIsSelectedEffect3(false);
    setIsSelectedEffect4(false);
    setIsSelectedEffect5(false);
    setIsSelectedEffect6(false);
    setIsSelectedEffect7(false);
    setIsSelectedEffect8(false);
    setIsSelectedEffect9(false);
    setIsSelectedEffect10(false);
    setIsSelectedEffect11(false);
    setIsSelectedEffect12(false);
    setIsSelectedEffect13(false);
    setIsSelectedEffect14(false);
    setIsSelectedEffect15(false);
    setIsSelectedEffect16(false);
    setIsSelectedEffect17(false);
    setIsSelectedEffect18(false);
    setIsDisabledIncrease(false);
    setIsDisabledDecrease(true);
  };
  //-------------------- Damage --------------------//
  const changeDamageType = (type, damageMod, isSelected) => {
    let newSize;
    if (!isSelected) {
      if (damageMod === 0) {
        setIsDamageTypeNeutral(true);
        setIsDamageTypeMinus(false);
        setIsDamageTypePlus(false);
      } else if (damageMod > 0) {
        setIsDamageTypeNeutral(false);
        setIsDamageTypeMinus(false);
        setIsDamageTypePlus(true);
      } else {
        setIsDamageTypeNeutral(false);
        setIsDamageTypeMinus(true);
        setIsDamageTypePlus(false);
      }
      setDamageType(type);
      if (
        (damageMod < 0 && isDamageTypeNeutral) ||
        (damageMod === 0 && isDamageTypePlus)
      ) {
        newSize = damageSize - 2;
        setDamageSize(newSize);
        if (damageValue > 0 && allowDamage && isDamage) {
          setDamageDeets("d" + newSize);
          setDamageDisplay(damageValue + "d" + newSize);
        }
      } else if (
        (damageMod > 0 && isDamageTypeNeutral) ||
        (damageMod === 0 && isDamageTypeMinus)
      ) {
        newSize = damageSize + 2;
        setDamageSize(newSize);
        if (damageValue > 0 && allowDamage && isDamage) {
          setDamageDeets("d" + newSize);
          setDamageDisplay(damageValue + "d" + newSize);
        }
      } else if (damageMod > 0 && isDamageTypeMinus) {
        newSize = damageSize + 4;
        setDamageSize(newSize);
        if (damageValue > 0 && allowDamage && isDamage) {
          setDamageDeets("d" + newSize);
          setDamageDisplay(damageValue + "d" + newSize);
        }
      } else if (damageMod < 0 && isDamageTypePlus) {
        newSize = damageSize - 4;
        setDamageSize(newSize);
        if (damageValue > 0 && allowDamage && isDamage) {
          setDamageDeets("d" + newSize);
          setDamageDisplay(damageValue + "d" + newSize);
        }
      }
    } else {
      setDamageType("");
      setIsDamageTypeMinus(false);
      setIsDamageTypeNeutral(true);
      setIsDamageTypePlus(false);
      if (damageMod < 0) {
        newSize = damageSize + 2;
        setDamageSize(newSize);
        if (damageValue > 0 && allowDamage && isDamage) {
          setDamageDeets("d" + newSize);
          setDamageDisplay(damageValue + "d" + newSize);
        }
      } else if (damageMod > 0) {
        newSize = damageSize - 2;
        setDamageSize(newSize);
        if (damageValue > 0 && allowDamage && isDamage) {
          setDamageDeets("d" + newSize);
          setDamageDisplay(damageValue + "d" + newSize);
        }
      }
    }
  };
  const changeDamage = (size, range, isSelected) => {
    if (!isSelected) {
      let newSize;
      if (allowDamage) {
        setIsDamage(true);
        if (isAoe && damageTypeMinus) {
          setDamageSize(size - 4);
          newSize = size - 4;
        } else if (
          (isAoe && !isDamageTypeMinus && !isDamageTypePlus) ||
          (!isAoe && isDamageTypeMinus && !isDamageTypePlus)
        ) {
          setDamageSize(size - 2);
          newSize = size - 2;
        } else if (!isAoe && !isDamageTypeMinus && isDamageTypePlus) {
          setDamageSize(size + 2);
          newSize = size + 2;
        } else {
          setDamageSize(size);
          newSize = size;
        }
        setDamageRange(range);
        let text = "d" + newSize;
        setIsRanged(range);
        setDamage(damageLevel);
        setDamageDeets(text);
        if (damageValue !== 0) {
          setDamageDisplay(damageValue + text);
        }
        if (range && isAoe) {
          setDamageRange("60 feet");
        } else if (range && !isAoe) {
          setDamageRange("120 feet");
        } else {
          setDamageRange("touch");
        }
      }
    } else {
      setIsDamage(false);
      setDamageDeets("");
      setDamageDisplay("");
      setDamage(0);
      if (isAoe) {
        setDamageRange("60 feet");
      } else {
        setDamageRange("120 feet");
      }
    }
  };
  const increaseDamage = () => {
    if (!isDisabledIncrease) {
      let damage;
      let level;
      if (damageLevel === 0) {
        setIsDisabledDecrease(false);
        setDamageValue(damageValue + 1);
        damage = damageValue + 1;
      } else {
        if (damageLevel === 8) {
          setIsDisabledIncrease(true);
        }
        setDamageValue(damageValue + 2);
        damage = damageValue + 2;
      }
      setDamageLevel(damageLevel + 1);
      level = damageLevel + 1;
      if (isDamage && damageValue > 0) {
        setDamage(level);
        setDamageDisplay(damage + damageDeets);
      }
    }
  };
  const decreaseDamage = () => {
    if (!isDisabledDecrease) {
      let damage;
      let level;
      if (damageLevel === 9) {
        setIsDisabledIncrease(false);
      }
      if (damageLevel <= 1) {
        setDamageValue(damageValue - 1);
        setIsDisabledDecrease(true);
        damage = damageValue - 1;
      } else {
        setDamageValue(damageValue - 2);
        damage = damageValue - 2;
      }
      setDamageLevel(damageLevel - 1);
      level = damageLevel - 1;
      if (damage > 0) {
        if (damageDeets !== "") {
          setDamage(level);
          setDamageDisplay(damage + damageDeets);
        }
      } else {
        setDamageDisplay("");
      }
    }
  };

  //-------------------- AOE --------------------//
  const changeAoe = (value, text, isSelected) => {
    if (allowAoe) {
      if (!isSelected) {
        setAoe(value);
        setAoeDeets(text);
        if (!isAoe) {
          let newSize = damageSize - 2;
          setDamageSize(newSize);

          if (damageValue > 0 && allowDamage && isDamage) {
            setDamageDeets("d" + newSize);
            setDamageDisplay(damageValue + "d" + newSize);
          }
          if (isRanged) {
            setDamageRange("60 feet");
          }
        }
        setIsAoe(true);
      } else {
        setAoe(0);
        if (!isDuration) {
          setAoeDeets("single target");
        } else {
          setAoeDeets("5ft square");
        }
        if (isAoe) {
          let newSize = damageSize + 2;
          setDamageSize(newSize);
          if (damageValue > 0 && allowDamage && isDamage) {
            setDamageDeets("d" + newSize);
            setDamageDisplay(damageValue + "d" + newSize);
          }
          if (isRanged) {
            setDamageRange("120 feet");
          }
        }
        setIsAoe(false);
      }
    }
  };
  //-------------------- Duration --------------------//
  const changeDuration = (isSelected) => {
    if (allowDuration) {
      if (!isSelected) {
        setDuration(1);
        setDurationDeets("10 minutes");
        setIsDuration(true);
        if (!isAoe) {
          setAoeDeets("5ft square");
          if (isRanged) {
            setDamageRange("60 feet");
          }
        }
      } else {
        setIsDuration(false);
        setDuration(0);
        setDurationDeets("instantaneous");
        if (!isAoe) {
          setAoeDeets("single target");
          if (isRanged && !isEffect) {
            setDamageRange("120 feet");
          }
        }
      }
    }
  };
  //-------------------- Effect --------------------//
  const changeEffect = (
    value,
    text,
    damageAllow,
    aoeAllow,
    durationAllow,
    isSelected
  ) => {
    if (allowEffect) {
      if (!isSelected) {
        setEffect(value);
        setEffectDeets(text);
        if (!isEffect) {
          setIsEffect(true);
          let damage = damageValue - 1;
          setDamageValue(damage);
          if (damageLevel === 1 || !isDamage) {
            setDamageDisplay("");
          } else {
            setDamageDisplay(damage + damageDeets);
          }
          setDamageRange("60 feet");
        }
        if (damageAllow) {
          setAllowDamage(true);
        }
        if (aoeAllow) {
          setAllowAoe(true);
        }
        if (durationAllow) {
          setAllowDuration(true);
        }
        if (!damageAllow) {
          changeDamage(0, true, true);
          setAllowDamage(false);
        }
        if (!aoeAllow) {
          changeAoe(0, "single target", false);
          setAllowAoe(false);
        }
        if (!durationAllow) {
          changeDuration(true);
          setAllowDuration(false);
        }
      } else if (isEffect && isSelected) {
        setIsEffect(false);
        let damage = damageLevel + 1;
        setDamageLevel(damage);
        if (damage === 0 || !isDamage) {
          setDamageDisplay("");
        } else {
          setDamageDisplay(damage + damageDeets);
          setDamageValue(damage);
        }
        if (!isAoe && !isDuration) {
          setDamageRange("120 feet");
        }
        setAllowDamage(true);
        setAllowAoe(true);
        setAllowDuration(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Spell Options</Text>
      <Text style={styles.textHeader}>Spell Level: {spellLevel}</Text>
      <Text style={styles.textBody}>
        Time to Cast: Action{"     "}Range: {damageRange}
      </Text>
      <Text style={styles.textBody}>Area of Effect: {aoeDeets}</Text>
      <Text style={styles.textBody}>
        Save: {saveType} {"      "}Duration: {durationDeets}
      </Text>
      <Text style={styles.textBody}>
        Spell Damage: {damageDisplay} {damageType}
      </Text>
      <Text style={styles.textBody}>Spell Effect: {effectDeets}</Text>
      <TouchableOpacity style={styles.buttonReset} onPress={resetSpell}>
        <Text style={styles.buttonText}>Reset Spell</Text>
      </TouchableOpacity>
      <ScrollView>
        {/* ----------------------------------Damage Value------------------------------------------*/}
        <Text style={styles.textSubtitle}>Damage: {damageDisplay}</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.button, isDisabledDecrease && styles.buttonSelected]}
            onPress={() => decreaseDamage()}
            disabled={isDisabledDecrease}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textSubtitle}>{damageValue}</Text>
          <TouchableOpacity
            style={[styles.button, isDisabledIncrease && styles.buttonSelected]}
            onPress={() => increaseDamage()}
            disabled={isDisabledIncrease}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* -------------------------------Damage Range -------------------------------------*/}
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageRange1 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamage(8, true, isSelectedDamageRange1);
            setIsSelectedDamageRange1(!isSelectedDamageRange1);
            setIsSelectedDamageRange2(false);
          }}
        >
          <Text style={styles.buttonText}>range</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageRange2 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamage(10, false, isSelectedDamageRange2);
            setIsSelectedDamageRange1(false);
            setIsSelectedDamageRange2(!isSelectedDamageRange2);
          }}
        >
          <Text style={styles.buttonText}>touch</Text>
        </TouchableOpacity>
        {/* -------------------------------Damage Type -------------------------------------*/}
        <Text style={styles.textSubtitle}>Damage Type: {damageType}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageType1 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Fire", 2, isSelectedDamageType1);
            setIsSelectedDamageType1(!isSelectedDamageType1);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Fire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageType2 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Cold", 2, isSelectedDamageType2);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(!isSelectedDamageType2);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Cold</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageType3 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Lightning", 2, isSelectedDamageType3);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(!isSelectedDamageType3);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Lightning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType4 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Thunder", 0, isSelectedDamageType4);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(!isSelectedDamageType4);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Thunder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType5 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Necrotic", 0, isSelectedDamageType5);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(!isSelectedDamageType5);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Necrotic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType6 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Acid", 0, isSelectedDamageType6);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(!isSelectedDamageType6);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Acid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType7 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Poison", 0, isSelectedDamageType7);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(!isSelectedDamageType7);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Poison</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedDamageType8 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Radiant", -2, isSelectedDamageType8);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(!isSelectedDamageType8);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Radiant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedDamageType9 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Psychic", -2, isSelectedDamageType9);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(!isSelectedDamageType9);
            setIsSelectedDamageType10(false);
          }}
        >
          <Text style={styles.buttonText}>Psychic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedDamageType10 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Force", -2, isSelectedDamageType10);
            setIsSelectedDamageType1(false);
            setIsSelectedDamageType2(false);
            setIsSelectedDamageType3(false);
            setIsSelectedDamageType4(false);
            setIsSelectedDamageType5(false);
            setIsSelectedDamageType6(false);
            setIsSelectedDamageType7(false);
            setIsSelectedDamageType8(false);
            setIsSelectedDamageType9(false);
            setIsSelectedDamageType10(!isSelectedDamageType10);
          }}
        >
          <Text style={styles.buttonText}>Force</Text>
        </TouchableOpacity>
        {/* ----------------------------------AOE ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Area of Effect: {aoeDeets}</Text>
        {/* -------------------------------AOE Level 1 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button1, isSelectedAoe1 && styles.buttonSelected]}
          onPress={() => {
            changeAoe(0, "10ft square ", isSelectedAoe1);
            setIsSelectedAoe1(!isSelectedAoe1);
            setIsSelectedAoe2(false);
            setIsSelectedAoe3(false);
            setIsSelectedAoe4(false);
          }}
        >
          <Text style={styles.buttonText}>10ft square</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedAoe2 && styles.buttonSelected]}
          onPress={() => {
            changeAoe(0, "15ft line ", isSelectedAoe2);
            setIsSelectedAoe1(false);
            setIsSelectedAoe2(!isSelectedAoe2);
            setIsSelectedAoe3(false);
            setIsSelectedAoe4(false);
          }}
        >
          <Text style={styles.buttonText}>15ft line</Text>
        </TouchableOpacity>
        {/* -------------------------------AOE Level 2 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button2, isSelectedAoe3 && styles.buttonSelected]}
          onPress={() => {
            changeAoe(1, "20ft square ", isSelectedAoe3);
            setIsSelectedAoe1(false);
            setIsSelectedAoe2(false);
            setIsSelectedAoe3(!isSelectedAoe3);
            setIsSelectedAoe4(false);
          }}
        >
          <Text style={styles.buttonText}>20ft square</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedAoe4 && styles.buttonSelected]}
          onPress={() => {
            changeAoe(1, "30ft line ", isSelectedAoe4);
            setIsSelectedAoe1(false);
            setIsSelectedAoe2(false);
            setIsSelectedAoe3(false);
            setIsSelectedAoe4(!isSelectedAoe4);
          }}
        >
          <Text style={styles.buttonText}>30ft line</Text>
        </TouchableOpacity>
        {/* ----------------------------------Duration ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Spell Duration: {durationDeets}</Text>
        {/* -------------------------------Duration Level 1 -------------------------------------*/}
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            changeDuration(isSelectedDuration1);
            setIsSelectedDuration1(!isSelectedDuration1);
          }}
        >
          <Text style={styles.buttonText}>10 minutes</Text>
        </TouchableOpacity>
        {/* ----------------------------------Effect ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Magic Effects: {effectDeets}</Text>
        {/* -------------------------------Effect Level 0 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button, isSelectedEffect1 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              0,
              "Knock Prone ",
              true,
              true,
              true,
              isSelectedEffect1
            );
            setIsSelectedEffect1(!isSelectedEffect1);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Knock Prone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSelectedEffect2 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(0, "Push 10ft", true, true, true, isSelectedEffect2);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(!isSelectedEffect2);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Push 10ft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSelectedEffect3 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(0, "Pull 10ft", true, true, true, isSelectedEffect3);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(!isSelectedEffect3);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Pull 10ft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSelectedEffect4 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              0,
              "Slow Movement by half",
              true,
              true,
              true,
              isSelectedEffect4
            );
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(!isSelectedEffect4);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Slow Movement by half</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSelectedEffect5 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              0,
              "add 1d4 to next ability check, attack roll or saving throw",
              false,
              true,
              true,
              isSelectedEffect5
            );
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(!isSelectedEffect5);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>
            add 1d4 to next ability check, attack roll or saving throw
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSelectedEffect6 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              0,
              "1d4 penalty to next ability check, attack roll or saving throw",
              true,
              true,
              true,
              isSelectedEffect6
            );
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(!isSelectedEffect6);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>
            1d4 penalty to next ability check, attack roll or saving throw
          </Text>
        </TouchableOpacity>
        {/* -------------------------------Effect Level 1 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect7 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "levitate 20ft",
              false,
              false,
              true,
              isSelectedEffect7
            );
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(!isSelectedEffect7);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>levitate 20ft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect8 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(1, "Fear", true, true, true, isSelectedEffect8);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(!isSelectedEffect8);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>fear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect9 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(1, "Charm", false, true, true, isSelectedEffect9);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(!isSelectedEffect9);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>charm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect10 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(1, "restrain", true, true, true, isSelectedEffect10);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(!isSelectedEffect10);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>restrain</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect11 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(1, "Barrier", false, true, true, isSelectedEffect11);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(!isSelectedEffect11);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>barrier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect12 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "Incapacitate",
              true,
              true,
              true,
              isSelectedEffect12
            );
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(!isSelectedEffect12);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>incapcitate</Text>
        </TouchableOpacity>
        {/* -------------------------------Effect Level 2 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect13 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(2, "Fly", false, false, true, isSelectedEffect13);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(!isSelectedEffect13);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>fly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect14 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              2,
              "Teleport",
              false,
              false,
              false,
              isSelectedEffect14
            );
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(!isSelectedEffect14);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>teleport</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect15 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(2, "Paralyze", false, true, true, isSelectedEffect15);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(!isSelectedEffect15);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>paralyze</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect16 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(2, "Haste", false, false, true, isSelectedEffect16);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(!isSelectedEffect16);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>haste</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect17 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(2, "Slow", true, false, true, isSelectedEffect17);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(!isSelectedEffect17);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>slow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect18 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(2, "Stun", true, false, true, isSelectedEffect18);
            setIsSelectedEffect1(false);
            setIsSelectedEffect2(false);
            setIsSelectedEffect3(false);
            setIsSelectedEffect4(false);
            setIsSelectedEffect5(false);
            setIsSelectedEffect6(false);
            setIsSelectedEffect7(false);
            setIsSelectedEffect8(false);
            setIsSelectedEffect9(false);
            setIsSelectedEffect10(false);
            setIsSelectedEffect11(false);
            setIsSelectedEffect12(false);
            setIsSelectedEffect13(false);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(!isSelectedEffect18);
          }}
        >
          <Text style={styles.buttonText}>stun</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default spellOptions;

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
    paddingBottom: "2%",
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
});
