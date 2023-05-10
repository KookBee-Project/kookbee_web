import PortfolioSideBar from "../../../sidebar/PortfolioSideBar";
import PostRegisterForm from "./PostRegisterForm";

const PostRegister = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <PortfolioSideBar />
        <PostRegisterForm />
      </div>
    </div>
  );
};
export default PostRegister;
