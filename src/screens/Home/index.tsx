import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';
import {Button} from '../../components/Button';
import {saveData} from '../../Redux/action';
import {connect} from 'react-redux';
import {TEXT} from '../../components/Strings';

class Home extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onSubmit = () => {
    var data = {};
    data.name = this.state.name;
    this.props.reduxSaveData(data);
    this.props.navigation.navigate('ButtonScreen');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.name}>{TEXT.welcomeText}</Text>

          <TextInput
            placeholder={TEXT.textInput}
            style={styles.input}
            onChangeText={name => {
              this.setState({name: name}, () => {});
            }}
          />
          <Button
            title={TEXT.submitText}
            disabled={this.state.name == '' ? true : false}
            onPress={this.onSubmit}
            style={styles.submitButton}
          />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    reduxSaveData: data => dispatch(saveData(data)),
  };
};
export default connect(null, mapDispatchToProps)(Home);
