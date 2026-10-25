import './pages.css';
import { Button } from '../components/Button/Button';

const Success = ({ onGoHome }: { onGoHome: () => void }) => (
   <div className="page page--narrow">
      <h1 className="page__title">Success</h1>

      <div className="card">
         <p className="card__text">
            Login successful.
         </p>
         <Button
            onClick={onGoHome}
            content={'Go to home'}
            isActive
            variant={'primary'}
            type="button"
         />
      </div>
   </div >
);

export default Success;
