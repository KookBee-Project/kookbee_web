import NoteCurriculumListItem from "./NoteCurriculumListItem";

const NoteCurriculumList = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <NoteCurriculumListItem />
      </div>
    </div>
  );
};

export default NoteCurriculumList;