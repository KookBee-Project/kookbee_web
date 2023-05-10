import NoteListItem from "./NoteListItem";

const NoteList = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <NoteListItem />
      </div>
    </div>
  );
};

export default NoteList;
