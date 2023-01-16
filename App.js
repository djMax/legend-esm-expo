import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { observable } from "@legendapp/state"
import { observer } from "@legendapp/state/react"

const state = observable({ count: 1 });

const Counter = observer(() => {
  return (
    <View>
      <Text onPress={() => state.count.set(state.count.get() + 1)}>{state.count}</Text>
    </View>
  );
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
