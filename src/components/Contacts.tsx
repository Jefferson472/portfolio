import mailIcon from '../assets/svg/mail.svg';
import mailHoverIcon from '../assets/svg/mail-hover.svg';
import whatsappIcon from '../assets/svg/whatsapp.svg';
import whatsappIconHover from '../assets/svg/whatsapp-hover.svg';
import githubIcon from '../assets/svg/github.svg';
import githubIconHover from '../assets/svg/github-hover.svg';
import linkedinIcon from '../assets/svg/linkedin.svg';
import linkedinIconHover from '../assets/svg/linkedin-hover.svg';
import LinkIcons from '../components/LinkIcons';


export default function Contacts() {
  return (
    <ul className="flex sm:flex-col gap-3 mb-3 h-full">
      <li><LinkIcons url={"https://bit.ly/3CskRYQ"} icon={linkedinIcon} iconHover={linkedinIconHover} /></li>
      <li><LinkIcons url={"https://bit.ly/4fqxu54"} icon={githubIcon} iconHover={githubIconHover} /></li>
      <li><LinkIcons url={"https://bit.ly/3AvuDsC"} icon={whatsappIcon} iconHover={whatsappIconHover} /></li>
      <li><LinkIcons url={"mailto:jefferson472@hotmail.com"} icon={mailIcon} iconHover={mailHoverIcon} /></li>
    </ul>
  )
}
