import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Andrew" age={20} isStudent={true} />
      <Student name="Patrick" age={32} isStudent={false} />
      <Student name="Bob" age={25} isStudent={true} />
    </>
  );
}

export default App;
