import {StyleSheet} from 'react-native';
import {COLORS} from '../../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  input: {
    backgroundColor: COLORS.inputTextColor,
    borderWidth: 1,
    width: '80%',
    marginVertical: 30,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    color: COLORS.textColor,
  },
  body: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: COLORS.buttonColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default styles;
