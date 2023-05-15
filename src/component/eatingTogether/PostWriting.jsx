import BootcampSideBar from "../sidebar/BootcampSideBar";
import PostWritingForm from "./PostWritingForm";

const PostWriting = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        <PostWritingForm />
      </div>
    </div>
  );
};
export default PostWriting;
