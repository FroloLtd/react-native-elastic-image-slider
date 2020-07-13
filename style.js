
import React from 'react-native';

var {
    StyleSheet,
    Dimensions,
    } = React;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        overflow: 'hidden'
    },
    image: {
        width: Dimensions.get('window').width
    },
    
    count: {
        height: 36,
        width: 36,
        top: 40,
        right: 20,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(74,73,74,0.3)',
        borderRadius: 18
    },
    countText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default styles;