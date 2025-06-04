export const getLensFrequencyList = (): number[] => {
  const frequency: number[] = [];
  for (let i = 0; i <= 32; i++) {
    const num = -(i * 0.25);
    frequency.push(num);
  }
  return frequency;
};

export const getLensMention = (percent: number) => {
  if (percent <= 30) {
    return {
      title: '렌즈 수명 넉넉!',
      content: '아직 여유 있어요'
    };
  } else if (percent <= 60) {
    return {
      title: '아직 괜찮지만,',
      content: '조금씩 피로해져요'
    };
  } else if (percent <= 90) {
    return {
      title: '거의 다 왔어요',
      content: '조심히 써주세요'
    };
  } else {
    return {
      title: '렌즈, 이제 한계!',
      content: '교체는 지금!'
    };
  }
};
