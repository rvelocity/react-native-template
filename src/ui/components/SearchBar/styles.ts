import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  rightIcons: { flexDirection: 'row' },
  divider: { marginVertical: 8 }
}));

export default stylesheet;
