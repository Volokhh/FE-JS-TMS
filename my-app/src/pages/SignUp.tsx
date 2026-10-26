import { Input } from "../components/Input/Input";
import { FormLayout } from "../components/FormLayout/FormLayout";
import { useRef, useState } from "react";


export const SignUp = ({ onSuccess }: { onSuccess: () => void }) => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const inputEmailRef = useRef<HTMLInputElement>(null);
   const inputPasswordRef = useRef<HTMLInputElement>(null);
   const inputConfirmPasswordRef = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      if (!email.trim()) {
         inputEmailRef.current?.focus();
         return;
      }
      if (!password.trim()) {
         inputPasswordRef.current?.focus();
         return;
      }
      if (!confirmPassword.trim()) {
         inputConfirmPasswordRef.current?.focus();
      }

      if (password !== confirmPassword) {
         inputConfirmPasswordRef.current?.focus()
      }


      onSuccess();
   };

   return (
      <div className="page page--narrow">
         <h1 className="page__title">Sign Up</h1>

         <FormLayout
            content={
               <>
                  <Input
                     ref={inputEmailRef}
                     label={"Email"}
                     id={"Email"}
                     placeholder={"Email"}
                     type="email"
                     value={email}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                  />
                  <Input
                     ref={inputPasswordRef}
                     label={"Password"}
                     id={"Password"}
                     placeholder={"Password"}
                     type="password"
                     value={password}
                     onChange={(e) => {
                        setPassword(e.target.value);
                     }}
                  />
                  <Input
                     ref={inputConfirmPasswordRef}
                     label={"Confirm Password"}
                     id={"confirm-password"}
                     placeholder={"Confirm Password"}
                     type="password"
                     onChange={(e) => {
                        setConfirmPassword(e.target.value)
                     }}
                  />
               </>
            }

            onClick={handleClick}
            buttonText="Sign Up"
         />
      </div>

   )
}