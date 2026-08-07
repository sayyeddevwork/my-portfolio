import Background from "./components/background";
import Hero from "./components/hero";
import NavBar from "./components/navigation";

function App() {
  return (
    <>
      <Background />

      <NavBar />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
