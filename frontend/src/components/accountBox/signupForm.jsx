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

export function SignupForm() {

  const { switchToSignin } = useContext(AccountContext);

  const [signUpFullName,setSignUpFullName] = useState("");
  const [signUpMail,setSignUpMail] = useState("");
  const [signUpPassword,setSignUpPassword] = useState("");
  const [signUpConfirmPassword,setSignUpConfirmPassword] = useState("");


  const signUpMyAccount = (e) => {
    e.preventDefault();
    console.log("Full Name: ",signUpFullName);
    console.log("Email: ",signUpMail);
    console.log("Password:",signUpPassword);
    console.log("Confirm Password:",signUpConfirmPassword);
  }
  return (
    <BoxContainer>
      <FormContainer onSubmit={signUpMyAccount}>
        <Input 
          type="text" 
          placeholder="Full name"
          value={signUpFullName}
          onChange={(e) => setSignUpFullName(e.target.value)}
          required
        />
        <Input 
          type="email" 
          placeholder="Email" 
          value={signUpMail}
          onChange={(e) => setSignUpMail(e.target.value)}
          required 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
          required/>

        <Input 
          type="password" 
          placeholder="Confirm password" 
          value={signUpConfirmPassword}
          onChange={(e) => setSignUpConfirmPassword(e.target.value)}
          required />
        
        <SubmitButton type="submit">Signup</SubmitButton>

      </FormContainer>
      <Marginer direction="vertical" />
      
      <Marginer direction="vertical" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}