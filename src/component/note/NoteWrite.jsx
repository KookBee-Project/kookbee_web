import PortfolioSideBar from "../sidebar/PortfolioSideBar";
import NoteWriteForm from "./NoteWriteForm";

const NoteWrite = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <NoteWriteForm />
      </div>
    </div>
  );
};

export default NoteWrite;
