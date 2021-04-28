import * as React from 'react';
import {View, Text} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import styles from './style';
import {Button} from '../../components/Button';
import {COLORS} from '../../components/Colors';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TEXT} from '../../components/Strings';

class ButtonScreen extends React.Component {
  myIcon = () => <Icon name="diamond" size={30} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {TEXT.nameText} {this.props.data.name}
          </Text>
        </View>
        <View style={styles.buttonBody}>
          <Text style={styles.name}>{TEXT.buttonText}</Text>
          <Button title={TEXT.button} style={styles.button1} />
          <Button title={TEXT.button} style={styles.button2} />
          <Button
            title={TEXT.button}
            style={styles.button3}
            onPress={() => this.props.navigation.goBack()}
          />
          <SwipeButton
            swipeSuccessThreshold={80}
            height={45}
            width={300}
            railBackgroundColor="black"
            railStyles={{
              backgroundColor: COLORS.buttonColor,
              borderColor: '#fff',
            }}
            shouldResetAfterSuccess={true}
            title={TEXT.swipeText}
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
