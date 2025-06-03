import styled from "styled-components/native";
import { color, Font } from "../../styles"
import { ImageBackground } from "react-native";

const FaceType = require("../../assets/FaceType.png");

interface PropsType {
  subTitle: string,
  title: string,
  name: string,
  tag: Array<string>,
  describe: string
}

const MyFaceCard = ({ subTitle, title, name, tag, describe }: PropsType) => {
  return (
    <CardContainer source={FaceType} resizeMode="cover">
      <CardHeader>
        <Font text={subTitle} kind="regular16" color="white" />
        <Font text={`${title}(${name}) 얼굴형`} kind="semi28" color="white" />

        <CardTagWrapper>
          {tag.map((tagName) =>
            <Tag>
              <Font text={`#${tagName}`} kind="semi12" color="white" />
            </Tag>
          )}
        </CardTagWrapper>
      </CardHeader>

      <FaceTypeImageWrapper>

      </FaceTypeImageWrapper>

      <CardDescription>
        <FeatureTitle>
          <Font text="FEATURE" kind="semi12" color="pink300" />
        </FeatureTitle>
        <Font
          text={describe}
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
  gap: 4px;
`

const CardTagWrapper = styled.View`
  flex-direction: row;
  padding: 4px 0;
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
