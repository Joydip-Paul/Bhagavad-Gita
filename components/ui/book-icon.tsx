import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export function BookIcon({ size = 24, color = '#000' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Rect x={3} y={4} width={7} height={16} rx={1} />
      <Path d="M14 4h7v16h-7" />
      <Path d="M14 8c-1.5 0-2.5 1-4 1s-2.5-1-4-1" />
    </Svg>
  );
}
