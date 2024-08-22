import PropTypes from "prop-types";

function UserGreeting(props) {
  const message = props.isLoggedIn
    ? `Welcome, ${props.username}.`
    : "Please, log in to continue.";

  const className = props.isLoggedIn ? "welcome-message" : "login-prompt";

  return <h2 className={className}>{message}</h2>;
}

UserGreeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default UserGreeting;
