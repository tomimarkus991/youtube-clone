import { Button } from "@chakra-ui/button";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface SignInButtonProps {}

export const SignInButton: React.FC<SignInButtonProps> = ({}) => {
  return (
    <Button
      leftIcon={<FaUserCircle size={25} />}
      colorScheme="blue"
      variant="outline"
    >
      SIGN IN
    </Button>
  );
};
