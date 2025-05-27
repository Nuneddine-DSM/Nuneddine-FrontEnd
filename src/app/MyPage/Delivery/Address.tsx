import Postcode from '@actbase/react-daum-postcode';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from '../../../styles';

interface AddressWebviewData {
  address: string;
  zonecode: number;
  buildingName: string;
  bname: string;
}

interface PostcodeSelectParams {
  onSelect: (data: { zonecode: string; resultAddress: string }) => void;
}

const AddressWebview = () => {
  const route =
    useRoute<RouteProp<Record<string, PostcodeSelectParams>, string>>();
  const navigation = useNavigation();

  const handleSelected = (data: AddressWebviewData) => {
    const { address, zonecode, buildingName, bname } = data;
    const additionalInfo = [bname, buildingName].filter(Boolean).join(', ');
    const resultAddress = additionalInfo
      ? `${address} (${additionalInfo})`
      : address;

    route.params.onSelect({
      zonecode: zonecode.toString(),
      resultAddress: resultAddress
    });

    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.white
      }}>
      <Postcode
        style={{ flex: 1, width: '100%', zIndex: 99 }}
        jsOptions={{ animation: true }}
        onSelected={data => {
          handleSelected({
            address: data.address,
            zonecode: data.zonecode,
            buildingName: data.buildingName,
            bname: data.bname
          });
        }}
        onError={err => {
          console.error(err);
        }}
      />
    </SafeAreaView>
  );
};

export default AddressWebview;
