import * as React from 'react';
import {View, Text} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import styles from '../components/style';
import {Button} from '../components/Button';
import {COLORS} from '../components/Colors';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class ButtonScreen extends React.Component {
  myIcon = () => <Icon name="diamond" size={30} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>Welcome, {this.props.data.name}</Text>
        </View>
        <View style={styles.buttonBody}>
          <Button title="Press Me" style={styles.button1} />
          <Button title="Press Me" style={styles.button2} />
          <Button
            title="Press Me"
            style={styles.button3}
            onPress={() => this.props.navigation.goBack()}
          />
          <SwipeButton
            swipeSuccessThreshold={80}
            height={45}
            width={300}
            railBackgroundColor="#2E4053"
            railStyles={{
              backgroundColor: COLORS.buttonColor,
              borderColor: '#fff',
            }}
            shouldResetAfterSuccess={true}
            title="Slide to Continue"
            titleColor="#5DADE2"
            thumbIconBackgroundColor={COLORS.buttonColor}
            thumbIconComponent={this.myIcon}
            onSwipeSuccess={() => {
              this.props.navigation.navigate('ThankyouScreen');
            }}
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
export default connect(mapStateToProps, null)(ButtonScreen);
