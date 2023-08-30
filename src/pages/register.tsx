const Register = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <span className="register__logo">Chat</span>
        <span className="register__title">Register</span>
        <form className="register__form">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign up</button>
        </form>
        <p>Have an account already? Login</p>
      </div>
    </div>
  );
};
export default Register;
