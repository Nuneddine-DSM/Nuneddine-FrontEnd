import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { color, Font } from '../../../styles';
import { Button } from '../../../components';
import Search from '../../../components/Search';
import { KAKAOMAP_KEY as KAKAO_REST_API_KEY } from '@env';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const StoreMap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const webViewRef = useRef<WebView>(null);

  const generateHtmlContent = (keyword: string) => `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <title>키워드로 장소검색하기</title>
      <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      #map {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
  <div id="map"></div>
  
  <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_REST_API_KEY}&libraries=services"></script>
  <script>
    var infowindow = new kakao.maps.InfoWindow({zIndex:1});
    var mapContainer = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(36.39164582963899, 127.36325760584441),
            level: 1
        };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    var ps = new kakao.maps.services.Places();

    // 기존 마커들 저장
    var markers = [];

    function clearMarkers() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    function displayMarker(place) {
      var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x)
      });

      kakao.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
      });
      markers.push(marker);
    }

    function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
          clearMarkers(); // 기존 마커 삭제
          var bounds = new kakao.maps.LatLngBounds();
          for (var i=0; i<data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          map.setBounds(bounds);
      }
    }

    // 검색 키워드
    var keyword = "${keyword}";

    if(keyword && keyword.trim() !== '') {
      ps.keywordSearch(keyword, placesSearchCB);
    } else {
      // 빈 키워드일 경우 지도 중앙 표시
      map.setCenter(new kakao.maps.LatLng(36.39164582963899, 127.36325760584441));
    }

  </script>
  </body>
  </html>
  `;

  useEffect(() => {
    console.log('KAKAO_REST_API_KEY:', KAKAO_REST_API_KEY);
  }, [])

  return (
    <ReservationStoreFinderSection>
      <ReservationHeader>
        <Font text="예약 매장 선택" kind="bold20" />
        <Font text="*" kind="bold20" color="pink300" />
      </ReservationHeader>

      <ReservationMap>
        <MapWrapper>
          <WebView
            ref={webViewRef}
            originWhitelist={['*']}
            source={{ html: generateHtmlContent(searchQuery) }}
            style={styles.webview}
            javaScriptEnabled
            domStorageEnabled
            onLoad={() => console.log('WebView loaded successfully')}
            onError={(e) => console.error('WebView error: ', e.nativeEvent)}
            onMessage={(event) => console.log('FROM WEBVIEW:', event.nativeEvent.data)}
          />
        </MapWrapper>

        <SearchWrapper>
          <Search
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Button text="선택" width="80px" onPress={() => { }} />
        </SearchWrapper>
      </ReservationMap>
    </ReservationStoreFinderSection>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});

const ReservationStoreFinderSection = styled.View`
  flex-direction: column;
  padding-bottom: 20px;
  gap: 8px;
  background-color: ${color.white};
`;

const ReservationHeader = styled.View`
  flex-direction: row;
  padding: 18px 20px;
`;

const ReservationMap = styled.View`
  flex-direction: column;
  padding: 8px 20px 30px;
  gap: 18px;
`;

const MapWrapper = styled.View`
  width: 100%;
  height: 276px;
  border-radius: 10px;
  border: 1px solid ${color.gray300};
  background-color: ${color.gray300};
  overflow: hidden;
`;

const SearchWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export default StoreMap;
