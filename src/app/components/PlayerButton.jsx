import { View, Pressable } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const iconPlay = <FontAwesome name='play-circle' size={36} color='grey' />
const iconStop = <FontAwesome name='stop-circle' size={36} color='grey' />

const PlayerButton = (props) => {
    const [icon, setIcon] = useState(iconPlay);

    const buttonPressHandler = async () => {
        if (icon === iconPlay) {
            setIcon(iconStop);
        }
        else {
            setIcon(iconPlay);
        }

        await props.onPlaySound();
    };

    return (
        <View>
            <Pressable onPress={buttonPressHandler}>
                {icon}
            </Pressable>
        </View>
    );
};

export default PlayerButton;