import { useState } from "react";
import NoProjectSelected from "./components/NOProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import ProjectSideBar from "./components/ProjectSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projectsArray: [],
  });

  function handleDeleteProject( ) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projectsArray : prevState.projectsArray.filter( (project) => project.id !== prevState.selectedProjectId )
      };
    });
  }
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projectsArray: [...prevState.projectsArray, newProject],
      };
    });
  }
  const selectedProject = projectsState.projectsArray.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete = {handleDeleteProject} />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projectsArray}
        onSelectProject = {handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
