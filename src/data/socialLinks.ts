
export type SocialLink = {
  id: number;
  href: string;
  color: string;
  icon: "facebook" | "twitter" | "youtube" | "linkedin" | "googleIcon";
};

export const socialLinks: SocialLink[] = [
  { id: 1, href: "#", color: "text-[#2159ff]", icon: "facebook" },
  { id: 2, href: "#", color: "text-black", icon: "twitter" },
  { id: 3, href: "#", color: "text-[#e70202]", icon: "youtube" },
  { id: 4, href: "#", color: "text-[#2159ff]", icon: "linkedin" },
  { id: 5, href: "#", color: "text-black", icon: "googleIcon" },
];
