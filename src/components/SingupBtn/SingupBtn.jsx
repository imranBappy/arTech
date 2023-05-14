import { Link } from 'react-router-dom';
import './SingupBtn.css'
const SingupBtn = () => {
    return (
        <Link className={`text_white signup__btn`} to="/">Sing Up</Link>
    );
};

export default SingupBtn;