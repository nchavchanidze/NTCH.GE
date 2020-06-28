import React from 'react';
import AboutHero from '../components/About-Hero';
import Content from '../components/Content';
import { Col } from 'react-bootstrap';
import AboutImage from '../assets/images/aboutimg.jpg'

function AboutPage(props) {

    return (
        <div className='animate__animated animate__fadeInUp'>
            <AboutHero title={props.title} />

            <Content className="row">
                <Col md={6} sm={12}>
                    <p>
                        Do greatest at in learning steepest. Breakfast extremity suffering one who all otherwise suspected.
                        He at no nothing forbade up moments. Wholly uneasy at missed be of pretty whence.
                        John way sir high than law who week. Surrounded prosperous introduced it if is up dispatched. Improved so strictly produced answered elegance is.
                </p>

                    <p>
                        Day handsome addition horrible sensible goodness two contempt.
                        Evening for married his account removal. Estimable me disposing of
                        be moonlight cordially curiosity. Delay rapid joy share allow age manor six.
                        Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still.
                </p>

                    <p>
                        On am we offices expense thought. Its hence ten smile age means.
                        Seven chief sight far point any. Of so high into easy.
                        Dashwoods eagerness oh extensive as discourse sportsman frankness. Husbands see
                        disposed surprise likewise humoured yet pleasure. Fifteen no inquiry cordial so resolve garrets as.
                        Impression was estimating surrounded solicitude indulgence son shy.
                </p>
                </Col>
                <Col md={6} sm={12}>
                        <img className='about-image w-100' src={AboutImage} alt={AboutImage} />
                    </Col>
            </Content>
        </div>
    )
}

export default AboutPage;