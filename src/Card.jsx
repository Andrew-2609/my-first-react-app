import profilePicture from "./assets/mec-man.png";

function Card() {
  return (
    <div className="card">
      <img alt="My avatar profile picture" src={profilePicture} />
      <h2>Ndrewcoding</h2>
      <p>Software Engineer and History Nerd</p>
    </div>
  );
}

export default Card;
