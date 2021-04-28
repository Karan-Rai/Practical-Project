import {StyleSheet} from 'react-native';
import {COLORS} from './Colors';

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
  thankyouBody: {
    flex: 3,
    alignItems: 'center',
    marginTop: 100,
  },
  button: {
    width: '80%',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thankyouText: {
    fontSize: 50,
    color: COLORS.textColor,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: COLORS.buttonColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
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
