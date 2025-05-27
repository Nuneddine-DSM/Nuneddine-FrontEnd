import styled from 'styled-components/native';
import { color, Font } from '../../styles';
import { TopBar } from '../../components';
import { TouchableOpacity, Animated } from 'react-native';
import { Arrow, Check } from '../../assets';
import { Button } from '../../components/Button';
import { FaceData } from './Data';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const FaceFit = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [selectFaceFit, setSelectFaceFit] = useState<number | null>(null);

  const bounceAnim = useState(new Animated.Value(0))[0];
  const opacityAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (selectFaceFit !== null) {
      const seq = Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.loop(
          Animated.sequence([
            Animated.timing(bounceAnim, {
              toValue: -3,
              duration: 800,
              useNativeDriver: true
            }),
            Animated.timing(bounceAnim, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true
            })
          ])
        )
      ]);
      seq.start();
      return () => seq.stop();
    }
  }, [selectFaceFit, bounceAnim, opacityAnim]);

  return (
    <Container>
      <TopBar
        text="얼굴형 별 추천"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow size={34} />
          </TouchableOpacity>
        }
      />

      <MainContent>
        <IntroTextGroup>
          <Font text="어떤 얼굴형이신가요?" kind="semi28" />
          <Font
            text="잘 어울리는 스타일을 만나기 위한 첫걸음이에요."
            kind="regular16"
            color="gray500"
          />
        </IntroTextGroup>

        <FaceOptionsContainer>
          {FaceData.map(({ id }) => (
            <SelectedFaceBox
              onPress={() => setSelectFaceFit(id)}
              selected={id === selectFaceFit}>
              {id === selectFaceFit && (
                <CheckBox>
                  <Check size={20} color={color.white} />
                </CheckBox>
              )}
            </SelectedFaceBox>
          ))}
        </FaceOptionsContainer>
      </MainContent>

      <BottomSection>
        <BubbleSection
          style={{
            transform: [{ translateY: bounceAnim }],
            opacity: opacityAnim
          }}>
          <SpeechBubble>
            <Font
              text="어울리는 안경테를 추천받으세요"
              kind="medium14"
              color="yellow100"
            />
          </SpeechBubble>
          <SpeechBubbleTail></SpeechBubbleTail>
        </BubbleSection>

        <ButtonWrapper>
          <Button
            text="확인하러가기"
            onPress={() => {
              if (selectFaceFit !== null) {
                navigation.navigate('Recommend', { faceId: selectFaceFit });
              }
            }}
          />
        </ButtonWrapper>
      </BottomSection>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 62px;
  background-color: ${color.white};
`;

const MainContent = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const IntroTextGroup = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const FaceOptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px;
`;

const SelectedFaceBox = styled.TouchableOpacity<{ selected: boolean }>`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 16px;
  border-width: ${({ selected }) => (selected ? 2 : 0)}px;
  border-color: ${color.pink300};
  background-color: ${({ selected }) =>
    selected ? color.pink100 : color.gray100};
  margin-bottom: 25px;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 50px 0 0;
  align-items: center;
`;

const BubbleSection = styled(Animated.View)`
  position: absolute;
  top: 0;
  align-items: center;
`;

const SpeechBubble = styled.View`
  padding: 8px 24px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${color.brown};
  z-index: 100;
`;

const SpeechBubbleTail = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${color.brown};
  transform: rotate(45deg);
  margin-top: -10px;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 25px 12px;
`;

const CheckBox = styled.View`
  position: absolute;
  top: 11px;
  right: 12px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${color.pink300};
`;

export default FaceFit;
