import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./rootTypes"; // Tipagem do Stack
import styles from "@/styles";

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, "SplashScreen">;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("HomeScreen"); // Navega para HomeScreen após 3 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timer quando o componente desmontar
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleSplash}>DogMatcher</Text>
      <Text style={styles.subtitleSplash}>Encontre o cão perfeito para suas características!</Text>
      <Image source={require("../assets/images/dog-matcher.jpg")} style={styles.imageSplash} />
    </View>
  );
};

export default SplashScreen;
