import BootcampSideBar from "../sidebar/BootcampSideBar";
import EatingTogetherForm from "./EatingTogetherForm";

const EatingTogether = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        <EatingTogetherForm />
      </div>
    </div>
  );
};
export default EatingTogether;
