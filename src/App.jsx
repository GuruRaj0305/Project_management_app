import NewProject from "./components/NewProject.jsx";
import ProjectSideBar from "./components/ProjectSideBar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar />
      <NewProject />
    </ main>
  );
}

export default App;
