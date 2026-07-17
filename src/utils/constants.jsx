import { AiFillHome } from "react-icons/ai";
import {
  MdHistory,
  MdWatchLater,
  MdOutlineWhatshot,
  MdOutlineSportsEsports,
  MdOutlineSettings,
  MdOutlineFlag,
  MdHelpOutline,
  MdOutlineFeedback,
} from "react-icons/md";
import { FaThumbsUp, FaMusic, FaTrophy } from "react-icons/fa";
import { RiPlayListLine } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";
import { PiRadioButtonBold } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

export const collapsedSidebarItems = [
  { icon: <AiFillHome />, name: "Home", path: "/" },
  { icon: <BsLightningCharge />, name: "Shorts", path: "/" },
  { icon: <BiSolidVideos />, name: "Subscriptions", path: "/" },
  { icon: <FaRegCircleUser />, name: "You", path: "/" },
];

export const expandedSidebarItems = [
  {
    title: null,
    items: [
      { icon: <AiFillHome />, name: "Home", path: "/" },
      { icon: <BsLightningCharge />, name: "Shorts", path: "/shorts" },
      { icon: <BiSolidVideos />, name: "Subscriptions", path: "/subscribes" },
    ],
  },
  {
    title: "You",
    items: [
      { icon: <MdHistory />, name: "History", path: "/history" },
      { icon: <RiPlayListLine />, name: "Playlists", path: "/play-list" },
      { icon: <MdWatchLater />, name: "Watch Later", path: "/watch-later" },
      { icon: <FaThumbsUp />, name: "Liked Videos", path: "/likes" },
    ],
  },
  {
    title: "Explore",
    items: [
      {
        icon: <MdOutlineWhatshot />,
        name: "Trending",
        path: "/category/trending",
      },
      { icon: <FaMusic />, name: "Music", path: "/category/music" },
      { icon: <PiRadioButtonBold />, name: "Live", path: "/category/live" },
      {
        icon: <MdOutlineSportsEsports />,
        name: "Gaming",
        path: "/category/gaming",
      },
      { icon: <FaTrophy />, name: "Sports", path: "/category/sport" },
    ],
  },
  {
    title: "More from YouTube",
    items: [
      {
        icon: <BiSolidVideos className="text-red-500" />,
        name: "YouTube Premium",
        path: "/premium",
      },
      {
        icon: <FaMusic className="text-red-500" />,
        name: "YouTube Music",
        path: "/music",
      },
      {
        icon: <BiSolidVideos className="text-red-500" />,
        name: "YouTube Kids",
        path: "/kids",
      },
    ],
  },
  {
    title: null,
    items: [
      { icon: <MdOutlineSettings />, name: "Settings", path: "/settings" },
      { icon: <MdOutlineFlag />, name: "Report History", path: "/content" },
      { icon: <MdHelpOutline />, name: "Help", path: "/help" },
      { icon: <MdOutlineFeedback />, name: "Send Feedback", path: "/feedback" },
    ],
  },
];
