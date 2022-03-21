import { StyleSheet, View, Text } from 'react-native';

const Timer = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.text}>00:00</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 35,
        fontWeight: '500'
    }
});

export default Timer;