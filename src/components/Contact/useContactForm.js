import { useState, useEffect } from 'react';
import * as emailjs from 'emailjs-com';

emailjs.init('user_JZwp3wJI7AMTcDOAfrJ2h');

const useContactForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));

    setIsSubmitting(true);

    console.log(values);
    console.log(!Object.values(validate(values)).length);

    if (!Object.values(validate(values)).length) {
      emailjs
        .send('gmail', 'template_hh6dezj', values, 'user_JZwp3wJI7AMTcDOAfrJ2h')
        .then((res) => {
          console.log(res.text);
        })
        .catch((err) => {
          console.log(err.text);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useContactForm;
