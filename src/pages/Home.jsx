import Swiper from "../components/ui/Swaper"
import EventSection from "../components/common/EventsSection";
import SchoolStats from "../components/common/SchoolStats";
import Fetalogya from "../components/common/Fotogalereya";

function Home() {
  return (
    <div className="container">
      <Swiper/>
      <EventSection/>
      <div className="py-10">
        <SchoolStats/>
      </div>
      <Fetalogya/>
    </div>
  )
}

export default Home