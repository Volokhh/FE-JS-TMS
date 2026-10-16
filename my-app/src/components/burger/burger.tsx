import './burger.css'
type BurgerVariant = 'lines' | 'cross'

type Props = {
   variant: BurgerVariant;
   onClick: (arg: any) => void;
};

export const Burger = ({ variant, onClick }: Props) => {
   return (
      <button className='burger'
         onClick={onClick}>
         {variant === 'lines' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round" />
            </svg>
         ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round" />
            </svg>
         )}
      </button>
   );
};