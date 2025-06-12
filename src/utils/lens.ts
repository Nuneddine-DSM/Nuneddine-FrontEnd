import { LensDateType } from '../app/Data';
import LensFine from '../../assets/LensFine.png';
import LensSave from '../../assets/LensSave.png';
import LensWarning from '../../assets/LensWarning.png';
import LensDangger from '../../assets/LensDagger.png';

export const getLensFrequencyList = (): number[] => {
  const frequency: number[] = [];
  for (let i = 0; i <= 32; i++) {
    const num = -(i * 0.25);
    frequency.push(num);
  }
  return frequency;
};

export const calculateDueDate = (endDate: string) => {
  const targetDate = new Date(endDate);
  const today = new Date();

  targetDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = targetDate.getTime() - today.getTime();
  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDay === 0) {
    return 'D-Day';
  } else if (diffDay > 0) {
    return `D-${diffDay}`;
  } else {
    return `D+${Math.abs(diffDay)}`;
  }
};

export const calculateProgress = (startDateStr: string, endDateStr: string) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const today = new Date();

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const totalDuration = endDate.getTime() - startDate.getTime();
  const elapsed = today.getTime() - startDate.getTime();

  if (totalDuration <= 0) {
    return 100;
  }
  if (elapsed <= 0) {
    return 0;
  }

  const progress = (elapsed / totalDuration) * 100;

  return Math.min(100, Math.floor(progress));
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

export const getLensIconImageSource = (percent: number) => {
  if (percent <= 30) {
    return LensFine;
  } else if (percent <= 60) {
    return LensSave;
  } else if (percent <= 90) {
    return LensWarning;
  } else {
    return LensDangger;
  }
};

const pad = (num: number) => num.toString().padStart(2, '0');

export const calculateStartTime = () => {
  const today = new Date();
  return `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
    today.getDate()
  )}T00:00:00`;
};

export const calculateEndTime = (dateType: LensDateType) => {
  const targetDate = new Date();
  targetDate.setHours(0, 0, 0, 0);

  if (dateType === 'DATE') {
    targetDate.setDate(targetDate.getDate() + 1);
  } else if (dateType === 'WEEK') {
    targetDate.setDate(targetDate.getDate() + 7);
  } else if (dateType === 'MONTH') {
    targetDate.setMonth(targetDate.getMonth() + 1);
  } else {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }

  return `${targetDate.getFullYear()}-${pad(targetDate.getMonth() + 1)}-${pad(
    targetDate.getDate()
  )}T00:00:00`;
};
