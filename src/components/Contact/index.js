import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';
import FormSuccess from './FormSuccess';
import { Typography, Link } from '@material-ui/core';
import { ContactSection, ContactBlock, ContactBlockForm, ContactBlockText, SocialBlock, ContactText, SocialTitle, SocialItem, Credits } from './style';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <ContactSection id="contact">
      <ContactBlock container>
        <ContactBlockForm item>
          <Typography variant='h3' darkColor={false} underlineDark={true}>Contact</Typography>
          {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <FormSuccess />}
        </ContactBlockForm>
        <Fade right duration={1000} delay={900} distance="30px">
          <ContactBlockText item>
            <img src='./images/contact.svg' ></img>
            <ContactText>
              Vous êtes à la recherche d'un indépendant pour effectuer le développement de votre application ? Mon profil vous intéresse ? Vous souhaitez simplement échanger avec moi ? Aucun souci ! Il vous suffit de m'envoyer un message via le formulaire de contact et je vous répondrai dans les plus brefs délais. A très bientôt !
            </ContactText>
          </ContactBlockText>
        </Fade>
      </ContactBlock>
      <SocialTitle>Suivez moi</SocialTitle>
      <SocialBlock container justify='center' spacing={5}>
        
        <SocialItem item>
        <Link href='https://www.linkedin.com/in/david-rollier-6089b9129/' target='blank'><LinkedInIcon fontSize='large' /></Link>
        </SocialItem>
        <SocialItem item>
            <Link href='https://github.com/DavidR39' target='blank'><GitHubIcon fontSize='large' /></Link>
        </SocialItem>
      </SocialBlock>
      <Credits>
        © 2021 - Site Web développé par David Rollier
      </Credits>
    </ContactSection>
  );
};

export default Contact;
