import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookF, faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faDownload)

const iconStyle = {
    color: '#ffffff',
    fontSize: "1.33333333em !important"
}

function Socials(props) {
    return (
        <div className="d-flex justify-content-between align-items-center w-50 pt-2">
            <a href="https://www.facebook.com/nikoloztchavtchanidze/" target="_blank" rel="noopener noreferrer" className="p-0 m-0">
                <FontAwesomeIcon style={iconStyle} icon={['fab', 'facebook-f']} />
            </a>
            
            <a href="https://github.com/nchavchanidze" target="_blank" rel="noopener noreferrer" className="p-0 m-0">
                <FontAwesomeIcon style={iconStyle} icon={['fab', 'github']} />
            </a>

            <a href="https://www.linkedin.com/in/nikoloztchavtchanidze/" target="_blank" rel="noopener noreferrer" className="p-0 m-0">
                <FontAwesomeIcon style={iconStyle} icon={['fab', 'linkedin-in']} />
            </a>

            <a href="../../assets/docs/CV.pdf" download target="_blank" rel="noopener noreferrer" className="p-0 m-0">
                <FontAwesomeIcon style={iconStyle} icon={['fas', 'download']} />
                    &nbsp; RESUME
            </a>
        </div>
    )
}

export default Socials;
