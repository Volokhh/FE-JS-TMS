import { Input } from "../components/Input/Input";
import { FormLayout } from "../components/FormLayout/FormLayout";


export const SignUp = ({ onSuccess }: { onSuccess: () => void }) => {

   const handleClick = () => {
      onSuccess();
   };

   return (
      <div className="page page--narrow">
         <h1 className="page__title">Sign Up</h1>

         <FormLayout
            content={
               <>
                  <Input
                     label={"Email"}
                     id={"Email"}
                     placeholder={"Email"}
                     type="email"
                  />
                  <Input
                     label={"Password"}
                     id={"Password"}
                     placeholder={"Password"}
                     type="password"
                  />
                  <Input
                     label={"Confirm Password"}
                     id={"confirm-password"}
                     placeholder={"Confirm Password"}
                     type="password"
                  />
               </>
            }

            onClick={handleClick}
            buttonText="Sign Up"
         />
      </div>

   )
}