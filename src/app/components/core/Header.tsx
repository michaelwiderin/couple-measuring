import { StyleSheet, View, Text, Image, StyleProp } from 'react-native';

const Header = (props) => {
    const image = require('../../assets/images/feuerwehr_logo.png');

    return (
        <View style={[styles.container, props.style]}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>Feuerwehr Braz</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: 'grey'
    }
});

export default Header;