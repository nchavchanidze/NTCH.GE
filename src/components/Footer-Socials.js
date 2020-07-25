import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faDownload } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faDownload)

const BgColor = {
    backgroundColor: '#fff',
    color: '#ff0f5d'
}
const spanColor = {
    color: '#ff0f5d'
}

const iconStyle = {
    color: '#ff0f5d',
    fontSize: "1.33333333em !important"
}

function FooterSocials(props) {
    return (
        <div className="d-flex justify-content-between align-items-center footer-socials pt-2 ">
            <a href="https://www.facebook.com/nikoloztchavtchanidze/" target="_blank" rel="noopener noreferrer" className="socialsBG " style={BgColor}>
                <FontAwesomeIcon style={iconStyle} icon={['fab', 'facebook-f']} />
            </a>
            
            <a href="https://github.com/nchavchanidze" target="_blank" rel="noopener noreferrer" className="socialsBG " style={BgColor}>
                <FontAwesomeIcon style={iconStyle} icon={['fab', 'github']} />
            </a>

            <a href="https://www.linkedin.com/in/nikoloztchavtchanidze/" target="_blank" rel="noopener noreferrer" className="socialsBG " style={BgColor}>
                <FontAwesomeIcon style={iconStyle} icon={['fab', 'linkedin-in']} />
            </a>

            <a href="../../assets/docs/CV.pdf" download target="_blank" rel="noopener noreferrer" className="socialsBG " style={BgColor}>
                <FontAwesomeIcon style={iconStyle} icon={['fas', 'download']} />
                    <span style={spanColor} >&nbsp; RESUME</span>
            </a>
        </div>
    )
}

export default FooterSocials;
