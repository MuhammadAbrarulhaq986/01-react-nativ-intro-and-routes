import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 50,
            textShadowRadius: 70,
            textShadowColor: "gold",
            fontWeight: "600",
          }}
        >
          Hello World
        </Text>
      </View>
    </>
  );
}
