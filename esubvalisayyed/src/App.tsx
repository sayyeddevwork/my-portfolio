import Background from "./components/background";
import NavBar from "./components/navigation";

function App() {
  return (
    <>
      <Background />

      <NavBar />

      <main>
        <section id="home"></section>

        <section id="about"></section>

        <section id="skills"></section>

        <section id="projects"></section>

        <section id="experience"></section>

        <section id="education"></section>

        <section id="contact"></section>
      </main>
    </>
  );
}

export default App;
