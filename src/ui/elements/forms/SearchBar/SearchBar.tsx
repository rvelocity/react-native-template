import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import TextField, { TextFieldProps } from '@/ui/elements/forms/TextField/TextField';
import Divider from '@/ui/elements/layout/Divider';
import IconButton from '@/ui/elements/media-icons/IconButton/IconButton';

import stylesheet from './styles';

type SearchBarProps = TextFieldProps;

const SearchBar: React.FC<SearchBarProps> = ({ ...rest }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <TextField
      size="md"
      placeholder="Placeholder"
      left={<IconButton size={24} variant="vector" type="feather" icon="search" />}
      right={
        <View style={styles.rightIcons}>
          <Divider align="vertical" variant="line" style={styles.divider} />
          <IconButton size={24} variant="vector" type="feather" icon="mic" />
        </View>
      }
      {...rest}
    />
  );
};

export default SearchBar;
