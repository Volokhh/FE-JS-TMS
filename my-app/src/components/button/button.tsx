type ButtonVariant = 'primary' | 'secondary' | 'secondary2';

type Props = {
   content: string;
   isActive?: boolean;
   variant: ButtonVariant;
   onClick: (arg: any) => void;
   type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
   content,
   isActive,
   variant,
   onClick,
   type,
}: Props) => {
   return (
      <button
         className={`button button--${variant}`}
         disabled={!isActive}
         onClick={onClick}
         type={type || 'button'}
      >
         {content}
      </button>
   );
};