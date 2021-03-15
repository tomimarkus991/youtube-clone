import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface ColorModeProps {
  buttonSize?: "xs" | "sm" | "md" | "lg";
  mLeft?: string;
  variant: string;
}

const ColorMode: React.FC<ColorModeProps> = ({
  buttonSize,
  mLeft,
  variant,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      aria-label="Switch color-mode"
      variant={variant}
      size={buttonSize}
      ml={mLeft}
    />
  );
};
export default ColorMode;
