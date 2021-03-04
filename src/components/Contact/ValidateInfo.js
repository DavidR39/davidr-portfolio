export default function validateInfo(values) {
  const errors = {};

  // name rule
  if (!values.name.trim()) {
    errors.name = 'Le nom doit être renseigné';
  }

  // email rules
  if (!values.email) {
    errors.email = "L'email doit être renseigné";
  } else if (!values.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    errors.email = "L'email est invalide";
  }

  // message rule
  if (!values.message) {
    errors.message = 'Veuillez saisir un message';
  }

  return errors;
}
