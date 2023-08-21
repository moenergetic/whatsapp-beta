import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { Feather } from "@expo/vector-icons";

const SignInForm = (props) => {
  return (
    <>
      <Input label="Email" icon="mail" iconPack={Feather} />

      <Input label="Password" icon="lock" iconPack={Feather} />

      <SubmitButton
        title="Sign in"
        onPress={() => console.log("Button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;