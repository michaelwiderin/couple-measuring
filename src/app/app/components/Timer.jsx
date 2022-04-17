import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { convertTimerStatus } from '../helpers/timeHelper';

const Timer = (props) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval;
        if (props.isTimerRunning) {
            interval = setInterval(() => {
                setTime((prevTimer) => prevTimer + 10);
            }, 10);
        }

        if (!props.isTimerRunning) {
            clearInterval(interval);
            setTime(0);
        }
        
        return () => clearInterval(interval);
    }, [props])

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{convertTimerStatus(time)}</Text>
        </View>
    );
};

export default Timer;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'grey'
    }
});