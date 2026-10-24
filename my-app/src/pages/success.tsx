import './pages.css';
import { Button } from '../components/button/button';

const Success = ({ onGoHome }: { onGoHome: () => void }) => (
   <div className="page page--narrow">
      <h1 className="page__title">Success</h1>

      <div className="card">
         <p className="card__text">
            Email confirmed.<br />
            Your registration is now completed
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
