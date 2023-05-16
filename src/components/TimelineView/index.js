import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <h1 className="head-1">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        cardWidth={400}
        slideShow
        slideItemDuration={4000}
        scrollable={{scrollbar: true}}
        enableDarkToggle
        theme={{
          secondary: 'white',
          titleColorActive: '#0967d2',
          titleColor: '#171f46',
        }}
      >
        {timelineItemsList.map(object => {
          if (object.categoryId === 'COURSE') {
            return <CourseTimelineCard key={object.id} item={object} />
          }
          return <ProjectTimelineCard key={object.id} item={object} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
