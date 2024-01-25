import React from "react";
import styled from 'styled-components';
import { useRipple } from 'react-use-ripple';
import { ThemeTypographyVariants } from "@src/theme/theme";
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text) <any>``;

interface ButtonBase {
  href?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  children,
  textVariant,
  styleSheet,
  href,
  ...props
}: ButtonBase) {
  const router = useRouter();
  const ref = React.useRef();
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255,255,255,0.7)',
  });

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      styleSheet={{
        border: '0',
        backgroundColor: 'transparent',
        color: 'inherit',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        ...styleSheet
      }}
      onClick={(e) => {
        isLink && e.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(e);
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
