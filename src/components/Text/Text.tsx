import theme from "@src/theme/theme";
import React from 'react';
import Box from "../Box/Box";
import { StyleSheet } from "@src/theme/StyleSheet";

interface TextProps {
  variant?: 'display1';
  tag?: 'p' | 'li' | 'h1' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Text({
  styleSheet,
  variant,
  ...props
}: TextProps) {

  const textVariant = theme.typography.variants[variant];

  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
    />
  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2',
};
