import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';
import Player from './components/Player';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      <Player />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20
  }
});
