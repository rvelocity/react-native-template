/**
 * Reference
 * https://andrei-calazans.com/posts/2021-07-30-grid-view-for-react-native/
 */
import React, { type FC, type PropsWithChildren, type ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type SpacerProps = {
  spacing: number;
  axis?: 'Vertical' | 'Horizontal';
};

const Spacer: FC<SpacerProps> = ({ spacing, axis = 'Vertical' }) => (
  <View style={axis === 'Vertical' ? { height: spacing } : { width: spacing }} />
);

const intersperse = (item: ReactElement, array: ReactElement[]): ReactElement[] =>
  array.reduce<ReactElement[]>((acc, each, index) => {
    const isLast = index + 1 === array.length;
    if (isLast) {
      return [...acc, each];
    }
    return [...acc, each, React.cloneElement(item, { key: `spacer-${index}` })];
  }, []);

type GridProps = PropsWithChildren & {
  crossAxisCount: number;
  mainAxisSpacing?: number;
  crossAxisSpacing?: number;
};

export const Grid: FC<GridProps> = ({
  children,
  crossAxisCount,
  mainAxisSpacing = 0,
  crossAxisSpacing = 0
}): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const defaultSection = Array.from({ length: crossAxisCount }).map(() => null);
  const numberOfColumns = Math.ceil(React.Children.count(children) / crossAxisCount);
  const copiedChildren = React.Children.toArray(children);

  const getItemsForRow = (rowIndex: number): ReactElement[] =>
    defaultSection.map((_, index) => {
      const childIndex = rowIndex * crossAxisCount + index;
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      return copiedChildren[childIndex] ? (
        <View style={styles.flexOne} key={`child-${childIndex}`}>
          {copiedChildren[childIndex]}
        </View>
      ) : (
        <View style={styles.flexOne} key={`child-empty-${childIndex}`} />
      );
    });

  const list = Array.from({ length: numberOfColumns }).map((_, idx) => (
    <View style={styles.flexRow} key={`row-${idx}`}>
      {intersperse(<Spacer axis="Horizontal" spacing={crossAxisSpacing} />, getItemsForRow(idx))}
    </View>
  ));

  return <ScrollView>{intersperse(<Spacer spacing={mainAxisSpacing} />, list)}</ScrollView>;
};

export default Grid;
