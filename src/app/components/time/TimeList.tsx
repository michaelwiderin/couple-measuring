import { StyleSheet, View, Text, FlatList } from "react-native";
import TimeListItem from "./TimeListItem";

const data = [
    {
        id: 1,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 2,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 3,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 4,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 5,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 6,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 7,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 8,
        time: '20:14',
        date: new Date(2022, 3, 21)
    },
    {
        id: 9,
        time: '20:14',
        date: new Date(2022, 3, 21)
    }
]

const TimeList = (props) => {
    const renderItem = (value) => {
        return (
            <TimeListItem date={value.item.date} time={value.item.time} style={styles.listItem}></TimeListItem>
        );
    }

    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.header}>Vergangene Durchgänge:</Text>
            <FlatList data={data} renderItem={renderItem}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    header: {
        marginBottom: 10
    },
    listItem: {
        marginBottom: 5
    }
});

export default TimeList;