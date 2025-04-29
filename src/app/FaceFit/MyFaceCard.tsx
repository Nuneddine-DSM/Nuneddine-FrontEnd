import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { ImageBackground } from "react-native";

const FaceType = require("../../assets/FaceType.png");

const MyFaceCard = () => {
  return (
    <CardContainer source={FaceType} resizeMode="cover">
      <CardHeader>
        <>
          <Font text="부드러운 곡선이 매력적인" kind="regular16" color="white" />
          <Font text="둥근(Round) 얼굴형" kind="semi28" color="white" />
        </>

        <CardTagWrapper>
          <Tag>
            <Font text="#둥근매력" kind="semi12" color="white" />
          </Tag>
          <Tag>
            <Font text="#부드러운 무드" kind="semi12" color="white" />
          </Tag>
        </CardTagWrapper>
      </CardHeader>

      <FaceTypeImageWrapper>

      </FaceTypeImageWrapper>

      <CardDescription>
        <FeatureTitle>
          <Font text="FEATURE" kind="semi12" color="pink300" />
        </FeatureTitle>
        <Font
          text="둥근 얼굴형은 전체적으로 부드럽고 귀여운 인상을 주고, 가로와 세로의 길이가 비슷하며, 턱선이 둥근 것이 특징이에요."
          kind="regular14"
          color="white"
          style={{ lineHeight: 26 }}
        />
      </CardDescription>
    </CardContainer>
  )
}

const CardContainer = styled(ImageBackground)`
  width: 315px;
  height: 544px;
  padding: 30px 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const CardHeader = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  gap: 5px;
`

const CardTagWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`

const Tag = styled.Text`
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${color.pink400};
`

const FaceTypeImageWrapper = styled.View`
  width: 190px;
  height: 190px;
  border-radius: 1000px;
  border-width: 4px;
  border-color: ${color.pink300};
  background-color: ${color.white};
`

const CardDescription = styled.View`
  flex-direction: column;
  gap: 12px;
`

const FeatureTitle = styled.Text`
  padding: 6px 14px;
  border-radius: 20px;
  align-self: flex-start;
  background-color: ${color.white};
`

export default MyFaceCard
