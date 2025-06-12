import styled from 'styled-components/native';
import { useState, useEffect, useRef } from 'react';
import { color, Font } from '../../../styles';
import { Button } from '../../../components';
import Search from '../../../components/Search';
import StoreLocation from '../../../components/Shopping/StoreLocation';
import { KAKAOMAP_KEY as KAKAO_REST_API_KEY } from '@env';
import {
  Animated,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { WebView } from 'react-native-webview';

type Coordinate = {
  latitude: number;
  longitude: number;
};

type SearchResult = {
  latitude: number;
  longitude: number;
  place_name: string;
  address_name?: string;
  phone?: string;
};

const StoreMap = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [location, setLocation] = useState<Coordinate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedStore, setSelectedStore] = useState<SearchResult | null>(null);
  const animation = useRef(new Animated.Value(0)).current;
  const webViewRef = useRef<WebView>(null);

  const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '위치 권한 요청',
          message: '앱에서 현재 위치를 확인하려면 권한이 필요합니다.',
          buttonNeutral: '나중에',
          buttonNegative: '거부',
          buttonPositive: '허용',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    const getLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        console.log('위치 권한이 없습니다.');
        return;
      }

      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('위치 정보를 가져오는 데 실패했습니다:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    getLocation();
  }, []);

  const generateHtmlContent = (lat: number, lng: number) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_REST_API_KEY}&libraries=services"></script>
      <style>
        html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        let map;
        let markers = [];

        function initMap(lat, lng) {
          const container = document.getElementById('map');
          const options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3
          };
          map = new kakao.maps.Map(container, options);
        }

        function clearMarkers() {
          markers.forEach(marker => marker.setMap(null));
          markers = [];
        }

        function addMarkers(markerData) {
          clearMarkers();
          markerData.forEach(item => {
            const marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(item.latitude, item.longitude),
              title: item.place_name,
            });
            marker.setMap(map);
            markers.push(marker);
          });
        }

        window.onload = function() {
          initMap(${lat}, ${lng});
        };

        document.addEventListener('message', function(event) {
          const data = JSON.parse(event.data);
          if (data.type === 'markers') {
            addMarkers(data.payload);
          }
        });

        window.onerror = function(message, source, lineno, colno, error) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'jsError',
            message,
            source,
            lineno,
            colno,
            error: error?.toString()
          }));
        };
      </script>
    </body>
  </html>
`;

  const searchGym = async () => {
    if (!searchQuery || !location) return;

    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchQuery}&x=${location.longitude}&y=${location.latitude}&radius=2000`,
        {
          headers: {
            Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
          },
        }
      );
      const data = await response.json();

      if (data.documents.length > 0) {
        const results: SearchResult[] = data.documents.map((doc: any) => ({
          latitude: parseFloat(doc.y),
          longitude: parseFloat(doc.x),
          place_name: doc.place_name,
          address_name: doc.road_address_name || doc.address_name,
          phone: doc.phone,
        }));

        setSearchResults(results);

        if (webViewRef.current) {
          const message = JSON.stringify({ type: 'markers', payload: results });
          webViewRef.current.postMessage(message);
        }

        Animated.timing(animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setSearchResults([]);
        console.log('검색 결과가 없습니다.');
      }
    } catch (error) {
      console.error('검색 오류:', error);
    }
  };

  const handleSelectResult = (item: SearchResult) => {
    setIsSelect(true);
    setSelectedStore(item);
  };

  const placeNames = searchResults.map((item) => item.place_name);

  return (
    <ReservationStoreFinderSection>
      <ReservationHeader>
        <Font text="예약 매장 선택" kind="bold20" />
        <Font text="*" kind="bold20" color="pink300" />
      </ReservationHeader>

      <ReservationMap>
        <MapSearchWrapper>
          <MapWrapper>
            <View style={styles.container}>
              {location && (
                <WebView
                  ref={webViewRef}
                  originWhitelist={['*']}
                  source={{ html: generateHtmlContent(location.latitude, location.longitude) }}
                  style={styles.webview}
                  javaScriptEnabled
                  domStorageEnabled
                  onLoad={() => console.log('WebView loaded successfully')}
                  onError={(e) => console.error('WebView error: ', e.nativeEvent)}
                  onMessage={(event) => {
                    const data = JSON.parse(event.nativeEvent.data);
                    if (data.type === 'jsError') {
                      console.error('JavaScript Error in WebView:', data);
                    }
                  }}
                />
              )}
            </View>
          </MapWrapper>

          <Animated.View
            style={[
              styles.resultList,
              {
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [100, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {searchResults.map((item, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => handleSelectResult(item)}>
                <View style={styles.resultItem}>
                  <Text style={styles.resultItemText}>{item.place_name}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </Animated.View>

          <SearchWrapper>
            <Search
              value={searchQuery}
              onChangeText={setSearchQuery}
              item={placeNames}
              onPressItem={setSearchQuery}
            />
            <Button text="선택" width="80px" onPress={searchGym} />
          </SearchWrapper>
        </MapSearchWrapper>

        {isSelect && selectedStore && (
          <StoreLocation
            name={selectedStore.place_name}
            address={selectedStore.address_name || '주소 정보 없음'}
            contact={selectedStore.phone || '연락처 정보 없음'}
          />
        )}
      </ReservationMap>
    </ReservationStoreFinderSection>
  );
};

const styles = StyleSheet.create({
  resultList: {
    maxHeight: 150,
    marginTop: 8,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultItemText: {
    fontSize: 16,
  },
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

const MapSearchWrapper = styled.View`
  flex-direction: column;
  gap: 14px;
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
