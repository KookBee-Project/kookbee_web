
import BootcampSideBar from "../sidebar/BootcampSideBar";
import PostRestaurantForm from "./PostRestaurantForm";


const PostRestaurant = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        <PostRestaurantForm />
      </div>
    </div>
  );
};
export default PostRestaurant;
