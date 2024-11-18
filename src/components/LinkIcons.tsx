import { useState } from 'react';

interface ILinkIcons {
  url: string,
  icon: string,
  iconHover: string
}

export default function LinkIcons({url, icon, iconHover}: ILinkIcons) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? iconHover : icon}
        className="w-full h-full"
      />
    </a>
  )
}