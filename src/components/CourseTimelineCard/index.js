import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item

  return (
    <div className="course-card-container">
      <div className="title-container">
        <h1 className="c-title">{courseTitle}</h1>
        <div className="c-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="c-duration">{duration}</p>
        </div>
      </div>
      <p className="c-desc">{description}</p>
      <div className="c-list-container">
        {tagsList.map(object => (
          <p className="c-list-item" key={object.id}>
            {object.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
