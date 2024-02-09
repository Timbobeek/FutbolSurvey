import github from '../github.png'
import linkedin from '../linkedin.png'
import './Footer.css';

const Footer = () => {
    return(
            <div className="footer">
                <div className='footerLinks'>
                    <div className="git">
                        <a
                            href="https://github.com/Timbobeek"
                            target="_blank"
                            rel="noreferrer"
                        >
                        <img src={github} width="40" height="40" alt="logo" />
                        </a>
                    </div>
                    <div className="lin">
                    <a
                        href="https://www.linkedin.com/in/timofey-goloshchapov/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} width="40" height="40" alt="logo" />
                    </a>
                    </div>
                </div>
                <div className='footerText'>Tim Goloshchapov</div>
            </div>
    )
}

export default Footer;