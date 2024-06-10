import './assets/css/projectdiv.css';
import MainPicture from './assets/img/18.png'; 

function SideProjects() {
    return (
        <div className="project-container">
<div className="project-item" style={{backgroundImage: `url(${MainPicture})`}} data-title="WIT Online Library System (2024)"></div>
<div className="project-item" data-title="Project 2">Project 2</div>
<div className="project-item" data-title="Project 3">Project 3</div>
<div className="project-item" data-title="Project 4">Project 4</div>
<div className="project-item" data-title="Project 5">Project 5</div>
<div className="project-item" data-title="Project 6">Project 6</div>
<div className="project-item" data-title="Project 7">Project 7</div>
<div className="project-item" data-title="Project 8">Project 8</div>

        </div>
    );
}

export default SideProjects;
