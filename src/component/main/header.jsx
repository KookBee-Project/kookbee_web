import { Fragment, useEffect, useState } from "react";
import logoImage from "../../img/kookbee_logo.png";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CubeIcon,
  RocketLaunchIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../../store/user/userSlice";
import { api } from "../../api/api";
import { getBootcampNameList } from "../../store/bootcamp/bootcampNameSlice";

const bootcamp = [
  {
    name: "공지사항",
    description: "공지사항 입니다.",
    href: "#",
    icon: BellIcon,
  },
  {
    name: "과제",
    description: "과제는 여러분의 성장의 밑거름입니다.",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Q&A",
    description: "궁금한 사항이 있다면 편하게 질문해주세요.",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "휴가",
    description: "떠나요~~ 둘이서~~ 제주도 푸른밤 한뼘아래~",
    href: "bootcamp/dayoff",
    icon: RocketLaunchIcon,
  },
  {
    name: "물품 대여",
    description: "잃어버리시면 100배 보상금..",
    href: "#",
    icon: CubeIcon,
  },
  {
    name: "밥친구",
    description: "혼밥.. 단무지빼고주세요",
    href: "#",
    icon: UsersIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data, userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMe());
    checkJwt();
    setInterval(checkJwt, 120000);
  }, []);

  useEffect(() => {
    dispatch(getBootcampNameList());
  }, [userId]);

  const checkJwt = async () => {
    const response = await api("GET", "user/token");
    return response.status;
  };

  return (
    <header className="bg-white border-b border-gray-300 shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <img className="h-16 w-20" src={logoImage} alt="KookBee" />
          </Link>
          <div className="flex items-center font-bold text-2xl hover:cursor-pointer">
            <Link to={"/"}>KookBee</Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <Link to={"/bootcamp"}>부트캠프</Link>
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {bootcamp.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-yellow-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            커뮤니티
          </a>
          <div
            onClick={() => {
              navigate("/portfolio/note");
            }}
            className="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
          >
            포트폴리오
          </div>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            나의 강의실
          </a>
        </Popover.Group>
        {data.userName ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end font-semibold">
            <div>
              <Link to={""}>{data.userName}님</Link>
            </div>
            <button
              className="ml-3"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end font-semibold">
            <Link to={"/login"}>로그인</Link>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-16 w-20" src={logoImage} alt="KookBee" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        부트캠프
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...bootcamp].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  커뮤니티
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  포트폴리오
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  나의 강의실
                </a>
              </div>
              {data.userName ? (
                <div className="font-semibold">
                  <div className="py-6">
                    <Link to={""}>{data.userName}님</Link>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <div className="py-6 font-semibold">
                  <Link to={"/login"}>로그인</Link>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
