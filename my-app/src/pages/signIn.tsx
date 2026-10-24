
import './pages.css';

import { useRef, useState } from 'react';
import type { ChangeEventHandler, RefObject, ReactNode } from 'react';
import { Button } from '../components/header_elements/button';


const FormLayout = ({
   content,
   onClick,
   buttonText,
   additionalUI,
   footerUI,
}: {
   content: ReactNode;
   buttonText: string;
   additionalUI: ReactNode;
   footerUI?: ReactNode;
   onClick: () => void;
}) => {
   const handleClick = (e: SubmitEvent) => {
      e.preventDefault();
      onClick();
   };

   return (
      <div className='container'>
         {content}
         {additionalUI}
         <Button
            onClick={handleClick}
            content={buttonText}
            isActive
            variant={'primary'}
            type="submit"
         />
         {footerUI}
      </div>
   );
};

type InputType = 'text' | 'password' | 'email';

type Props = {
   label: string;
   type?: InputType;
   error?: string;
   id: string;
   placeholder: string;
   disabled?: boolean;
   value: string;
   onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
   ref?: RefObject<HTMLInputElement | null>;
};

export const Input = ({
   label,
   type = 'text',
   error,
   id,
   placeholder,
   disabled,
   value,
   ref,
   onChange,
}: Props) => {
   return (
      <div className="field">
         <label htmlFor={id}>{label}</label>
         <input
            ref={ref}
            type={type}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
         />
         {error && <h3>{error}</h3>}
      </div>
   );
};

export const SignIn = ({ onSuccess }: { onSuccess: () => void }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const inputEmailRef = useRef<HTMLInputElement>(null);
   const inputPasswordRef = useRef<HTMLInputElement>(null);

   const handleClick = () => {
      if (!email.trim()) {
         inputEmailRef.current?.focus();
         return;
      }

      if (!password.trim()) {
         inputPasswordRef.current?.focus();
         return;
      }

      onSuccess();

      console.log({
         email,
         password,
      });
   };

   return (
      <div className='page page--narrow'>
         <a href='../pages/allPosts.tsx' className="back-link">Back to home</a>
         <h1 className="page__title">Sign In</h1>
         <FormLayout
            content={
               <>
                  <Input
                     ref={inputEmailRef}
                     label={'Email'}
                     id={'Email'}
                     placeholder={'Email'}
                     type="email"
                     value={email}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                  />
                  <Input
                     ref={inputPasswordRef}
                     label={'Password'}
                     id={'password'}
                     placeholder={'Password'}
                     type="password"
                     value={password}
                     onChange={(e) => {
                        setPassword(e.target.value);
                     }}
                  />
               </>
            }
            additionalUI={<p className="container__link">Forgot password?</p>}
            footerUI={
               <p className="container__note">
                  Don't have an account? <button onClick={() => alert('А нельзя пока')}>Sign Up</button>
               </p>
            }
            onClick={handleClick}
            buttonText="Sign In"
         />
      </div>
   );
};

