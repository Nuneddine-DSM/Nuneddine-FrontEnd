import { useState } from "react";
import styled from "styled-components/native";
import { Font, color } from "../../styles"
import { Minus, Plus } from "../../assets";
import { useOrderStore } from "../../stores/useOrderStore";

interface QuantitySelectorProps {
  min?: number;
  max?: number;
  productId: number,
  onChange?: (count: number) => void;
}

const QuantitySelector = ({ min = 1, max = 99, productId, onChange }: QuantitySelectorProps) => {
  const { optionCount, setCount } = useOrderStore();

  const updateCount = (delta: number) => {
    const newCount = optionCount + delta;

    if (newCount < min || newCount > max) return;

    setCount(newCount);
    onChange?.(newCount);
  };

  return (
    <QuantityController>
      <IconButton onPress={() => updateCount(-1)}>
        <Minus size={14} color={color.gray600} />
      </IconButton>
      <QuantityDisplay>
        <Font text={optionCount.toString()} kind="medium14" />
      </QuantityDisplay>
      <IconButton onPress={() => updateCount(1)}>
        <Plus size={14} color={color.gray600} />
      </IconButton>
    </QuantityController>
  )
}

const QuantityController = styled.View`
  display: flex;
  flex-direction: row;
`;

const IconButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray200};
`;

const QuantityDisplay = styled.View`
  padding: 2px 17px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${color.gray200};
`

export default QuantitySelector