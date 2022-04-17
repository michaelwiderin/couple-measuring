import { StyleSheet, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import { convertAudioStatus } from '../helpers/timeHelper';
import PlayerButton from './PlayerButton';

const Player = (props) => {
    const [audio, setAudio] = useState(null);
    const [status, setStatus] = useState(null);
    const [positionMillis, setPositionMillis] = useState(null);

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

    return (
        <View style={styles.container}>
            <PlayerButton onPlay={onAudioStart} onStop={onAudioStop} />
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