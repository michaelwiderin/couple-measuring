import { StyleSheet, View } from 'react-native';

import Header from './components/core/Header';
import Player from './components/player/Player';
import Timer from './components/time/Timer';
import TimeList from './components/time/TimeList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
      <Player style={styles.player}></Player>
      <Timer style={styles.timer}></Timer>
      <TimeList></TimeList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    marginBottom: 30
  },
  player: {
    marginBottom: 30
  },
  timer: {
    marginBottom: 30
  }
});
