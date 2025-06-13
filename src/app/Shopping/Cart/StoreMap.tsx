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

    <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_REST_API_KEY}&libraries=services"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        var mapContainer = document.getElementById('map'),
            mapOption = {
              center: new kakao.maps.LatLng(36.3873928387438, 127.350410413633),
              level: 5
            };

        var map = new kakao.maps.Map(mapContainer, mapOption);
        var ps = new kakao.maps.services.Places();
        var markers = [];

        var testMarker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(36.3873928387438, 127.350410413633)
        });
        testMarker.setMap(map);

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

          kakao.maps.event.addListener(marker, 'click', function () {
              infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
              infowindow.open(map, marker);
          });

          markers.push(marker);
        }

        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            clearMarkers();
            var bounds = new kakao.maps.LatLngBounds();
            for (var i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            map.setBounds(bounds);
          } else {
            console.log("검색 실패:", status);
          }
        }

        var keyword = "${keyword}";
        console.log("검색 키워드:", keyword);

        if (keyword && keyword.trim() !== '') {
          ps.keywordSearch(keyword, placesSearchCB);
        } else {
          map.setCenter(new kakao.maps.LatLng(36.39164582963899, 127.36325760584441));
        }
      });
    </script>
  </body>
  </html>
;
`

  return (
    <ReservationStoreFinderSection>
      <ReservationHeader>
        <Font text="예약 매장 선택" kind="bold20" />
        <Font text="*" kind="bold20" color="pink300" />
      </ReservationHeader>

      <ReservationMap>
        <MapWrapper>
          <WebView
            key={searchQuery}
            ref={webViewRef}
            originWhitelist={['*']}
            source={{ html: generateHtmlContent(searchQuery) }}
            style={styles.webview}
            javaScriptEnabled
            domStorageEnabled
            onLoad={() => console.log('WebView loaded successfully')}
            onError={(e) => console.error('WebView error: ', e.nativeEvent)}
            onMessage={(event) => {
              const data = JSON.parse(event.nativeEvent.data);
              console.log("검색 결과:", data);
            }}
          />
        </MapWrapper>
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

const ReservationStoreFinderSection = styled.View
  `flex-direction: column;
  padding-bottom: 20px;
  gap: 8px;
  background-color: ${color.white};
;`

const ReservationHeader = styled.View
  `flex-direction: row;
  padding: 18px 20px;
;`

const ReservationMap = styled.View
  `flex-direction: column;
  padding: 8px 20px 30px;
  gap: 18px;
;`

const MapWrapper = styled.View
  `width: 100%;
  height: 276px;
  border-radius: 10px;
  border: 1px solid ${color.gray300};
  background-color: ${color.gray300};
  overflow: hidden;
;`

const SearchWrapper = styled.View
  `width: 100%;
  flex-direction: row;
  gap: 8px;
;`

export default StoreMap;