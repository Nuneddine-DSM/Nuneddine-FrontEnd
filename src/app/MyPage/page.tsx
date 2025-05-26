import styled from 'styled-components/native';
import { Font, color } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity } from 'react-native';
import { Arrow } from '../../assets';
import NavigationData from './Data';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { myPage } from '../../apis/user';

const MyPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState('');
  const [accountId, setAccountId] = useState('');

  useEffect(() => {
    const myPageInfo = async () => {
      try {
        const response = await myPage();
        const { name, account_id } = response.data;
        setName(name);
        setAccountId(account_id);
      } catch (err) {
        console.error(err);
      }
    };

    myPageInfo();
  }, []);

  return (
    <PageContainer>
      <TopBar
        text="마이페이지"
        leftIcon={
          <TouchableOpacity onPress={() => {}}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />
      <UserSection>
        <UserDetails>
          <Font text={name} kind="semi28" />
          <Font text={accountId} kind="regular16" color="gray500" />
        </UserDetails>
        <ProfileImage />
      </UserSection>

      <MenuList>
        {NavigationData.map(({ id, name, icon, href }) => (
          <MenuItem
            key={id}
            onPress={() => {
              if (href === 'EditProfile') {
                navigation.navigate(href, { name, accountId });
              } else {
                navigation.navigate(href);
              }
            }}>
            <Font text={name} kind="medium18" />
            {icon}
          </MenuItem>
        ))}
      </MenuList>
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

const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: ${color.gray100};
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
