import logoImage from "../../img/kookbee_logo.png";

const Footer = () => {
  return (
    <div className="w-full mt-80 flex justify-center min-w-65">
      <footer className="w-full bg-gray-800 shadow dark:bg-gray-900 ">
        <div className="w-full p-4 md:py-8">
          <div className="text-white sm:flex sm:items-center sm:justify-between" >
            <a href="/" className="flex items-center mb-4 sm:mb-0">
              <img
                src={logoImage}
                className="rounded-full h-16 w-16 mr-3"
                alt="Kookbee Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                KookBee
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
