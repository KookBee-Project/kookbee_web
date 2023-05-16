import BootcampSideBar from "../sidebar/BootcampSideBar";
import SideBar from "../sidebar/BootcampSideBar";
import BootcampAddForm from "./BootcampAddForm";

const BootcampAdd = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        <BootcampAddForm />
      </div>
    </div>
  );
};

export default BootcampAdd;
