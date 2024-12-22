import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "@/styles";
import { dogMatcherGenerator } from "@/services/ai/generator";
import { MotiView } from 'moti';

const HomeScreen = () => {
  // Controle de estado para cada campo
  const [size, setSize] = useState("");
  const [traits, setTraits] = useState<string[]>([]);
  const [coat, setCoat] = useState("");
  const [petsCompatible, setPetsCompatible] = useState("");
  const [childrenCompatible, setChildrenCompatible] = useState("");
  const [budget, setBudget] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [caracteristicas, setCaracteristicas] = useState("")
  const [reply, setReply] = useState("")

  // Alterando seleção de características
  const toggleTrait = (trait: string) => {
    if (traits.includes(trait)) {
      setTraits(traits.filter((t) => t !== trait));
    } else {
      setTraits([...traits, trait]);
    }
  };

  // Exibir/Enviar os resultados selecionados e enviando para o algoritmo
  const sendInfo = async () => {
    const caracteristicas = `Tamanho: ${size || "Não selecionado"}\n
    Características: ${traits.join(", ") || "Não selecionadas"}\n
    Pelagem: ${coat || "Não selecionada"}\n
    Compatível com outros pets: ${petsCompatible || "Não selecionado"}\n
    Compatível com crianças: ${childrenCompatible || "Não selecionado"}\n
    Valor máximo: R$ ${budget || "Não informado"}`;

    if (size === "" || traits.length === 0 || coat === "" || petsCompatible === "" || childrenCompatible === "" || budget === "" ) {
      alert("Desculpe, mas você não selecionou alguma(s) das características.");
      return;
    }

    setIsLoading(true);
    setCaracteristicas("");
    setReply("");

    try {
      const result = await dogMatcherGenerator(caracteristicas);
      console.log("Resposta do serviço:", result);
      setReply(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Personalize o Perfil do Cachorro</Text>

      {/* Campos de entrada e seleção */}
      {/* Tamanho */}
      <Text style={styles.label}>Tamanho:</Text>
      <View style={styles.optionsContainer}>
        {["mini", "pequeno", "médio", "grande"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              size === option && styles.selectedOptionButton,
            ]}
            onPress={() => setSize(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Características */}
      <Text style={styles.label}>Características:</Text>
      <View style={styles.optionsContainer}>
        {["inteligente", "ativo", "protetor", "carinhoso"].map((trait) => (
          <TouchableOpacity
            key={trait}
            style={[
              styles.optionButton,
              traits.includes(trait) && styles.selectedOptionButton,
            ]}
            onPress={() => toggleTrait(trait)}
          >
            <Text style={styles.optionText}>{trait}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pelagem */}
      <Text style={styles.label}>Pelagem:</Text>
      <View style={styles.optionsContainer}>
        {["curta", "longa"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              coat === option && styles.selectedOptionButton,
            ]}
            onPress={() => setCoat(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Compatível com outros pets */}
      <Text style={styles.label}>Compatível com outros pets:</Text>
      <View style={styles.optionsContainer}>
        {["SIM", "NÃO"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              petsCompatible === option && styles.selectedOptionButton,
            ]}
            onPress={() => setPetsCompatible(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Compatível com crianças */}
      <Text style={styles.label}>Compatível com crianças:</Text>
      <View style={styles.optionsContainer}>
        {["pouco", "razoável", "extremamente"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              childrenCompatible === option && styles.selectedOptionButton,
            ]}
            onPress={() => setChildrenCompatible(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Valor máximo */}
      <Text style={styles.label}>Valor máximo (R$):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={budget}
        onChangeText={setBudget}
        placeholder="Digite o valor"
      />

      {/* Botão de envio */}
      <TouchableOpacity style={styles.selectedOptionButton} onPress={sendInfo}>
        <Text style={styles.label}>{isLoading ? "Carregando..." : "Procurar seu DogMatch!"}</Text>
      </TouchableOpacity>

      {reply && (
        <MotiView style={styles.card} from={{ opacity: 0, translateX: 200 }} animate={{ opacity: 1, translateX: 0 }}>
          <Text style={styles.cardTitle}>A sua raça de cão compatível é:</Text>
          <Text style={styles.label}>{reply}</Text>
        </MotiView>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
