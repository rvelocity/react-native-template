import SearchBar from '@/ui/elements/forms/SearchBar/SearchBar.tsx';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';

type HeaderSearchBarProps = {
  // Define props here
};

const HeaderSearchBar: React.FC<HeaderSearchBarProps> = props => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <SearchBar editable={false} placeholder="Search food, grocery and more" />
    </View>
  );
};

export default HeaderSearchBar;
