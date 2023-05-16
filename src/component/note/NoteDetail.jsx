import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import NoteDetailForm from "./NoteDetailForm";

const NoteDetail = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
      <PortfolioSideBar />
        <NoteDetailForm />
      </div>
    </div>
  );
};

export default NoteDetail;
