import { StyleSheet, View } from 'react-native';

import PlayerControlling from "./PlayerControlling";
import PlayerTaskBar from "./PlayerTaskBar";

const Player = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <PlayerControlling></PlayerControlling>
            <PlayerTaskBar></PlayerTaskBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 2
    }
});

export default Player;