import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#668',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white'
    }
});