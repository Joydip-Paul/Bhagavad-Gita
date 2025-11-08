import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export function SparklesIcon({ size = 24, color = '#000' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 3l1.5 3.5L17 7l-3.5.5L12 11l-1.5-3.5L7 7l3.5-1.5L12 3z" />
      <Path d="M5 13l1 2.5L8 17l-2.5.5L5 20l-0.5-2.5L2 17l2.5-1.5L5 13z" />
    </Svg>
  );
}
