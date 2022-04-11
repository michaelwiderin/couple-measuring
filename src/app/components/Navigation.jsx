import { StyleSheet, View, Image, Text } from 'react-native';

const Navigation = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/feuerwehr_logo.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Feuerwehr Braz</Text>
            </View>
        </View>
    );
};

export default Navigation;

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderBottomWidth: 1
    },
    logo: {
        flex: 1,
        height: '100%',
        width: 60,
        resizeMode: 'contain'
    },
    textContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: 'grey'
    }
});