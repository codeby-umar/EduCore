import Swiper from "../components/ui/Swaper"
import EventSection from "../components/common/EventsSection";
import SchoolStats from "../components/common/SchoolStats";

function Home() {
  return (
    <div className="container">
      <Swiper/>
      <EventSection/>
      <div className="py-10">
        <SchoolStats/>
      </div>
    </div>
  )
}

export default Home