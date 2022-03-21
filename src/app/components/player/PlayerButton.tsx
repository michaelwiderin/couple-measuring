import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

const PlayerButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const iconPlay = require('../../assets/images/play.svg');
    const iconStop = require('../../assets/images/stop.svg');

    const clickedHandler = () => {
        console.log('clicked');
        setIsPlaying(!isPlaying);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={clickedHandler}
                style={styles.button}>
                <View>
                    <Image source={isPlaying ? iconStop : iconPlay} style={styles.icon}></Image>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 25,
        width: 25
    }
});

export default PlayerButton;