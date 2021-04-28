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
  thankyouBody: {
    flex: 3,
    alignItems: 'center',
    marginTop: 100,
  },
  thankyouText: {
    fontSize: 50,
    color: COLORS.textColor,
    fontWeight: 'bold',
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
