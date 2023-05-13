import { Carousel } from "@material-tailwind/react";

const ADTab = () => {
  const imgList = [
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
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
