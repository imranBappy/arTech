import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Singup from "../components/Singup/Singup";
import styles from './Home.module.css'
const Home = () => {
    return (
        <>
            <div style={{ width: "100%" }}>
                <div className={styles.hero__wrapper} >
                    <Navbar />
                    <Header />
                </div>
                <Singup />

            </div>
        </>
    );
};

export default Home;