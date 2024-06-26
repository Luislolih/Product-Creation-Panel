import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = ({ fixedApply }) => {
    return (
        <>
            <footer
                className={`${styles.footerMain} ${
                    fixedApply ? styles.fixedApply : styles.fixedNoApply
                }`}
            >
                <div className="w-full px-5 flex flex-col lg:flex-row items-start gap-5 lg:gap-3 justify-between">
                    <div className="flex flex-col gap-2 w-2/4">
                        <h2 className="text-3xl">Clothing Inventory</h2>
                        <p className="text-lg">
                            Este proyecto fue creado con React y Tailwind CSS.
                        </p>
                    </div>
                    <div className="flex gap-3 items-center text-2xl cursor-pointer w-1/4">
                        <a
                            href="https://www.linkedin.com/in/luislolih/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:luislolihuamanchumo@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiGmail />
                        </a>

                        <a
                            href="https://github.com/Luislolih"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare />
                        </a>
                    </div>
                    <p className="lg:w-1/4">
                        Desarrollado por: <br /> Luis Loli Huamanchumo. 👨‍💻
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
