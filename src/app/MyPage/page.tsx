import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import { NavigationData } from './Data';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { myPage } from '../../apis/user';
import DefaultProfile from '../../assets/DefaultProfile.png';

const MyPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [nickname, setNickname] = useState('');
  const [accountId, setAccountId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const myPageInfo = async () => {
      try {
        setLoading(true);
        const response = await myPage();
        const { name, account_id } = response.data;
        setNickname(name);
        setAccountId(account_id);
      } catch (err) {
        console.error(err);
        Alert.alert('내 정보를 불러오는 데 실패했습니다');
      } finally {
        setLoading(false);
      }
    };

    myPageInfo();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <PageContainer>
      <TopBar
        text="마이페이지"
        leftIcon={
          <TouchableOpacity
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <UserSection>
            <UserDetails>
              <Font text={nickname} kind="semi28" />
              <Font text={accountId} kind="regular16" color="gray500" />
            </UserDetails>
            <ProfileImageContainer>
              <ProfileImage source={DefaultProfile} />
            </ProfileImageContainer>
          </UserSection>

          <MenuList>
            {NavigationData.map(({ id, name, icon, href }) => (
              <MenuItem
                key={id}
                onPress={() => {
                  if (href === 'EditProfile') {
                    navigation.navigate(href, { name: nickname, accountId });
                  } else {
                    navigation.navigate(href);
                  }
                }}>
                <Font text={name} kind="medium18" />
                {icon}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.white};
`;

const UserSection = styled.View`
  flex-direction: row;
  padding: 30px 25px;
  justify-content: space-between;
  align-items: center;
`;

const UserDetails = styled.View`
  flex-direction: column;
`;

const ProfileImageContainer = styled.View`
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: ${color.gray100};
  border-radius: 100px;
`;

const ProfileImage = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const MenuList = styled.View`
  padding: 20px 25px;
`;

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-bottom-width: 1px;
  border-color: ${color.gray200};
`;

export default MyPage;
