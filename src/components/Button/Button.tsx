import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ButtonSize, buttonSize } from "./buttonSize";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
  href?: string;
}
export default function Button({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
  size,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary',
}

Button.Base = ButtonBase;
