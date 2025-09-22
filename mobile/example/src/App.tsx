import { View, StyleSheet } from 'react-native';
import App from '@rnmf/mobile';

export default function Example() {
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
