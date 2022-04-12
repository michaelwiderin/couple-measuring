import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import MeasureList from './components/MeasureList';
import Navigation from './components/Navigation';
import Player from './components/Player';
import Timer from './components/Timer';

const measureList = [
  {
    id: 1,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 2,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 3,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 4,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 5,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 6,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 7,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 8,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 9,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 10,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 11,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 12,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 13,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 14,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 15,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 16,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 17,
    timestamp: '12.04.2022',
    measure: '19:11'
  },
  {
    id: 18,
    timestamp: '12.04.2022',
    measure: '19:11'
  }
]

const App = () => {
  const [measures, setMeasures] = useState(measureList);

  return (
    <View style={styles.container}>
      <Navigation />
      <Player />
      <Timer />
      <View>
        <MeasureList measures={measures} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    flex: 1
  }
});
