import { useScroll } from "../../scroll/useScroll";
import ADTab from "./ADTab";
import ClientTab from "./ClientTab";
import ProjectTab from "./ProjectTab";
import StudyTab from "./StudyTab";

const Home = () => {
  const scroll = useScroll();
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="border border-black w-5/6 h-full">
        <ADTab />
        <div className="flex h-full">
          <ProjectTab /> <StudyTab />
        </div>
        <ClientTab scroll={scroll} />
      </div>
    </div>
  );
};

export default Home;
