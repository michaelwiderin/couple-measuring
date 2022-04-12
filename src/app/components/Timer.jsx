import { StyleSheet, View, Text } from 'react-native';

const Timer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.time}>00:00</Text>
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