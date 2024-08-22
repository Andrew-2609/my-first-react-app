import profilePicture from "./assets/mec-man.png";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        alt="My avatar profile picture"
        src={profilePicture}
      />
      <h2 className="card-title">Ndrewcoding</h2>
      <p>Software Engineer and History Nerd</p>
    </div>
  );
}

export default Card;
