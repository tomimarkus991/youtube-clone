import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface SignInButtonProps {}

export const SignInButton: React.FC<SignInButtonProps> = ({}) => {
  const scheme = useColorModeValue("#2B76DA", "#3EA6FF");
  return (
    <Button
      leftIcon={<FaUserCircle size={25} />}
      // ringColor="telegram.900"
      colorScheme="blue"
      variant="outline"
      textColor={scheme}
      borderColor={scheme}
    >
      SIGN IN
    </Button>
  );
};
