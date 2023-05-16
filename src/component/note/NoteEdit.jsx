import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import NoteEditForm from "./NoteEditForm";

const NoteEdit = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <NoteEditForm />
      </div>
    </div>
  );
};

export default NoteEdit;
