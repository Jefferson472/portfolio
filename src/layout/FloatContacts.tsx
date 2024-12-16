import mailIcon from '../assets/svg/mail.svg';
import mailHoverIcon from '../assets/svg/mail-hover.svg';
import whatsappIcon from '../assets/svg/whatsapp.svg';
import whatsappIconHover from '../assets/svg/whatsapp-hover.svg';
import githubIcon from '../assets/svg/github.svg';
import githubIconHover from '../assets/svg/github-hover.svg';
import linkedinIcon from '../assets/svg/linkedin.svg';
import linkedinIconHover from '../assets/svg/linkedin-hover.svg';
import LinkIcons from '../components/LinkIcons';

export default function FloatContacts() {
  return (
    <nav className="
      fixed h-screen
      bottom-0
      w-8      
    ">
      <div className="
        hidden
        sm:flex items-end
        h-full
      ">
        <div className="flex flex-col gap-3 items-center">
          <span className="bg-lightGray h-20 w-[0.15rem]"></span>
          <ul className="flex flex-col gap-3 mb-3">
            <li><LinkIcons url={"https://bit.ly/3CskRYQ"} icon={linkedinIcon} iconHover={linkedinIconHover} /></li>
            <li><LinkIcons url={"https://bit.ly/4fqxu54"} icon={githubIcon} iconHover={githubIconHover} /></li>
            <li><LinkIcons url={"https://bit.ly/3AvuDsC"} icon={whatsappIcon} iconHover={whatsappIconHover} /></li>
            <li><LinkIcons url={"mailto:jefferson472@hotmail.com"} icon={mailIcon} iconHover={mailHoverIcon} /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}