import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, description, duration, imageUrl, projectUrl} = item

  return (
    <div className="project-card-container">
      <img className="p-img" alt="project" src={imageUrl} />
      <div className="p-title-container">
        <h1 className="p-title">{projectTitle}</h1>
        <div className="p-duration-container">
          <AiFillCalendar className="p-icon" />
          <p className="p-duration">{duration}</p>
        </div>
      </div>
      <p className="p-desc">{description}</p>
      <a className="p-link" href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
