import styles from './Singup.module.css'
import { ImGoogle } from 'react-icons/im'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Singup = () => {
    return (
        <div className="container">
            <div className={styles.singup}>
                <div className={styles.singup_top}>
                    <p className={styles.singup_title}>Know about the launch before everyone else</p>
                </div>
                <div className={styles.singup__buttom}>
                    <input className={styles.email__filed} placeholder='Enter Email Here' type="text" />
                    <div className={styles.singup__buttom__right}>
                        <Link className={styles.signup__btn} to={'/'}>Singup </Link>
                        <div>
                            <span>
                                <ImGoogle className={styles.social__icons} />
                            </span>
                            <GrLinkedinOption />
                            <FaFacebookF />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;