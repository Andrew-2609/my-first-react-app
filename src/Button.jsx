function Button() {
  const styles = {
    width: "10em",
    fontSize: "2em",
  };

  const handleClick = (e) => {
    e.target.textContent = "Ouch 🤕";
  };

  return (
    <button style={styles} onClick={(e) => handleClick(e)}>
      Click me 😃
    </button>
  );
}

export default Button;
