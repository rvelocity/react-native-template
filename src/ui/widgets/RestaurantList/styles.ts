import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  container: {
    gap: 16
  },
  viewAllContainer: {
    marginBottom: 8
  },
  viewAllText: {
    fontSize: 16,
    color: '#000'
  },
  separatorHorizontal: {
    width: 16
  },
  separatorVertical: {
    height: 24
  }
}));

export default stylesheet;
