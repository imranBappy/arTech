import styles from './Header.module.css'
import { BsDot } from 'react-icons/bs';
const Header = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <h2 className={styles.header__heading}>Calling Creators of the Future</h2>
                <p className={styles.header__title}>The World First Pre-NFT Rights and Content Marketplace</p>
                <button className={styles.live__btn}> <BsDot className={styles.icon_dot} /> <span>NOW LIVE</span> </button>
            </header>
        </div>
    );
};

export default Header;