import { Carousel } from "@material-tailwind/react";

const ADTab = () => {
  const imgList = [
    {
      src: "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
  ];
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      transition={{ duration: 0.5 }}
      className="h-80"
    >
      {imgList.map((el) => (
        <img src={el.src} className="h-full w-full object-cover" />
      ))}
    </Carousel>
  );
};

export default ADTab;
