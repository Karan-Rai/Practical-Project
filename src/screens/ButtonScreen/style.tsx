import {StyleSheet} from 'react-native';
import {COLORS} from '../../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  name: {
    fontSize: 20,
    color: COLORS.textColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
  buttonBody: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  body: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  button2: {
    backgroundColor: COLORS.button2Color,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  button3: {
    backgroundColor: COLORS.buttonColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default styles;
