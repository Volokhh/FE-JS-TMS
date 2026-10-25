
import './pages.css';
import { useRef, useState } from 'react';
import { Input } from '../components/Input/Input';
import { FormLayout } from '../components/FormLayout/FormLayout';


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
                     label={'email'}
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

