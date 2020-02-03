import React , {Fragment} from 'react';

import { ContactSection , ContactTitle , ConatactTitleSpan , ContactForm , FormDiv , DivInput , SubInput , TextArea , Submit } from './style.js';

import Footer from './../Footer';

function Contact() {
  return (
    <Fragment>
      <ContactSection>
          <div className="container">
              <ContactTitle>
                <ConatactTitleSpan> Contact </ConatactTitleSpan> Me
              </ContactTitle>
              <ContactForm action="">
                  <FormDiv>
                      <DivInput type="text" placeholder="Your Name" />
                      <DivInput type="email" placeholder="Your Email" />
                  </FormDiv>
                  <SubInput type="text" placeholder="Your Subject" />
                  <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                  <Submit type="submit" value="Send Message" />
              </ContactForm>
          </div>
      </ContactSection>

      <Footer />
    </Fragment>
  );
}

export default Contact;
