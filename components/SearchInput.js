import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';


export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = text => {
        this.setState({ text });
    };

    handleSumitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if(!text) return;

        onSubmit(text);
        this.setState({ text: '' });
    };


    render() {

        const { placeholder } = this.props;
        const { text } = this.state;


        return (
            <View style={styles.Container}>
                <TextInput
                    autoCorrect={false}
                    value={text}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSumitEditing}
                />
            </View>
        );
    }
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
    placeholder: '',
};

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