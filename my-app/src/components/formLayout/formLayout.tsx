
import { Button } from '../Button/Button';
import type { FormLayoutProps } from '../../types';

export const FormLayout = ({
   content,
   onClick,
   buttonText,
   additionalUI,
   footerUI,
}: FormLayoutProps) => {
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