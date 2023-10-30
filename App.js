import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { RadioButton } from "react-native-paper";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [coffee, setCoffee] = useState("I like coffee.");

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Your Name: </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(newName) => setName(newName)}
          defaultValue={name}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Your Age: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter your age"
          onChangeText={(newAge) => setAge(newAge)}
          defaultValue={age}
        />
      </View>

      <View style={styles.radioGroup}>
        <Text style={styles.label}>Like Coffee? </Text>
        <View style={styles.radioButton}>
          <RadioButton
            value="I like coffee."
            status={coffee == "I like coffee." ? "checked" : "unchecked"}
            onPress={() => setCoffee("I like coffee.")}
          />
          <Text style={styles.radioLabel}>Yes</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="I do not like coffee."
            status={coffee == "I do not like coffee." ? "checked" : "unchecked"}
            onPress={() => setCoffee("I do not like coffee.")}
          />
          <Text style={styles.radioLabel}>No</Text>
        </View>
      </View>

      <Button
        title="Submit"
        onPress={() =>
          Alert.alert(
            "Summary",
            "My name is " + name + ". I am " + age + " years old. " + coffee
          )
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 5,
  },
  label: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
  },
  input: {
    height: 30,
    flexDirection: "row",
    flex: 3,
    margin: 5,
    borderWidth: 1,
    padding: 5,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  radioButton: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
