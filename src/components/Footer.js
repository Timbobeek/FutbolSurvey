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
                        <i class="fa-brands fa-github" style={{
                            fontSize: 40,
                            color: 'green'
                        }} />

                        </a>
                    </div>
                    <div className="lin">
                    <a
                        href="https://www.linkedin.com/in/timofey-goloshchapov/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fa-brands fa-linkedin" style={{
                            fontSize: 42,
                            color: 'green'
                        }} />
                    </a>
                    </div>
                </div>
                <div className='footerText'>Tim Goloshchapov</div>
            </div>
    )
}

export default Footer;