
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

export const PLATFORM = [
    {
        id: "linkedin",
        name: "LinkedIn",
        icon: FaLinkedin,
    },
    {
        id: "twitter",
        name: "X (Twitter)",
        icon: FaXTwitter,
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: FaInstagram,
    },
    {
        id: "youtube",
        name: "YouTube",
        icon: FaYoutube,
    },
    {
        id: "tiktok",
        name: "TikTok",
        icon: FaTiktok,
    },
];

export const dummyAccountsData = [
    {
        id: "1",
        platform: "linkedin",
        username: "gobindadey",
        displayName: "Gobinda Gagan Dey",
        profileImage: "https://i.pravatar.cc/150?img=1",
        followers: 1250,
        connected: false,
        status: "connected",
        createdAt: "2026-07-15",
    },
    {
        id: "2",
        platform: "twitter",
        username: "gobindadev",
        displayName: "Gobinda",
        profileImage: "https://i.pravatar.cc/150?img=2",
        followers: 842,
        status: "connected",

        verified: true,
        createdAt: "2026-07-14",
    },
    {
        id: "3",
        platform: "instagram",
        username: "lifeaftercollege",
        displayName: "Life After College",
        profileImage: "https://i.pravatar.cc/150?img=3",
        followers: 5680,
        connected: true,
        verified: false,
        createdAt: "2026-07-13",
    },
    {
        id: "4",
        platform: "facebook",
        username: "gobinda.gagan",
        displayName: "Gobinda Gagan",
        profileImage: "https://i.pravatar.cc/150?img=4",
        followers: 2140,
        connected: true,
        verified: false,
        createdAt: "2026-07-12",
    },
    {
        id: "5",
        platform: "youtube",
        username: "@LifeAfterCollege",
        displayName: "Life After College",
        profileImage: "https://i.pravatar.cc/150?img=5",
        subscribers: 15200,
        connected: true,
        verified: true,
        createdAt: "2026-07-11",
    },
    {
        id: "6",
        platform: "tiktok",
        username: "@gobindadev",
        displayName: "Gobinda Dev",
        profileImage: "https://i.pravatar.cc/150?img=6",
        followers: 9700,
        connected: false,
        verified: false,
        createdAt: "2026-07-10",
    },
];