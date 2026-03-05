import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TextInput, Button, Chip } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopNotch from "./TopNotch";
import { useState } from "react";

export default function App() {
  let [skillsarr, setSkillsarr] = useState([]);
  function skillsDisplay() {
    console.log(skill);
    console.log(skillsarr.length);
    setSkillsarr((prev) => [...prev, skill]);
    setSkill("");
    console.log(skillsarr);
  }
  function removeSkill(item) {
    setSkillsarr((prev) => prev.filter((i) => i !== item));
  }
  const [skill, setSkill] = useState("");
  return (
    <>
      <SafeAreaProvider>
        <TopNotch />
        <View style={styles.container}></View>
        <View>
          <TextInput
            placeholder="Enter Skills"
            value={skill}
            onChangeText={(data) => setSkill(data)}
          />
          <Button onPress={() => skillsDisplay()} mode="contained">
            Add Skill
          </Button>
          {skillsarr.length == 0 ? (
            <Text>No Chips Selected</Text>
          ) : (
            <FlatList
              data={skillsarr}
              numColumns={4}
              renderItem={({ item }) => (
                <Chip onClose={() => removeSkill(item)}>{item}</Chip>
              )}
            />
          )}
        </View>
        <StatusBar style="auto" />
        {/* </View> */}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  chipStyle: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
});
