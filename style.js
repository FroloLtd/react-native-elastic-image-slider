
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
});

export default styles;