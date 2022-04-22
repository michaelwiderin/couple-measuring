import { StyleSheet, View, Text, Button } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { convertTimerStatus } from './app/helpers/timeHelper';
import { SocketContextProvider } from './app/store/socket-context';
import { useSocket } from './app/hooks/useSocket';
import MeasureList from './app/components/MeasureList';
import Navigation from './app/components/Navigation';
import Player from './app/components/Player';
import Timer from './app/components/Timer';

const App = () => {
  const [measures, setMeasures] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const socket = useSocket();  

  const onMessage = useCallback((event) => {
    const message = JSON.parse(event.data);
    console.log(message);

    switch (parseInt(message['status'])) {
      case 2:
        setIsTimerRunning(true);
        setIsWaiting(false);
        break;
      case 3:
        setIsTimerRunning(false);
        addMeasureHandler('18.04.2022', parseInt(message['time']));
        setIsWaiting(false);
        break;
      case 4:
        setIsWaiting(true);
        break;
    }
  }, []);

  const startMeasureHandler = () => {
    const message = {
      "status": 1
    };

    socket.send(JSON.stringify(message));
  };

  const addMeasureHandler = (timestamp, measure) => {
    setMeasures((currentMeasures) => [
      ...currentMeasures,
      {
        id: currentMeasures.length,
        timestamp: timestamp.toString(),
        measure: convertTimerStatus(measure)
      }
    ]);
  }

  useEffect(() => {
    socket.addEventListener('message', onMessage);

    return () => {
      socket.removeEventListener('message', onMessage);
    };
  }, [socket, onMessage]);

  const PlayerSection = () => {
    if (isWaiting) {
      return (
        <View style={styles.waitingContainer}>
          <Text style={styles.waitingTextPrimary}>Zeitmessung wurde bereits gestartet...</Text>
          <Text style={styles.waitingTextSecondary}>Warten Sie bis das Ergebnis erscheint.</Text>
        </View>
      );
    }
    
    return (
      <View>
        <Player onStartMeasure={startMeasureHandler} isTimerRunning={isTimerRunning} />
        <Timer isTimerRunning={isTimerRunning} />
      </View>
    );
  }

  return (
    <SocketContextProvider>
      <View style={styles.container}>
        <Navigation />
        <PlayerSection></PlayerSection>
        <View>
          <MeasureList measures={measures} />
        </View>
      </View>
    </SocketContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    flex: 1
  },
  waitingContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  waitingTextPrimary: {
    color: 'grey',
    fontSize: 16,
    paddingBottom: 6
  },
  waitingTextSecondary: {
    color: 'grey',
    fontSize: 12
  }
});
