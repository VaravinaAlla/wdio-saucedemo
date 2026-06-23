module.exports = [
  { username: 'standard_user', password: 'secret_sauce', expected: 'success' },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expected: 'Epic sadface: Sorry, this user has been locked out.',
  },
];
