import { ChangeEvent, useState } from 'react';

export const SignUpFormComponent = () => {
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, confirmPassword, password, email } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
