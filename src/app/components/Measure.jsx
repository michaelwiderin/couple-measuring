import { StyleSheet, View, Text } from 'react-native';

const Measure = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timestamp}>{props.item.timestamp}</Text>
            <Text style={styles.measure}>{props.item.measure}</Text>
        </View>
    );
};

export default Measure;

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#cccccc',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timestamp: {

    },
    measure: {

    }
});