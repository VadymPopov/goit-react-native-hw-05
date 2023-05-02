import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CommentsScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comments</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 16,
    }
});