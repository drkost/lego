const LoginTestData = {
  validUsername: 'standard_user',
  validPassword: 'secret_sauce',

  invalidUsername: 'invalid_user',
  invalidPassword: 'invalid_password',

  locales: {
    english: {
      language: 'en',
      wrongPasswordMessage: '"Epic sadface: Username and password do not match any user in this service"',
    },
    french: {
      language: 'fr',
      wrongPasswordMessage: '"Visage triste épique : le nom dutilisateur et le mot de passe ne correspondent à aucun utilisateur de ce service"',
    },
    // Add more locales when needed
  },
};

export default LoginTestData;
