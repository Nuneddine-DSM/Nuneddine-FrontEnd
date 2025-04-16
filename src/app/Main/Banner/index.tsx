import styled from "styled-components/native";
import { useState, useRef, useEffect } from "react";
import { BannerData } from "../Data";
import { FlatList, Dimensions } from "react-native";
import { BannerDataType } from "../interface";

const { width } = Dimensions.get('window');

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<BannerDataType>>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % BannerData.length;
      flatListRef.current?.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <BannerContainer>
      <FlatList
        data={BannerData}
        renderItem={({ item }: { item: BannerDataType }) => (
          <Slide>
            <BannerImage source={item.image} resizeMode="cover" />
            <TextBox>
              <Title>{item.title}</Title>
              <SubTitle>{item.subTitle}</SubTitle>
            </TextBox>
          </Slide>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <BannerController>
        <PageIndicatorText>{currentIndex + 1} | {BannerData.length}</PageIndicatorText>
      </BannerController>
    </BannerContainer >
  )
}

const BannerContainer = styled.View`
  width: 100%;
  height: 430px;
  position: relative;
`

const BannerImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Slide = styled.View`
  width: ${width}px;
  height: 100%;
`

const TextBox = styled.View`
  position: absolute;
  bottom: 55px;
  left: 20px;
`

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: white;
`

const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: white;
`

const BannerController = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 4px 14px;
  gap: 7px;
  border-radius: 20px;
`

const PageIndicatorText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: black;
`

export default Banner