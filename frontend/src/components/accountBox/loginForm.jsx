import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import { useNavigate } from "react-router-dom";


export function LoginForm() {

  const { switchToSignup } = useContext(AccountContext);

  const [loginMail,setloginMail] = useState("");
  const [loginPassword,setloginPassword] = useState("");

  const navig = useNavigate();

  const signIntoMyAccount = (e) => {
    e.preventDefault();
    console.log("Email: ",loginMail);
    console.log("Password",loginPassword);

    navig("/home");
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={signIntoMyAccount}>
        <Input 
          type="email" 
          value={loginMail}
          onChange={(e) => setloginMail(e.target.value)}
          placeholder="Email" 
          required
        />
        <Input 
          type="password" 
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setloginPassword(e.target.value)}
          required
        />

      <SubmitButton 
        type="submit">Signin
      </SubmitButton>

      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forgot your password?</MutedLink>
      <Marginer direction="vertical" />

      <Marginer direction="vertical" />
      <LineText>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}