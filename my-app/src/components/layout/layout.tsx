import type { ReactNode } from 'react';
import { useState } from 'react';
import { Burger } from '../header_elements/burger';

interface LayoutProps {
   children: ReactNode;
   onIconClick: () => void;
}

export const Layout = ({ children, onIconClick }: LayoutProps) => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="layout">
         <header className="header">
            <Burger
               variant={isOpen ? 'cross' : 'lines'}
               onClick={() => setIsOpen(!isOpen)} />

            <div className='header__right-wrapper'>
               <button type='button' className='header__btn-search'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" fill="#FFFFFF"></path>
               </svg>
               </button>

               <button type="button" className="header__btn-user" onClick={onIconClick}><svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#FFFFFF" />
                  <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#FFFFFF" />
               </svg>
               </button>
            </div>
         </header>

         <main className="layout__main">{children}</main>

         <footer className="footer">
            <span>©2026 React Project </span>
            <span>By Karina Volokh</span>
         </footer>
      </div>
   );
};



