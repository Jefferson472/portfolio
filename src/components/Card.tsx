import Tag from "./Tag";
import LinkIcons from '../components/LinkIcons';
import githubIcon from '../assets/svg/github.svg';
import githubIconHover from '../assets/svg/github-hover.svg';
import wwwIcon from '../assets/svg/www.svg';
import wwwIconHover from '../assets/svg/www-hover.svg';

interface ITag {
  id: number;
  name: string;
}

export default function Card() {
  const tags: ITag[] = [
    { id: 1, name: "Python" },
    { id: 2, name: "React" },
    { id: 4, name: "HTML" },
    { id: 3, name: "CSS" },
    { id: 3, name: "CSS" },
    { id: 3, name: "CSS" },
    { id: 3, name: "CSS" },
  ];

  const renderTags = (tags: ITag[]) => {
    const MAX_CARACT = 15;
    let tagCaractLen = 0;
    const renderedTags = [];

    for (const tag of tags) {
      tagCaractLen += tag.name.length;

      if (tagCaractLen >= MAX_CARACT) {
        renderedTags.push(Tag(`+${tags.length - renderedTags.length}`));
        break;
      }

      renderedTags.push(Tag(tag.name));
    }

    return renderedTags;
  };

  return (
    <div className="max-w-80 rounded overflow-hidden shadow-sm shadow-accent bg-primary">
      <img src="src\assets\img\generic-image.webp" alt="" width={320} height={213}/>
      <div className="px-4 py-2">
        <div className="flex flex-col">
          <h2 className="text-start mb-2">Nome do Projeto</h2>
          <p className="text-start text-small">
            Esta é uma breve descrição do conteúdo do card. Você pode colocar qualquer texto aqui para descrever o que o card representa.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-[90%] border-t-[0.1px]"></div>
      </div>

      <div className="grid grid-cols-4 gap-3 px-4 py-1">
        <div className="col-span-3 content-center">
          <div className="flex gap-1">
            {renderTags(tags)}
          </div>
        </div>
        <div className="col-span-1 flex justify-end gap-1 w-[48px] min-w-[24px] h-8 items-center">
          <LinkIcons url={""} icon={githubIcon} iconHover={githubIconHover} />
          <LinkIcons url={""} icon={wwwIcon} iconHover={wwwIconHover} />
        </div>
      </div>
    </div>
  )
}