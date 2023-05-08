import MyProjectListItem from "./MyProjectListItem";

const MyProjectList = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <MyProjectListItem />
      </div>
    </div>
  );
};

export default MyProjectList;
