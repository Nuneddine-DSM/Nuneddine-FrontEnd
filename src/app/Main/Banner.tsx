import styled from "styled-components/native";
import { useState, useRef, useEffect, useCallback } from "react";
import { FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { BannerDataType } from "./interface";
import { Font } from "../../styles"

const { width } = Dimensions.get('window');

const Banner = ({ data }: { data: BannerDataType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<BannerDataType>>(null);
  const indexRef = useRef(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
    indexRef.current = index;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % (data?.length ?? 0);
      flatListRef.current?.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });
      setCurrentIndex(nextIndex);
      indexRef.current = nextIndex;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderBannerItem = useCallback(({ item }: { item: BannerDataType }) => (
    <Slide>
      <BannerImage source={item.image} resizeMode="cover" />
      {(item.title || item.subTitle) && (
        <TextBox>
          {item.title && <Font text={item.title} kind="bold28" color="white" />}
          {item.subTitle && <Font text={item.subTitle} kind="medium18" color="white" />}
        </TextBox>
      )}
    </Slide>
  ), []);

  return (
    <BannerContainer>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderBannerItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(_, index) => index.toString()}
      />
      <BannerController>
        <Font
          text={`${currentIndex + 1} | ${data?.length ?? 0}`}
          kind="medium14"
          color="gray600"
        />
      </BannerController>
    </BannerContainer>
  )
}

const BannerContainer = styled.View`
  position: relative;
  width: 100%;
  height: 430px;
`

const Slide = styled.View`
  width: ${width}px;
  height: 100%;
`

const BannerImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`

const TextBox = styled.View`
  position: absolute;
  bottom: 55px;
  left: 20px;
`

const BannerController = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  padding: 4px 14px;
  gap: 7px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`

export default Banner