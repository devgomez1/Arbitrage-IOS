import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function SportsbookScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>sportsbookScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
