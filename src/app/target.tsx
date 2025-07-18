import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Target() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 32 }}>
      <Text>
        Welcome to Target Metas Financeiras!
      </Text>
      <Button
              title="Voltar"
              onPress={() => {
                router.back()   ;
              }}
          />
      
    </View>
  )
}