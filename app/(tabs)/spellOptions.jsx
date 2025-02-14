import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import Popover from "react-native-popover-view";

const spellOptions = () => {
  //------------------------ Display Variables ------------------------//
  // const [damageDisplay, setDamageDisplay] = useState("");
  const [spellLevel, setSpellLevel] = useState(0);
  const [damageDeets, setDamageDeets] = useState("");
  const [aoeDeets, setAoeDeets] = useState("single target");
  const [durationDeets, setDurationDeets] = useState("instantaneous");
  const [effectDeets, setEffectDeets] = useState("");
  const [effectDeetsShort, setEffectDeetsShort] = useState("");
  const [saveType, setSaveType] = useState("Dexterity");
  const [damageType, setDamageType] = useState("");
  const [damageRange, setDamageRange] = useState("120 feet");
  //------------------------ Damage Variables ------------------------//
  const [damageDieAmount, setDamageDieAmount] = useState(0);
  const [damageSize, setDamageSize] = useState(8);
  const [flatDamage, setFlatDamage] = useState(0);
  const [useAbilityModifier, setUseAbilityModifier] = useState(false);
  const [isDisabledUseAbilityModifier, setIsDisabledUseAbilityModifier] =
    useState(false);
  const [spellDamageBonus, setSpellDamageBonus] = useState(1);
  const [spellRangeBonus, setSpellRangeBonus] = useState(0);
  //------------------- Spell Identifier Variables -------------------//
  const [isDamage, setIsDamage] = useState(false);
  const [isRanged, setIsRanged] = useState(true);
  const [isAoe, setIsAoe] = useState(false);
  const [isDuration, setIsDuration] = useState(false);
  const [isEffect, setIsEffect] = useState(false);
  //--------------- Spell Effect Permissions Variables ---------------//
  const [allowDamage, setAllowDamage] = useState(true);
  const [allowAoe, setAllowAoe] = useState(true);
  const [allowDuration, setAllowDuration] = useState(true);
  //------------------- Spell Effect Type Variables -------------------//
  const [duration, setDuration] = useState(0);
  const [aoe, setAoe] = useState(0);
  const [effect, setEffect] = useState(0);
  //------------------------ Button Variables ------------------------//
  const [isSelectedDamageRange1, setIsSelectedDamageRange1] = useState(true);
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
  const [isDisabledIncreaseSize, setIsDisabledIncreaseSize] = useState(false);
  const [isDisabledDecreaseSize, setIsDisabledDecreaseSize] = useState(false);
  const [isDisabledDecreaseFlatBonus, setIsDisabledDecreaseFlatBonus] =
    useState(true);
  const [isDisabledIncreaseFlatBonus, setIsDisabledIncreaseFlatBonus] =
    useState(false);
  const [isDisabledDecreaseDamageAmount, setIsDisabledDecreaseDamageAmount] =
    useState(true);
  const [isDisabledIncreaseDamageAmount, setIsDisabledIncreaseDamageAmount] =
    useState(false);
  const [isDisabledDamageRange1, setIsDisabledDamageRange1] = useState(false);
  const [isDisabledDamageRange2, setIsDisabledDamageRange2] = useState(false);
  const [isDisabledDamageType1, setIsDisabledDamageType1] = useState(false);
  const [isDisabledDamageType2, setIsDisabledDamageType2] = useState(false);
  const [isDisabledDamageType3, setIsDisabledDamageType3] = useState(false);
  const [isDisabledDamageType4, setIsDisabledDamageType4] = useState(false);
  const [isDisabledDamageType5, setIsDisabledDamageType5] = useState(false);
  const [isDisabledDamageType6, setIsDisabledDamageType6] = useState(false);
  const [isDisabledDamageType7, setIsDisabledDamageType7] = useState(false);
  const [isDisabledDamageType8, setIsDisabledDamageType8] = useState(false);
  const [isDisabledDamageType9, setIsDisabledDamageType9] = useState(false);
  const [isDisabledDamageType10, setIsDisabledDamageType10] = useState(false);
  const [isDisabledAoe1, setIsDisabledAoe1] = useState(false);
  const [isDisabledAoe2, setIsDisabledAoe2] = useState(false);
  const [isDisabledAoe3, setIsDisabledAoe3] = useState(false);
  const [isDisabledAoe4, setIsDisabledAoe4] = useState(false);
  const [isDisabledDuration1, setIsDisabledDuration1] = useState(false);
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

  //------------------------ Popop Visibility ------------------------//
  // const [isSpellIntroPopupVisible, setIsSpellIntroPopupVisible] =
  //   useState(true);
  // const [isSpellLevelPopupVisible, setIsSpellLevelPopupVisible] =
  //   useState(false);
  // const [isSpellResetPopupVisible, setIsSpellResetPopupVisible] =
  //   useState(false);
  // const [isSpellDamagePickerPopupVisible, setIsSpellDamagePickerPopupVisible] =
  //   useState(false);
  // const [isSpellDamageTypePopupVisible, setIsSpellDamageTypePopupVisible] =
  //   useState(false);
  // const [isSpellDamageRangePopupVisible, setIsSpellDamageRangePopupVisible] =
  //   useState(false);
  // const [isSpellAoePopupVisible, setIsSpellAoePopupVisible] = useState(false);
  // const [isSpellDurationPopupVisible, setIsSpellDurationPopupVisible] =
  //   useState(false);
  // const [
  //   isSpellEffectGeneralPopupVisible,
  //   setIsSpellEffectGeneralPopupVisible,
  // ] = useState(false);
  // const [
  //   isSpellEffectExamplePopupVisible,
  //   setIsSpellEffectExamplePopupVisible,
  // ] = useState(false);
  // const [isSpellEndPopupVisible, setIsSpellEndPopupVisible] = useState(false);

  //------------------------ Popop References ------------------------//
  // const spellAoe = useRef();
  // const spellDamagePicker = useRef();
  // const spellDamageRange = useRef();
  // const spellDamageType = useRef();
  // const spellDuration = useRef();
  // const spellEffectExample = useRef();
  // const spellEffectGeneral = useRef();
  // const spellEnd = useRef();
  // const spellIntro = useRef();
  // const spellLevelDisplay = useRef();
  // const spellReset = useRef();

  //--------------------- Spell Level Calculation ---------------------//
  const calculateSpellLevel = (
    aoe,
    duration,
    effect,
    damageSize,
    damageDieAmount,
    flatDamage,
    spellDamageBonus,
    spellRangeBonus,
    damageType,
    isDamage,
    useAbilityModifier
  ) => {
    console.log(isDamage);

    let level;
    let damageDisplay;
    let damage;
    let modifier = aoe + duration + effect;
    if (isDamage) {
      if (!useAbilityModifier) {
        damage =
          ((damageSize / 2 + 0.5) * damageDieAmount + flatDamage) *
          (1 - (spellDamageBonus - 1 + spellRangeBonus) * 0.05);
      } else {
        damage =
          ((damageSize / 2 + 0.5) * damageDieAmount + 3.5) *
          (1 - (spellDamageBonus - 1 + spellRangeBonus) * 0.05);
      }
      if (modifier === 0) {
        if (damage < 7) {
          level = 0;
        } else if (damage < 14) {
          level = 1;
        } else if (damage < 22.5) {
          level = 2;
        } else if (damage < 30.5) {
          level = 3;
        } else if (damage < 40.5) {
          level = 4;
        } else if (damage < 55.5) {
          level = 5;
        } else if (damage < 70.5) {
          level = 6;
        } else if (damage < 85.5) {
          level = 7;
        } else if (damage < 100.5) {
          level = 8;
        } else if (damage <= 120) {
          level = 9;
        } else {
          level = "Spell level above 9";
        }
      } else if (modifier === 1) {
        if (damage < 5) {
          level = 0;
        } else if (damage < 12.5) {
          level = 1;
        } else if (damage < 20) {
          level = 2;
        } else if (damage < 28) {
          level = 3;
        } else if (damage < 38) {
          level = 4;
        } else if (damage < 52) {
          level = 5;
        } else if (damage < 67) {
          level = 6;
        } else if (damage < 82) {
          level = 7;
        } else if (damage < 96) {
          level = 8;
        } else if (damage <= 115) {
          level = 9;
        } else {
          level = "Spell level above 9";
        }
      } else if (modifier === 2) {
        if (damage < 8.5) {
          level = 1;
        } else if (damage < 16) {
          level = 2;
        } else if (damage < 24) {
          level = 3;
        } else if (damage < 34) {
          level = 4;
        } else if (damage < 48) {
          level = 5;
        } else if (damage < 63) {
          level = 6;
        } else if (damage < 78) {
          level = 7;
        } else if (damage < 92) {
          level = 8;
        } else if (damage <= 111) {
          level = 9;
        } else {
          level = "Spell level above 9";
        }
      } else if (modifier === 3) {
        if (damage < 5) {
          level = 1;
        } else if (damage < 12.5) {
          level = 2;
        } else if (damage < 20.5) {
          level = 3;
        } else if (damage < 30.5) {
          level = 4;
        } else if (damage < 44.5) {
          level = 5;
        } else if (damage < 59.5) {
          level = 6;
        } else if (damage < 74.5) {
          level = 7;
        } else if (damage < 88.5) {
          level = 8;
        } else if (damage <= 108.5) {
          level = 9;
        } else {
          level = "Spell level above 9";
        }
      } else if (modifier >= 4) {
        if (damage < 8.5) {
          level = 2;
        } else if (damage < 16.5) {
          level = 3;
        } else if (damage < 26.5) {
          level = 4;
        } else if (damage < 40.5) {
          level = 5;
        } else if (damage < 55.5) {
          level = 6;
        } else if (damage < 70.5) {
          level = 7;
        } else if (damage < 84.5) {
          level = 8;
        } else if (damage <= 104.5) {
          level = 9;
        } else {
          level = "Spell level above 9";
        }
      }
      if (flatDamage !== 0) {
        damageDisplay =
          damageDieAmount +
          "d" +
          damageSize +
          "+" +
          flatDamage +
          " " +
          damageType;
      } else if (useAbilityModifier) {
        damageDisplay =
          damageDieAmount +
          "d" +
          damageSize +
          " " +
          "+" +
          " " +
          "Spell Modifer" +
          " " +
          damageType;
      } else {
        damageDisplay = damageDieAmount + "d" + damageSize + " " + damageType;
      }
      setDamageDeets(damageDisplay);
    } else if (!isDamage) {
      let modifier = aoe + duration + effect;
      if (!isNaN(modifier)) {
        level = Number(modifier);
      } else {
        level = 0;
      }
      setDamageDeets("");
    }
    setSpellLevel(Number(level));
  };
  //----------------------------Reset Func-----------------------------//
  resetDamage = () => {
    setDamageDeets("");
    setDamageType("");
    setDamageDieAmount(0);
    setDamageSize(8);
    setFlatDamage(0);
    setUseAbilityModifier(false);
    setSpellRangeBonus(0);
    setIsDisabledIncreaseSize(false);
    setIsDisabledDecreaseSize(false);
    setIsDisabledDecreaseFlatBonus(true);
    setIsDisabledDecreaseDamageAmount(true);
    setIsDamage(false);
  };
  disallowDamage = () => {
    setDamageDeets("");
    setDamageType("");
    setDamageDieAmount(0);
    setDamageSize(8);
    setFlatDamage(0);
    setUseAbilityModifier(false);
    setSpellRangeBonus(0);
    setIsDamage(false);
    setIsDisabledUseAbilityModifier(true);
    setIsDisabledIncreaseSize(true);
    setIsDisabledDecreaseSize(true);
    setIsDisabledIncreaseFlatBonus(true);
    setIsDisabledDecreaseFlatBonus(true);
    setIsDisabledIncreaseDamageAmount(true);
    setIsDisabledDecreaseDamageAmount(true);
    setIsDisabledDamageRange1(true);
    setIsDisabledDamageRange2(true);
    setIsDisabledDamageType1(true);
    setIsDisabledDamageType2(true);
    setIsDisabledDamageType3(true);
    setIsDisabledDamageType4(true);
    setIsDisabledDamageType5(true);
    setIsDisabledDamageType6(true);
    setIsDisabledDamageType7(true);
    setIsDisabledDamageType8(true);
    setIsDisabledDamageType9(true);
    setIsDisabledDamageType10(true);
  };
  reallowDamage = () => {
    setIsDisabledUseAbilityModifier(false);
    setIsDisabledIncreaseSize(false);
    setIsDisabledDecreaseSize(false);
    setIsDisabledIncreaseFlatBonus(false);
    setIsDisabledDecreaseFlatBonus(true);
    setIsDisabledIncreaseDamageAmount(false);
    setIsDisabledDecreaseDamageAmount(true);
    setIsDisabledDamageRange1(false);
    setIsDisabledDamageRange2(false);
    setIsDisabledDamageType1(false);
    setIsDisabledDamageType2(false);
    setIsDisabledDamageType3(false);
    setIsDisabledDamageType4(false);
    setIsDisabledDamageType5(false);
    setIsDisabledDamageType6(false);
    setIsDisabledDamageType7(false);
    setIsDisabledDamageType8(false);
    setIsDisabledDamageType9(false);
    setIsDisabledDamageType10(false);
  };
  resetAoe = () => {
    setAoe(0);
    setIsAoe(false);
    setAoeDeets("single target");
    setIsSelectedAoe1(false);
    setIsSelectedAoe2(false);
    setIsSelectedAoe3(false);
    setIsSelectedAoe4(false);
  };
  reallowAoe = () => {
    setIsDisabledAoe1(false);
    setIsDisabledAoe2(false);
    setIsDisabledAoe3(false);
    setIsDisabledAoe4(false);
  };
  disallowAoe = () => {
    setAoe(0);
    setIsAoe(false);
    setAoeDeets("single target");
    setIsSelectedAoe1(false);
    setIsSelectedAoe2(false);
    setIsSelectedAoe3(false);
    setIsSelectedAoe4(false);
    setIsDisabledAoe1(true);
    setIsDisabledAoe2(true);
    setIsDisabledAoe3(true);
    setIsDisabledAoe4(true);
  };
  resetDuration = () => {
    setDuration(0);
    setIsDuration(false);
    setDurationDeets("instantaneous");
    setIsSelectedDuration1(false);
  };
  reallowDuration = () => {
    setIsDisabledDuration1(false);
  };
  disallowDuration = () => {
    setDuration(0);
    setIsDuration(false);
    setDurationDeets("instantaneous");
    setIsSelectedDuration1(false);
    setIsDisabledDuration1(true);
  };
  resetSpell = () => {
    setSpellLevel(0);
    setDamageDeets("");
    setAoeDeets("single target");
    setDurationDeets("instantaneous");
    setEffectDeets("");
    setEffectDeetsShort("");
    setSaveType("Dexterity");
    setDamageType("");
    setDamageRange("120 feet");
    setDamageDieAmount(0);
    setDamageSize(8);
    setFlatDamage(0);
    setUseAbilityModifier(false);
    setSpellDamageBonus(1);
    setSpellRangeBonus(0);
    setIsDisabledIncreaseSize(false);
    setIsDisabledDecreaseSize(false);
    setIsDisabledDecreaseFlatBonus(true);
    setIsDisabledDecreaseDamageAmount(true);
    setIsDamage(false);
    setIsRanged(false);
    setIsAoe(false);
    setIsDuration(false);
    setIsEffect(false);
    setAllowDamage(true);
    setAllowAoe(true);
    setAllowDuration(true);
    setDuration(0);
    setAoe(0);
    setEffect(0);
    setIsSelectedDamageRange1(true);
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
    setIsDisabledUseAbilityModifier(false);
    setIsDisabledIncreaseSize(false);
    setIsDisabledDecreaseSize(false);
    setIsDisabledDecreaseFlatBonus(true);
    setIsDisabledIncreaseFlatBonus(false);
    setIsDisabledDecreaseDamageAmount(true);
    setIsDisabledIncreaseDamageAmount(false);
    setIsDisabledDamageRange1(false);
    setIsDisabledDamageRange2(false);
    setIsDisabledDamageType1(false);
    setIsDisabledDamageType2(false);
    setIsDisabledDamageType3(false);
    setIsDisabledDamageType4(false);
    setIsDisabledDamageType5(false);
    setIsDisabledDamageType6(false);
    setIsDisabledDamageType7(false);
    setIsDisabledDamageType8(false);
    setIsDisabledDamageType9(false);
    setIsDisabledDamageType10(false);
    setIsDisabledAoe1(false);
    setIsDisabledAoe2(false);
    setIsDisabledAoe3(false);
    setIsDisabledAoe4(false);
    setIsDisabledDuration1(false);
  };
  //--------------------------- Damage ---------------------------//
  const changeDamageType = (type, damageMod, isSelected) => {
    let newSize;
    if (!isSelected) {
      setDamageType(type);
      setSpellDamageBonus(damageMod);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize,
        damageDieAmount,
        flatDamage,
        damageMod,
        spellRangeBonus,
        type,
        isDamage,
        useAbilityModifier
      );
    } else {
      setDamageType("");
      setSpellDamageBonus(1);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize,
        damageDieAmount,
        flatDamage,
        1,
        spellRangeBonus,
        "",
        isDamage,
        useAbilityModifier
      );
    }
  };
  const changeRange = (range, isSelected) => {
    if (!isSelected) {
      if (allowDamage) {
        setIsRanged(range);
        setSpellRangeBonus(range);
        if (range && isAoe) {
          setDamageRange("60 feet");
        } else if (range && !isAoe) {
          setDamageRange("120 feet");
        } else {
          setDamageRange("touch");
        }
        calculateSpellLevel(
          aoe,
          duration,
          effect,
          damageSize,
          damageDieAmount,
          flatDamage,
          spellDamageBonus,
          range,
          damageType,
          isDamage,
          useAbilityModifier
        );
      }
    } else {
      setSpellRangeBonus(!range);
      if (!range) {
        if (isAoe) {
          setDamageRange("60 feet");
        } else {
          setDamageRange("120 feet");
        }
      } else {
        setDamageRange("Touch");
      }
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize,
        damageDieAmount,
        flatDamage,
        spellDamageBonus,
        !range,
        damageType,
        isDamage,
        useAbilityModifier
      );
    }
  };
  const increaseDamage = () => {
    if (allowDamage) {
      if (damageDieAmount === 0) {
        setIsDisabledDecreaseDamageAmount(false);
        setIsDamage(true);
      }
      setDamageDieAmount(damageDieAmount + 1);
    }
    calculateSpellLevel(
      aoe,
      duration,
      effect,
      damageSize,
      damageDieAmount + 1,
      flatDamage,
      spellDamageBonus,
      spellRangeBonus,
      damageType,
      true,
      useAbilityModifier
    );
  };
  const decreaseDamage = () => {
    if (!isDisabledDecreaseDamageAmount) {
      if (damageDieAmount === 1) {
        setIsDisabledDecreaseDamageAmount(true);
        setIsDamage(false);
        calculateSpellLevel(
          aoe,
          duration,
          effect,
          damageSize,
          0,
          flatDamage,
          spellDamageBonus,
          spellRangeBonus,
          damageType,
          false,
          useAbilityModifier
        );
      } else {
        calculateSpellLevel(
          aoe,
          duration,
          effect,
          damageSize,
          damageDieAmount - 1,
          flatDamage,
          spellDamageBonus,
          spellRangeBonus,
          damageType,
          isDamage,
          useAbilityModifier
        );
      }
      setDamageDieAmount(damageDieAmount - 1);
    }
  };
  const increaseDamageFlatBonus = () => {
    if (allowDamage) {
      if (flatDamage === 0) {
        setIsDisabledDecreaseFlatBonus(false);
      }
      setFlatDamage(flatDamage + 1);
      setUseAbilityModifier(false);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize,
        damageDieAmount,
        flatDamage + 1,
        spellDamageBonus,
        spellRangeBonus,
        damageType,
        isDamage,
        false
      );
    }
  };
  const decreaseDamageFlatBonus = () => {
    if (!isDisabledDecreaseFlatBonus) {
      if (flatDamage === 1) {
        setIsDisabledDecreaseFlatBonus(true);
      }
      setFlatDamage(flatDamage - 1);
      setUseAbilityModifier(false);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize,
        damageDieAmount,
        flatDamage - 1,
        spellDamageBonus,
        spellRangeBonus,
        damageType,
        isDamage,
        false
      );
    }
  };
  const useAbilityFlatBonus = (isSelected) => {
    setFlatDamage(0);
    if (!isSelected) {
      setUseAbilityModifier(true);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize,
        damageDieAmount,
        0,
        spellDamageBonus,
        spellRangeBonus,
        damageType,
        isDamage,
        true
      );
      setIsDisabledDecreaseFlatBonus(true);
    } else {
      setUseAbilityModifier(false);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize,
        damageDieAmount,
        0,
        spellDamageBonus,
        spellRangeBonus,
        damageType,
        isDamage,
        false
      );
      setIsDisabledDecreaseFlatBonus(true);
    }
  };
  const increaseDamageSize = () => {
    if (!isDisabledIncreaseSize) {
      if (damageSize === 4) {
        setIsDisabledDecreaseSize(false);
      }
      if (damageSize === 10) {
        setIsDisabledIncreaseSize(true);
      }
      setDamageSize(damageSize + 2);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize + 2,
        damageDieAmount,
        flatDamage,
        spellDamageBonus,
        spellRangeBonus,
        damageType,
        isDamage,
        useAbilityModifier
      );
    }
  };
  const decreaseDamageSize = () => {
    if (!isDisabledDecreaseSize) {
      if (damageSize === 6) {
        setIsDisabledDecreaseSize(true);
      }
      if (damageSize === 12) {
        setIsDisabledIncreaseSize(false);
      }
      setDamageSize(damageSize - 2);
      calculateSpellLevel(
        aoe,
        duration,
        effect,
        damageSize - 2,
        damageDieAmount,
        flatDamage,
        spellDamageBonus,
        spellRangeBonus,
        damageType,
        isDamage,
        useAbilityModifier
      );
    }
  };

  //---------------------------- AOE -----------------------------//
  const changeAoe = (value, text, isSelected) => {
    if (allowAoe) {
      if (!isSelected) {
        setAoe(value);
        setAoeDeets(text);
        setIsAoe(true);
        if (isRanged) {
          setDamageRange("60 feet");
        }
        calculateSpellLevel(
          value,
          duration,
          effect,
          damageSize,
          damageDieAmount,
          flatDamage,
          spellDamageBonus,
          spellRangeBonus,
          damageType,
          isDamage,
          useAbilityModifier
        );
      } else {
        setAoe(0);
        setIsAoe(false);
        setAoeDeets("Single Target");
        if (isRanged) {
          setDamageRange("120 feet");
        }
        calculateSpellLevel(
          0,
          duration,
          effect,
          damageSize,
          damageDieAmount,
          flatDamage,
          spellDamageBonus,
          spellRangeBonus,
          damageType,
          isDamage,
          useAbilityModifier
        );
      }
    }
  };
  //-------------------------- Duration --------------------------//
  const changeDuration = (isSelected) => {
    if (allowDuration) {
      if (!isSelected) {
        setDuration(1);
        setDurationDeets("10 minutes");
        setIsDuration(true);
        if (isRanged) {
          setDamageRange("60 feet");
        }
        calculateSpellLevel(
          aoe,
          1,
          effect,
          damageSize,
          damageDieAmount,
          flatDamage,
          spellDamageBonus,
          spellRangeBonus,
          damageType,
          isDamage,
          useAbilityModifier
        );
      } else {
        setIsDuration(false);
        setDuration(0);
        setDurationDeets("instantaneous");
        if (isRanged && !isEffect) {
          setDamageRange("120 feet");
        }
        calculateSpellLevel(
          aoe,
          0,
          effect,
          damageSize,
          damageDieAmount,
          flatDamage,
          spellDamageBonus,
          spellRangeBonus,
          damageType,
          isDamage,
          useAbilityModifier
        );
      }
    }
  };
  //--------------------------- Effect ---------------------------//
  const changeEffect = (
    value,
    text,
    shortText,
    damageAllow,
    aoeAllow,
    durationAllow,
    isSelected,
    save
  ) => {
    let area;
    let time;
    let size;
    let spellEffect;
    let amount;
    let flat;
    let damageBonus;
    let rangeBonus;
    let type;
    let damageStatus;
    let ability;

    if (!isSelected) {
      spellEffect = value;
      setSaveType(save);
      setEffect(value);
      setEffectDeets(text);
      setEffectDeetsShort(shortText);
      if (isRanged) {
        setDamageRange("60 feet");
      }
      if (!isEffect) {
        setIsEffect(true);
      }
      if (damageAllow) {
        setAllowDamage(true);
        reallowDamage();
        size = damageSize;
        amount = damageDieAmount;
        flat = flatDamage;
        damageBonus = spellDamageBonus;
        rangeBonus = spellRangeBonus;
        type = damageType;
        damageStatus = isDamage;
        ability = useAbilityModifier;
      }
      if (aoeAllow) {
        setAllowAoe(true);
        reallowAoe();
        area = aoe;
      }
      if (durationAllow) {
        setAllowDuration(true);
        reallowDuration();
        time = duration;
      }
      if (!damageAllow) {
        setAllowDamage(false);
        disallowDamage();
        size = 8;
        amount = 0;
        flat = 0;
        damageBonus = 1;
        rangeBonus = 0;
        type = "";
        damageStatus = false;
        ability = false;
      }
      if (!aoeAllow) {
        setAllowAoe(false);
        disallowAoe();
        area = 0;
      }
      if (!durationAllow) {
        setAllowDuration(false);
        disallowDuration();
        time = 0;
      }
    } else {
      spellEffect = 0;
      setIsEffect(false);
      if (!isAoe && !isDuration) {
        setDamageRange("120 feet");
      }
      setAllowDamage(true);
      setAllowAoe(true);
      setAllowDuration(true);
      setSaveType("Dexterity");
      setEffect(0);
      setEffectDeets("");
      setEffectDeetsShort("");
      if (!damageAllow) {
        reallowDamage();
        size = 8;
        amount = 0;
        flat = 0;
        damageBonus = 1;
        rangeBonus = 0;
        type = "";
        damageStatus = false;
        ability = false;
      } else {
        size = damageSize;
        amount = damageDieAmount;
        flat = flatDamage;
        damageBonus = spellDamageBonus;
        rangeBonus = spellRangeBonus;
        type = damageType;
        damageStatus = isDamage;
        ability = useAbilityModifier;
      }
      if (!aoeAllow) {
        reallowAoe();
        area = 0;
      } else {
        area = aoe;
      }
      if (!durationAllow) {
        reallowDuration();
        time = 0;
      } else {
        time = duration;
      }
    }
    calculateSpellLevel(
      area,
      time,
      spellEffect,
      size,
      amount,
      flat,
      damageBonus,
      rangeBonus,
      type,
      damageStatus,
      ability
    );
  };

  return (
    <View style={styles.container}>
      {/* -------------------------*****Spell Level and Reset*****---------------------------------*/}
      <View style={styles.resetButtonView}>
        {/* <Text style={styles.textTitle}>Spell Options</Text> */}
        <Text style={styles.textHeader}>Spell Level: {spellLevel}</Text>
        <TouchableOpacity style={styles.buttonReset} onPress={resetSpell}>
          <Text style={styles.buttonText}>Reset Spell</Text>
        </TouchableOpacity>
      </View>
      {/* -----------------------------*****Spell Display*****-------------------------------------*/}
      <ScrollView style={styles.scrollViewHeader}>
        <Text style={styles.textBody}>
          Time to Cast: Action{"     "}Range: {damageRange}
        </Text>
        <Text style={styles.textBody}>Area of Effect: {aoeDeets}</Text>
        <Text style={styles.textBody}>
          Save: {saveType} {"      "}Duration: {durationDeets}
        </Text>
        <Text style={styles.textBody}>Spell Damage: {damageDeets}</Text>
        <Text style={styles.textBody}>Spell Effect: {effectDeets}</Text>
      </ScrollView>
      <View style={styles.divider}></View>
      {/* -----------------------------*****Spell Options*****-------------------------------------*/}
      <ScrollView style={styles.scrollViewBody}>
        {/* ---------------------------------Damage Value-----------------------------------------*/}
        <Text style={styles.textSubtitle}>Damage: {damageDeets}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.textSubtitle}>Dice</Text>
          <TouchableOpacity
            style={[
              styles.button,
              isDisabledDecreaseDamageAmount && styles.buttonSelected,
            ]}
            onPress={() => decreaseDamage()}
            disabled={isDisabledDecreaseDamageAmount}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textSubtitle}>{damageDieAmount}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              isDisabledIncreaseDamageAmount && styles.buttonSelected,
            ]}
            onPress={() => increaseDamage()}
            disabled={isDisabledIncreaseDamageAmount}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* --------------------------------Change Damage Die Size-------------------------------- */}
        <View style={styles.rowContainer}>
          <Text style={styles.textSubtitle}>Dice Size:</Text>
          <TouchableOpacity
            style={[
              styles.button,
              isDisabledDecreaseSize && styles.buttonSelected,
            ]}
            onPress={() => decreaseDamageSize()}
            disabled={isDisabledDecreaseSize}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textSubtitle}>d{damageSize}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              isDisabledIncreaseSize && styles.buttonSelected,
            ]}
            onPress={() => increaseDamageSize()}
            disabled={isDisabledIncreaseSize}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* ----------------------------------Change Flat Damage---------------------------------- */}

        <View style={styles.rowContainer}>
          <Text style={styles.textSubtitle}>Bonus:</Text>
          <TouchableOpacity
            style={[
              styles.button,
              isDisabledDecreaseFlatBonus && styles.buttonSelected,
              useAbilityModifier && styles.buttonSelected,
            ]}
            onPress={() => decreaseDamageFlatBonus()}
            disabled={isDisabledDecreaseFlatBonus || useAbilityModifier}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textSubtitle}>{flatDamage}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              useAbilityModifier && styles.buttonSelected,
              isDisabledIncreaseFlatBonus && styles.buttonSelected,
            ]}
            onPress={() => increaseDamageFlatBonus()}
            disabled={isDisabledIncreaseFlatBonus || useAbilityModifier}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              useAbilityModifier && styles.buttonSelected,
              isDisabledUseAbilityModifier && styles.buttonSelected,
            ]}
            onPress={() => {
              useAbilityFlatBonus(useAbilityModifier),
                setUseAbilityModifier(!useAbilityModifier);
            }}
            disabled={isDisabledUseAbilityModifier}
          >
            <Text style={styles.buttonText}>add Spell Casting Modifier</Text>
          </TouchableOpacity>
        </View>
        {/* -------------------------------Damage Range -------------------------------------*/}
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageRange1 && styles.buttonSelected,
            isDisabledDamageRange1 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeRange(true, isSelectedDamageRange1);
            setIsSelectedDamageRange1(!isSelectedDamageRange1);
            setIsSelectedDamageRange2(!isSelectedDamageRange2);
          }}
          disabled={isDisabledDamageRange1}
        >
          <Text style={styles.buttonText}>Ranged Spell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageRange2 && styles.buttonSelected,
            isDisabledDamageRange2 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeRange(false, isSelectedDamageRange2);
            setIsSelectedDamageRange1(!isSelectedDamageRange1);
            setIsSelectedDamageRange2(!isSelectedDamageRange2);
          }}
          disabled={isDisabledDamageRange2}
        >
          <Text style={styles.buttonText}>Touch Spell</Text>
        </TouchableOpacity>
        {/* -------------------------------Damage Type -------------------------------------*/}
        <Text style={styles.textSubtitle}>Damage Type: {damageType}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageType1 && styles.buttonSelected,
            isDisabledDamageType1 && styles.buttonSelected,
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
          disabled={isDisabledDamageType1}
        >
          <Text style={styles.buttonText}>Fire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageType2 && styles.buttonSelected,
            isDisabledDamageRange2 && styles.buttonSelected,
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
          disabled={isDisabledDamageType2}
        >
          <Text style={styles.buttonText}>Cold</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isSelectedDamageType3 && styles.buttonSelected,
            isDisabledDamageType3 && styles.buttonSelected,
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
          disabled={isDisabledDamageType3}
        >
          <Text style={styles.buttonText}>Lightning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType4 && styles.buttonSelected,
            isDisabledDamageType4 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Thunder", 1, isSelectedDamageType4);
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
          disabled={isDisabledDamageType4}
        >
          <Text style={styles.buttonText}>Thunder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType5 && styles.buttonSelected,
            isDisabledDamageType5 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Necrotic", 1, isSelectedDamageType5);
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
          disabled={isDisabledDamageType5}
        >
          <Text style={styles.buttonText}>Necrotic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType6 && styles.buttonSelected,
            isDisabledDamageType6 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Acid", 1, isSelectedDamageType6);
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
          disabled={isDisabledDamageType6}
        >
          <Text style={styles.buttonText}>Acid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDamageType7 && styles.buttonSelected,
            isDisabledDamageType7 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Poison", 1, isSelectedDamageType7);
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
          disabled={isDisabledDamageType7}
        >
          <Text style={styles.buttonText}>Poison</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedDamageType8 && styles.buttonSelected,
            isDisabledDamageType8 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Radiant", 0, isSelectedDamageType8);
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
          disabled={isDisabledDamageType8}
        >
          <Text style={styles.buttonText}>Radiant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedDamageType9 && styles.buttonSelected,
            isDisabledDamageType9 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Psychic", 0, isSelectedDamageType9);
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
          disabled={isDisabledDamageType9}
        >
          <Text style={styles.buttonText}>Psychic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedDamageType10 && styles.buttonSelected,
            isDisabledDamageType10 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDamageType("Force", 0, isSelectedDamageType10);
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
          disabled={isDisabledDamageType10}
        >
          <Text style={styles.buttonText}>Force</Text>
        </TouchableOpacity>
        {/* ----------------------------------AOE ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Area of Effect: {aoeDeets}</Text>
        {/* -------------------------------AOE Level 1 -------------------------------------*/}
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedAoe1 && styles.buttonSelected,
            isDisabledAoe1 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeAoe(1, "10ft radius circle", isSelectedAoe1);
            setIsSelectedAoe1(!isSelectedAoe1);
            setIsSelectedAoe2(false);
            setIsSelectedAoe3(false);
            setIsSelectedAoe4(false);
          }}
          disabled={isDisabledAoe1}
        >
          <Text style={styles.buttonText}>10ft radius circle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedAoe2 && styles.buttonSelected,
            isDisabledAoe2 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeAoe(1, "15ft line ", isSelectedAoe2);
            setIsSelectedAoe1(false);
            setIsSelectedAoe2(!isSelectedAoe2);
            setIsSelectedAoe3(false);
            setIsSelectedAoe4(false);
          }}
          disabled={isDisabledAoe2}
        >
          <Text style={styles.buttonText}>15ft line</Text>
        </TouchableOpacity>
        {/* -------------------------------AOE Level 2 -------------------------------------*/}
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedAoe3 && styles.buttonSelected,
            isDisabledAoe3 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeAoe(2, "20ft radius circle", isSelectedAoe3);
            setIsSelectedAoe1(false);
            setIsSelectedAoe2(false);
            setIsSelectedAoe3(!isSelectedAoe3);
            setIsSelectedAoe4(false);
          }}
          disabled={isDisabledAoe3}
        >
          <Text style={styles.buttonText}>20ft radius circle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            isSelectedAoe4 && styles.buttonSelected,
            isDisabledAoe4 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeAoe(2, "30ft line ", isSelectedAoe4);
            setIsSelectedAoe1(false);
            setIsSelectedAoe2(false);
            setIsSelectedAoe3(false);
            setIsSelectedAoe4(!isSelectedAoe4);
          }}
          disabled={isDisabledAoe4}
        >
          <Text style={styles.buttonText}>30ft line</Text>
        </TouchableOpacity>
        {/* ----------------------------------Duration ------------------------------------------*/}
        <Text style={styles.textSubtitle}>Spell Duration: {durationDeets}</Text>
        {/* -------------------------------Duration Level 1 -------------------------------------*/}
        <TouchableOpacity
          style={[
            styles.button1,
            isSelectedDuration1 && styles.buttonSelected,
            isDisabledDuration1 && styles.buttonSelected,
          ]}
          onPress={() => {
            changeDuration(isSelectedDuration1);
            setIsSelectedDuration1(!isSelectedDuration1);
          }}
          disabled={isDisabledDuration1}
        >
          <Text style={styles.buttonText}>10 minutes</Text>
        </TouchableOpacity>
        {/* ----------------------------------Effect ------------------------------------------*/}
        <Text style={styles.textSubtitle}>
          Magic Effects: {effectDeetsShort}
        </Text>
        {/* -------------------------------Effect Level 0 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button, isSelectedEffect1 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              0,
              "Knock Prone",
              "Prone",
              true,
              true,
              true,
              isSelectedEffect1,
              "Dexterity or Strength"
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
            changeEffect(
              0,
              "Push 10ft",
              "Push",
              true,
              true,
              false,
              isSelectedEffect2,
              "Strength"
            );
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
            changeEffect(
              0,
              "Pull 10ft",
              "Pull",
              true,
              true,
              false,
              isSelectedEffect3,
              "Strength"
            );
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
              "Affected creature's movement is reduced by half",
              "Half speed",
              true,
              true,
              true,
              isSelectedEffect4,
              "Strength"
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
          <Text style={styles.buttonText}>Half speed movement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSelectedEffect5 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              0,
              "target creature adds 1d4 to next ability check, attack roll or saving throw",
              "1d4 aid",
              false,
              true,
              true,
              isSelectedEffect5,
              "Wisdom"
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
          <Text style={styles.buttonText}>1d4 Aid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSelectedEffect6 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              0,
              "Affected creature receives a 1d4 penalty to next ability check, attack roll or saving throw",
              "1d4 Penalty",
              true,
              true,
              true,
              isSelectedEffect6,
              "Wisdom"
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
          <Text style={styles.buttonText}>1d4 Penalty</Text>
        </TouchableOpacity>
        {/* -------------------------------Effect Level 1 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect7 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "Target is lifted 20ft. Additional movement is possible if the target is pushed, pulled or is able to move itself by someoutside means.",
              "Levitate",
              false,
              false,
              true,
              isSelectedEffect7,
              "Constitution"
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
          <Text style={styles.buttonText}>Levitate 20ft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect8 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "Target is afraid of the spellcaster and has the frightened condition. Target cannot willingly move toward the spellcaster and has disadvantage on ability checks and attack rolls while they can see the spellcaster",
              "Fear",
              true,
              true,
              true,
              isSelectedEffect8,
              "Wisdom"
            );
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
          <Text style={styles.buttonText}>Fear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect9 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "Target is charmed by the spellcaster. They have advanatage on the save if hostile toward the caster. The target cannot attack the spellcaster or target them with harmful abilities or magical effects. The spellcaster has advantage on social interactions with the target. The target may repeat the save at the end of each of their turns or when taking damage. ",
              "Charm",
              false,
              true,
              true,
              isSelectedEffect9,
              "Wisdom"
            );
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
          <Text style={styles.buttonText}>Charm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect10 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "Target is restained until the spell ends (beginning of the caster's next turn if only one turn). The target may use it's action to repeat the save on each of it's turns.",
              "Restrain",
              true,
              true,
              true,
              isSelectedEffect10,
              "Strength"
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
          <Text style={styles.buttonText}>Restrain</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect12 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "The target is incapacitated and cannot take actions or reactions until the spell ends (beginning of caster's next turn if instantaneous). They may repeat the save at the end of each of their turns or when taking damage.",
              "Incapacitate",
              true,
              true,
              true,
              isSelectedEffect12,
              "Wisdom"
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
          <Text style={styles.buttonText}>Incapcitate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, isSelectedEffect17 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              1,
              "Target may not take reactions and their AC is reduced by 2. They may choose to take an action or bonus action on their turn and may not attack more than once. Spells take two turns to cast. The target may repeat the save at the end of each of their turns",
              "Slow",
              true,
              true,
              true,
              isSelectedEffect17,
              "Wisdom"
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
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(!isSelectedEffect17);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Slow</Text>
        </TouchableOpacity>
        {/* -------------------------------Effect Level 2 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect13 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              2,
              "The target gains a flying speed of 60 feet and can hover.",
              "Fly",
              false,
              false,
              true,
              isSelectedEffect13,
              ""
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
            setIsSelectedEffect13(!isSelectedEffect13);
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Fly 60 ft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect14 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              2,
              "Spellcaster teleports themself to an unoccupied location within 30 ft that they can see. They may spend an additional spell slot to bring another creature that is within 5 ft. An unwilling creature may make a dexterity or constitution save.",
              "Teleport",
              false,
              false,
              false,
              isSelectedEffect14,
              "Dexterity or Constitution"
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
          <Text style={styles.buttonText}>Teleport 30 ft</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect15 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              2,
              "Target is paralyzed until the spell ends. They are incapacitated and cannot move or speak. They automatically fail strength and dexterity saves. Attacks made against them are made at advantage and, when the attacker is within 5ft, successful attacks are automatically a critical hit. They may repeat the save at the end of each of their turns.",
              "Paralyze",
              false,
              true,
              true,
              isSelectedEffect15,
              "Wisdom"
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
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(!isSelectedEffect15);
            setIsSelectedEffect16(false);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Paralyze</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, isSelectedEffect16 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              2,
              "If the target is a willing creature, their speed is doubled and their armor class is increased by 2. They have advantage on dexterity saves and may make an addition action on their turn. The extra action may be used to make a single attack, dash, disengage, hide, or utilize an item. When the spell ends, they are incapacitated and the cannot move until the end of their next turn.",
              "Haste",
              false,
              false,
              true,
              isSelectedEffect16,
              ""
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
            setIsSelectedEffect14(false);
            setIsSelectedEffect15(false);
            setIsSelectedEffect16(!isSelectedEffect16);
            setIsSelectedEffect17(false);
            setIsSelectedEffect18(false);
          }}
        >
          <Text style={styles.buttonText}>Haste</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.button2, isSelectedEffect18 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(2, "The target is stunned", "Stun", true, false, true, isSelectedEffect18, "Constitution");
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
          <Text style={styles.buttonText}>Stun</Text>
        </TouchableOpacity> */}
        {/* -------------------------------Effect Level 3 -------------------------------------*/}
        <TouchableOpacity
          style={[styles.button3, isSelectedEffect11 && styles.buttonSelected]}
          onPress={() => {
            changeEffect(
              3,
              "An invisible 5ft by 10ft barrier appears within range. The barrier appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. If the spell has an area of effect, you can form it into a hemispherical dome or a sphere, or you can shape a flat surface made up of 10 foot tall panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side). Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.",
              "Barrier",
              false,
              true,
              true,
              isSelectedEffect11,
              ""
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
          <Text style={styles.buttonTextBlack}>Barrier</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* ----------------------------*****Tutorial Popups*****------------------------------------*/}
      {/* <Popover
        isVisible={isSpellIntroPopupVisible}
        fromView={spellIntro.current}
        onRequestClose={() => setIsSpellIntroPopupVisible(false)}
      >
        <View style={styles.popoverContent}>
          <Text>
            This app is an attempt to make creating custom spells for Dungeons
            and Dragons 5e easier. The balance may be off, but should give a
            good idea of how powerful a certain spell would be. Click the button
            below to continue the tutorial or click close to end the tutorial.
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsSpellIntroPopupVisible(false),
                setIsSpellResetPopupVisible(true);
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellLevelPopupVisible}
        fromView={spellLevelDisplay.current}
        onRequestClose={() => setIsSpellLevelPopupVisible(false)}
      >
        <View style={styles.popoverContent}>
          <Text>
            The calculated spell level is displayed at the top. The level is
            based on the damage, area of effect, duration, and magic effects
            selected.
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsSpellIntroPopupVisible(false),
                setIsSpellResetPopupVisible(true);
            }}
          >
            <Text>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsSpellIntroPopupVisible(false),
                setIsSpellResetPopupVisible(true);
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellResetPopupVisible}
        fromView={spellReset.current}
        onRequestClose={() => {
          setIsSpellResetPopupVisible(false),
            setIsSpellDamagePickerPopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>If you want to reset all settings, click here.</Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellDamagePickerPopupVisible}
        fromView={spellDamagePicker.current}
        onRequestClose={() => {
          setIsSpellDamagePickerPopupVisible(false),
            setIsSpellDamageTypePopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>Use the '+' and '-' buttons to adjust damage.</Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellDamageTypePopupVisible}
        fromView={spellDamageType.current}
        onRequestClose={() => {
          setIsSpellDamageTypePopupVisible(false),
            setIsSpellDamageRangePopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>
            The size of the damage die changes based on the damage type you
            choose. If monsters tend to resist a damage type, the damage die
            will be larger.
          </Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellDamageRangePopupVisible}
        fromView={spellDamageRange.current}
        onRequestClose={() => {
          setIsSpellDamageRangePopupVisible(false),
            setIsSpellAoePopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>Touch spells will deal more damage.</Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellAoePopupVisible}
        fromView={spellAoe.current}
        onRequestClose={() => {
          setIsSpellAoePopupVisible(false),
            setIsSpellDurationPopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>
            Choosing to make your spell have an area of effect will decrease the
            size of the damage die and affect the spell level.
          </Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellDurationPopupVisible}
        fromView={spellDuration.current}
        onRequestClose={() => {
          setIsSpellDurationPopupVisible(false),
            setIsSpellEffectGeneralPopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>
            Adding a duration to a spell will increase the spell level. If the
            spell is single target, it will adjust the area to be a 5ft square
            or single target to accomadate damage spells that shouldn't follow
            the target.
          </Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellEffectGeneralPopupVisible}
        fromView={spellEffectGeneral.current}
        onRequestClose={() => {
          setIsSpellEffectGeneralPopupVisible(false),
            setIsSpellEffectExamplePopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>
            Spell effects are the most complex part. Effects will determine the
            saving throw for the spell. Some effects will not allow other
            options to be used.
          </Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellEffectExamplePopupVisible}
        fromView={spellEffectExample.current}
        onRequestClose={() => {
          setIsSpellEffectExamplePopupVisible(false),
            setIsSpellEndPopupVisible(true);
        }}
      >
        <View style={styles.popoverContent}>
          <Text>
            For example, fly will reset and disable the damage and area of
            effect options.
          </Text>
        </View>
      </Popover>
      <Popover
        isVisible={isSpellEndPopupVisible}
        fromView={spellEnd.current}
        onRequestClose={() => setIsSpellEndPopupVisible(false)}
      >
        <View style={styles.popoverContent}>
          <Text>
            That's it for the tutorial. Have fun creating your own spells!
          </Text>
        </View>
      </Popover> */}
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
});
