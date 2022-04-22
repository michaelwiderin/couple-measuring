import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import { convertAudioStatus } from '../helpers/timeHelper';

const iconPlay = <FontAwesome name='play-circle' size={36} color='grey' />
const iconStop = <FontAwesome name='stop-circle' size={36} color='grey' />

const Player = (props) => {
    const [audio, setAudio] = useState(null);
    const [status, setStatus] = useState(null);
    const [positionMillis, setPositionMillis] = useState(null);
    const [isMeasureRunning, setIsMeasureRunning] = useState(false);
    const [icon, setIcon] = useState(iconPlay);

    const onAudioStart = async () => {
        if (status !== null) {
            return;
        }

        const playback = new Audio.Sound();
        playback.setOnPlaybackStatusUpdate(onAudioStatusUpdate);

        setAudio(playback);

        const playbackStatus = await playback.loadAsync(
            require('../../assets/sounds/angriffsbefehl.mp3'),
            { shouldPlay: true, progressUpdateIntervalMillis: 1000 }
        );

        setStatus(playbackStatus);
    };

    const onAudioStatusUpdate = (currentStatus) => {
        setPositionMillis(currentStatus.positionMillis);

        if (currentStatus.didJustFinish) {
            props.onStartMeasure();
            setIsMeasureRunning(true);
        }
    };

    const onAudioStop = async () => {
        if (status === null) {
            return;
        }

        if (status.isLoaded && status.isPlaying) {
            await audio.setStatusAsync({ shouldPlay: false });
        }

        await audio.unloadAsync();

        setAudio(null);
        setStatus(null);
    };

    const buttonPressHandler = async () => {
        if (icon === iconPlay) {
            setIcon(iconStop);
            return await onAudioStart();
        }

        setIcon(iconPlay);
        return await onAudioStop();
    };

    useEffect(async () => {
        if (isMeasureRunning && !props.isTimerRunning) {
            setIsMeasureRunning(false);
            return await buttonPressHandler();
        }
    }, [props.isTimerRunning]);

    return (
        <View style={styles.container}>
            <Pressable onPress={buttonPressHandler}>
                {icon}
            </Pressable>
            <Text style={styles.audioTimer}>{convertAudioStatus(status, positionMillis)}</Text>
        </View>
    );
};

export default Player;

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    audioTimer: {
        color: 'grey',
        fontSize: 14
    }
});