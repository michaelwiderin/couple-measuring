import { StyleSheet, View, Text} from "react-native";

const TimeListItem = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.text}>21.03.2022</Text>
            <Text style={styles.text}>{props.time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default TimeListItem;