import { StyleSheet, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import PlayerButton from './PlayerButton';

const Player = () => {
    const [audio, setAudio] = useState(null);
    const [status, setStatus] = useState(null);

    const onAudioPress = async () => {
        if (status === null) {
            const playback = new Audio.Sound();
            const playbackStatus = await playback.loadAsync(
                require('../assets/sounds/angriffsbefehl.mp3'),
                { shouldPlay: true, progressUpdateIntervalMillis: 1000 }
            );
            
            setAudio(playback);
            setStatus(playbackStatus);

            return;
        }
        
        onAudioFinished();
    };

    const onAudioFinished = async () => {
        if (status.isLoaded && status.isPlaying) {
            await audio.setStatusAsync({ shouldPlay: false });

            setStatus(null);
        }
    };

    const onAudioStatusUpdate = () => {

    };

    return (
        <View style={styles.container}>
            <PlayerButton onPlaySound={onAudioPress} />
            {/* <Text style={styles.audioTimer}>00:00 / 00:00</Text> */}
            <Text style={styles.audioTimer}>{status === null ? '00:00' : status.duration}</Text>
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