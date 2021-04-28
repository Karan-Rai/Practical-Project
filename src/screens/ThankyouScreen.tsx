import React from 'react';
import {View, Text} from 'react-native';
import styles from '../components/style';
import {connect} from 'react-redux';
import {Button} from '../components/Button';

class ThankyouScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>Welcome, {this.props.data.name}</Text>
        </View>
        <View style={styles.thankyouBody}>
          <Text style={styles.thankyouText}>Thank You</Text>
          <Button
            title="Go to Home"
            style={styles.button3}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.nameReducer.data,
  };
};
export default connect(mapStateToProps, null)(ThankyouScreen);
