import { StyleSheet, View, Text } from "react-native";
import PlayerButton from "./PlayerButton";

const PlayerControlling = () => {
    return (
        <View style={styles.container}>
            <PlayerButton></PlayerButton>
            <Text>0:18 / 0:25</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    }
});

export default PlayerControlling;