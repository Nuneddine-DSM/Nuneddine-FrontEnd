import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const images = [
  "https://image.rounz.com/_data/detail/MUSEUMBYBEACON/BRAND_MUSEUMBYBEACONSP.jpg",
  "https://image.rounz.com/_data/detail/MUSEUMBYBEACON/SP/MUSEUM66-C1(50)/MUSEUM66-C1(50)_01.jpg",
  "https://image.rounz.com/_data/detail/MUSEUMBYBEACON/SP/MUSEUM66-C1(50)/MUSEUM66-C1(50)_02.jpg",
  "https://image.rounz.com/_data/detail/MUSEUMBYBEACON/SP/MUSEUM66-C1(50)/MUSEUM66-C1(50)_03.jpg",
  "https://image.rounz.com/_data/detail/MUSEUMBYBEACON/SP/MUSEUM66-C1(50)/MUSEUM66-C1(50)_04.jpg",
  "https://image.rounz.com/_data/detail/MUSEUMBYBEACON/SP/MUSEUM66-C1(50)/MUSEUM66-C1(50)_SIZE.jpg",
];

const ImageViewer = () => {
  return (
    <ScrollView>
      <Container>
        {images.map((uri, index) => (
          <StyledImage key={index} source={{ uri }} resizeMode="cover" />
        ))}
      </Container>
    </ScrollView>
  );
};

export default ImageViewer;

const Container = styled.View`
  flex: 1;
  padding-top: 32px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 500px;
`;
