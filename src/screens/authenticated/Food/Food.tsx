import Carousel from '@/ui/elements/data-display/Carousel';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import ImageBanner from '@/ui/elements/media-icons/ImageBanner';
import FoodCategoryList from '@/ui/widgets/FoodCategoryList';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar/HeaderWithSearchAndAvatar.tsx';
import React from 'react';

type FoodProps = {
  // Define props here
};

const Food: React.FC<FoodProps> = props => {
  return (
    <Screen preset="auto" safeAreaEdges={['top']} background="white">
      <ContentSafeView>
        <HeaderWithSearchAndAvatar />
        <FoodCategoryList />
        <Carousel pagingEnabled>
          <Carousel.Item>
            <ImageBanner
              image="https://cdn.dribbble.com/userupload/13332324/file/original-2e66336d1a2d902cb79d71fa9ea9224e.png?resize=1504x1128"
              remote
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageBanner
              image="https://cdn.dribbble.com/userupload/13439869/file/original-597288c4b05840181ad1d20220f5fdd4.png?resize=1504x1128"
              remote
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageBanner
              image="https://cdn.dribbble.com/userupload/11834110/file/original-c623235e002c982448afb55ad42dd610.png?resize=1504x1128"
              remote
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageBanner
              image="https://cdn.dribbble.com/userupload/10379652/file/original-2d43b2b2145bc99a1eca4bcbaccbd478.png?resize=1504x1128"
              remote
            />
          </Carousel.Item>
        </Carousel>
      </ContentSafeView>
    </Screen>
  );
};

export default Food;
