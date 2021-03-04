import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import useContactForm from './useContactForm';
import validate from './ValidateInfo';
import { Grid, Button, TextField, FormControl } from '@material-ui/core';

const ContactForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useContactForm(submitForm, validate);
    return (
        <Fade bottom duration={1000} delay={800} distance="30px">
            <Grid container direction='column' justify='center'>
                <FormControl focused={false}>
                    <TextField
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nom *"
                        autoComplete="off"
                        value={values.name}
                        onChange={handleChange}
                        margin='normal'
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                    <TextField
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Société"
                        autoComplete="off"
                        value={values.company}
                        onChange={handleChange}
                        margin='normal'
                    />
                    <TextField
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Téléphone"
                        autoComplete="off"
                        value={values.phone}
                        onChange={handleChange}
                        margin='normal'
                    />
                    <TextField
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        placeholder="Email *"
                        value={values.email}
                        autoComplete="off"
                        margin='normal'
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                    <TextField
                        name="message"
                        id="message"
                        onChange={handleChange}
                        placeholder="Message *"
                        value={values.message}
                        margin='normal'
                        multiline='true'
                        rows='7'
                    />
                    {errors.message && <p className="form-error">{errors.message}</p>}
                    <Button className="cta-btn cta-btn--resume" type="button" onClick={handleSubmit}>
                        Envoyer
                    </Button>
                    </FormControl>
            </Grid>
        </Fade>
    );
};

ContactForm.propTypes = {
    submitForm: PropTypes.func.isRequired,
};

export default ContactForm;
