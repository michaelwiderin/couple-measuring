import { StyleSheet, View } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import MeasureList from './app/components/MeasureList';
import Navigation from './app/components/Navigation';
import Player from './app/components/Player';
import Timer from './app/components/Timer';

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
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const ws = useRef(new WebSocket('ws://10.0.0.27:3000')).current;

  const startMeasureHandler = () => {
    const message = {
      "status": 1
    };

    ws.send(JSON.stringify(message));
  };

  useEffect(() => {    
    ws.onopen = () => {
      // TODO: Statusabfrage (Messung könnte aktuell gestartet sein)
    };

    ws.onclose = () => {

    };

    ws.onerror = () => {

    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      
      switch (parseInt(message['status'])) {
        case 2:
          setIsTimerRunning(true);
          break;
        case 3:
          setIsTimerRunning(false);
          console.log(parseInt(message['time']));
          break;
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Navigation />
      <Player onStartMeasure={startMeasureHandler} />
      <Timer isTimerRunning={isTimerRunning} />
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
