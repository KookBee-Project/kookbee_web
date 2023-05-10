import PortfolioSideBar from "../../../sidebar/PortfolioSideBar";
import PostDetailForm from "./PostDetailForm";

const PostDetail = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <PostDetailForm />
      </div>
    </div>
  );
};
export default PostDetail;
