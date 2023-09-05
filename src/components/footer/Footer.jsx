import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import github from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import "./style.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/kimmikoo"><img src={vk} alt="Link"/></a>
                        </li>
                        <li className="social__item"><a
                            href="https://instagram.com/kim_andryusha?igshid=NGVhN2U2NjQ0Yg=="><img
                            src={instagram}
                            alt="Link"/></a></li>
                        <li className="social__item"><a href="https://twitter.com/Kimpa4i"><img src={twitter}
                                                                                                alt="Link"/></a>
                        </li>
                        <li className="social__item"><a href="https://github.com/Kimpa4i"><img src={github}
                                                                                               alt=" Link"/></a>
                        </li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/andrey-kim-dev/"><img
                            src={linkedIn}
                            alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Andrew Kim</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}