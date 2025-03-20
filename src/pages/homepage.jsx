import {
  MapPin,
  Search,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Copyright,
} from "lucide-react";
import WFH from "../assets/Images/wfh.png";
import VR from "../assets/Images/VR.png";
import LJS from "../assets/Images/LJS.png";
import Logo from "../assets/Images/cjLogo3.png";
import { useEffect, useState } from "react";
import {
  House,
  BriefcaseBusiness,
  UsersRound,
  Video,
  GraduationCap,
  Clock,
  Medal,
  User,
  Wrench,
} from "lucide-react";
import { Link } from "react-router";

const SliderImages = [WFH, VR, LJS];
const Homepage = () => {
  const [now, setNow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((prevIndex) => (prevIndex + 1) % SliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     
      <div className="min-h-screen mt-16 flex flex-col md:flex-row">
        <div className="p-5 flex flex-col w-full md:w-1/2">
          {/* Body (Hero) Text */}
          <div className="w-full max-w-[650px] mx-auto md:mx-0 md:mt-15">
            <h1 className="font-mono text-4xl md:text-6xl text-center md:text-left">
              Find Your Perfect Job Near You
            </h1>
            <h2 className="text-gray-500 text-lg md:text-2xl mt-3 font-mono text-center md:text-left">
              Discover local opportunities with video resumes and specialized
              categories for everyone
            </h2>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-[650px] mt-6 mx-auto md:mx-0 shadow-2xl rounded-xl flex flex-col md:flex-row p-4 gap-4 md:gap-6 items-center">
            <div className="relative w-full md:w-[260px]">
              <Search
                size={24}
                strokeWidth={2}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Search Jobs..."
                className="pl-9 w-full h-[40px] rounded-xl font-mono shadow-md"
              />
            </div>

            <div className="relative w-full md:w-[150px]">
              <MapPin
                size={24}
                strokeWidth={2}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Location"
                className="pl-9 w-full h-[40px] rounded-xl font-mono shadow-md"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 w-full md:w-[200px] shadow-md text-white font-mono font-bold p-3 rounded-xl">
              Search Jobs
            </button>
          </div>
        </div>

        {/* hero section img slider */}
        <div className="p-5 w-full md:w-1/2 flex md:items-center">
          <div className="mt-6 md:mt-0 w-full max-w-[450px] mx-auto">
            <div className="flex overflow-hidden w-full rounded-xl shadow-2xl h-[300px] md:h-[400px]">
              <div
                className="flex transition-transform duration-700 ease-in-out w-full"
                style={{ transform: `translateX(-${now * 100}%)` }}
              >
                {SliderImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`slider-${index}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards section */}
      <div>
        {/* intro */}
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="font-mono font-bold text-4xl md:text-6xl">
            Key Features
          </h1>
          <p className="text-gray-700 mt-3 text-lg md:text-xl font-mono text-center">
            Discover what makes Chota Jobs unique and perfect for your needs
          </p>
        </div>

        {/* features Cards */}
        <div className="p-5 flex flex-col md:flex-row flex-wrap justify-center">
          <div className="flex flex-col p-5 h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-xl ">
            <House
              size={56}
              strokeWidth={2}
              className="rounded-full bg-blue-600 p-2 text-white"
            />
            <p className="text-gray-500 mt-6 text-lg md:text-xl font-mono">
              Find flexible work opportunities you can do from home
            </p>
          </div>
          <div className="flex flex-col p-5 h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-xl ">
            <BriefcaseBusiness
              size={56}
              strokeWidth={2}
              className="rounded-full bg-blue-600 p-2 text-white"
            />
            <p className="text-gray-500 mt-6 text-lg md:text-xl font-mono">
              Explore full-time and part-time positions in your area
            </p>
          </div>
          <div className="flex flex-col p-5 h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-xl">
            <UsersRound
              size={56}
              strokeWidth={2}
              className="rounded-full bg-blue-600 p-2 text-white"
            />
            <p className="text-gray-500 mt-6 text-lg md:text-xl font-mono">
              Dedicated sections for Ex-Servicemen and Retired Professionals
            </p>
          </div>
          <div className="flex flex-col p-5 h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-xl">
            <Video
              size={56}
              strokeWidth={2}
              className="rounded-full bg-blue-600 p-2 text-white"
            />
            <p className="text-gray-500 mt-6 text-lg md:text-xl font-mono">
              Stand out with your video resume and showcase your personality
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(var(--background2))]">
        {/* Browse Categories banner */}
        <div className="flex flex-col justify-center items-center p-5 mt-10">
          <h1 className="font-mono font-bold text-4xl md:text-6xl">
            Browse Job Categories
          </h1>
          <p className="text-gray-700 mt-3 text-lg md:text-xl font-mono text-center">
            Find opportunities in various sectors that match your skills
          </p>
        </div>

        {/* Browse Categories items */}
        <div className="p-5 flex flex-col  md:flex-row flex-wrap gap-8 justify-center">
          <div className="flex flex-col items-center h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-2xl p-2">
            <House
              size={48}
              strokeWidth={3}
              className="rounded-full text-white bg-blue-400 p-1 size-20"
            />
            <h1 className="font-bold font-mono text-xl mt-3">Domestic Jobs</h1>
            <p className="text-gray-400 text-md font-mono mt-3">
              1,234 jobs available
            </p>
            <button className="p-2 border hover:bg-blue-600 hover:text-white rounded-xl mt-3 shadow-md">
              View Jobs
            </button>
          </div>
          <div className="flex flex-col items-center h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-2xl p-2">
            <GraduationCap
              size={48}
              strokeWidth={3}
              className="rounded-full text-white bg-blue-400 p-1 size-20"
            />
            <h1 className="font-bold font-mono text-xl mt-3">
              Entry-Level Jobs
            </h1>
            <p className="text-gray-400 text-md font-mono mt-3">
              2,345 jobs available
            </p>
            <button className="p-2 border hover:bg-blue-600 hover:text-white rounded-xl mt-3 shadow-md">
              View Jobs
            </button>
          </div>
          <div className="flex flex-col items-center h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-2xl p-2 ">
            <Clock
              size={48}
              strokeWidth={3}
              className="rounded-full text-white bg-blue-400 p-1 size-20"
            />
            <h1 className="font-bold font-mono text-xl mt-3">Part-Time Jobs</h1>
            <p className="text-gray-400 text-md font-mono mt-3">
              3,456 jobs available
            </p>
            <button className="p-2 border hover:bg-blue-600 hover:text-white rounded-xl mt-3 shadow-md">
              View Jobs
            </button>
          </div>
          <div className="flex flex-col items-center h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-2xl p-2 ">
            <Medal
              size={48}
              strokeWidth={3}
              className="rounded-full text-white bg-blue-400 p-1 size-20"
            />
            <h1 className="font-bold font-mono text-xl mt-3">Ex-Servicemen</h1>
            <p className="text-gray-400 text-md font-mono mt-3">
              3567 jobs available
            </p>
            <button className="p-2 border hover:bg-blue-600 hover:text-white rounded-xl mt-3 shadow-md">
              View Jobs
            </button>
          </div>
          <div className="flex flex-col items-center h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-2xl p-2 ">
            <User
              size={48}
              strokeWidth={3}
              className="rounded-full text-white bg-blue-400 p-1 size-20"
            />
            <h1 className="font-bold font-mono text-xl mt-3">
              Professional Jobs
            </h1>
            <p className="text-gray-400 text-md font-mono mt-3">
              4,567 jobs available
            </p>
            <button className="p-2 border hover:bg-blue-600 hover:text-white rounded-xl mt-3 shadow-md">
              View Jobs
            </button>
          </div>
          <div className="flex flex-col items-center h-[250px] w-full max-w-[300px] mx-auto rounded-xl shadow-2xl p-2 ">
            <Wrench
              size={48}
              strokeWidth={3}
              className="rounded-full text-white bg-blue-400 p-1 size-20"
            />
            <h1 className="font-bold font-mono text-xl mt-3">Skilled Labor</h1>
            <p className="text-gray-400 text-md font-mono mt-3">
              3,789 jobs available
            </p>
            <button className="p-2 border hover:bg-blue-600 hover:text-white rounded-xl mt-3 shadow-md">
              View Jobs
            </button>
          </div>
        </div>
      </div>

      {/* footer Section */}
      <footer className="bg-[rgb(var(--background3))] flex flex-col md:flex-row gap-6 p-5 ">
        <div className="w-full md:w-[450px] p-2">
          <img
            src={Logo}
            alt=""
            className="rounded-4xl h-[150px] w-[250px] p-2 mx-auto md:mx-0"
          />
          <p className="font-mono text-xl text-gray-300 p-2 mt-3 text-center md:text-left">
            Connecting local talent with nearby opportunities
          </p>
          <div className="flex gap-6 text-white p-2 mt-3 justify-center md:justify-start">
            <Facebook size={24} strokeWidth={1} />
            <Linkedin size={24} strokeWidth={1} />
            <Twitter size={24} strokeWidth={1} />
            <Instagram size={24} strokeWidth={1} />
          </div>
        </div>

        {/* quick Links 1 */}
        <div className="hidden md:block w-full md:w-[220px] p-2">
          <div className="font-mono text-white mt-6 flex flex-col items-center md:items-start">
            <h1 className="mb-6 text-3xl font-extrabold">Quick Links</h1>
            <div className="flex flex-col gap-2">
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Home Jobs
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Regular Jobs
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                About Us
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* quick Links 2 */}
        <div className="hidden md:block w-full md:w-[220px] p-2">
          <div className="font-mono text-white mt-6 flex flex-col items-center md:items-start">
            <h1 className="mb-6 text-3xl font-extrabold">Categories</h1>
            <div className="flex flex-col gap-2">
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Domestic Jobs
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Entry-Level Jobs
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Part-Time Jobs
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Professional Jobs
              </Link>
            </div>
          </div>
        </div>

        {/* quick Links 3 */}
        <div className="hidden md:block w-full md:w-[220px] p-2">
          <div className="font-mono text-white mt-6 flex flex-col items-center md:items-start">
            <h1 className="mb-6 text-3xl font-extrabold">Support</h1>
            <div className="flex flex-col gap-2">
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Help Center
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Privacy Policy
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                Terms & Conditions
              </Link>
              <Link className="hover:text-blue-600 transition-all ease-in-out duration-300 text-xl">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[rgb(var(--background3))]">
        <hr className="border-t-gray-300 border" />
        <div className="p-3 flex justify-center items-center text-white">
          <p className="flex gap-2 font-mono">
            <Copyright size={24} strokeWidth={1} /> 2025 Chota Jobs. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
