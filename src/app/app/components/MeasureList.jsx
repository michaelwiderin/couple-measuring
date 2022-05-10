import { StyleSheet, View, FlatList, Text } from 'react-native';
import Measure from './Measure';

const MeasureList = (props) => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Bisherige Messungen:</Text>
            </View>
            <FlatList
                data={props.measures}
                renderItem={(itemData) => {
                    return <Measure item={itemData.item} />
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default MeasureList;

const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    title: {
        fontSize: 14,
        color: 'grey'
    }
});