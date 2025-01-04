import Tag from "./Tag";
import LinkIcons from '../components/LinkIcons';
import githubIcon from '../assets/svg/github.svg';
import githubIconHover from '../assets/svg/github-hover.svg';
import wwwIcon from '../assets/svg/www.svg';
import wwwIconHover from '../assets/svg/www-hover.svg';

interface IProject {
  id: number;
  name: string;
  short_description: string;
  image: string | null;
  tags: Array<string>;
  links: {
    github: string | null;
    website: string | null;
  }
};

export default function Card({ project }: { project: IProject }) {
  const renderTags = (tags: string[]) => {
    const MAX_CARACT = 15;
    let tagCaractLen = 0;
    const renderedTags = [];

    for (const tag of tags) {
      tagCaractLen += tag.length;

      if (tagCaractLen >= MAX_CARACT) {
        renderedTags.push(Tag(`+${tags.length - renderedTags.length}`));
        break;
      }

      renderedTags.push(Tag(tag));
    }

    return renderedTags;
  };

  return (
    <div className="flex flex-col justify-between max-w-80 rounded overflow-hidden shadow-sm shadow-accent bg-primary">
      <div className="w-[320px] h-[213px] overflow-hidden object-fill">
        <img className="w-full h-full" src={project.image ? project.image : 'https://raw.githubusercontent.com/Jefferson472/bucket/refs/heads/main/portfolio/generic-image.webp'} alt=""/>
      </div>
      <div className="px-4 py-2">
        <div className="flex flex-col">
          <h2 className="text-start mb-2">{project.name}</h2>
          <p className="text-start text-small">
            {project.short_description}
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-[90%] border-t-[0.1px]"></div>
      </div>

      <div className="grid grid-cols-4 gap-3 px-4 py-1">
        <div className="col-span-3 content-center">
          <div className="flex gap-1">
            {renderTags(project.tags)}
          </div>
        </div>
        <div className="col-span-1 flex justify-end gap-1 w-[48px] min-w-[24px] h-8 items-center">
          {project.links.github && (
            <div className="flex-shrink-0 h-[22px]">
              <LinkIcons url={project.links.github} icon={githubIcon} iconHover={githubIconHover} />
            </div>
          )}
          {project.links.website && (
            <div className="flex-shrink-0 h-[22px]">
              <LinkIcons url={project.links.website} icon={wwwIcon} iconHover={wwwIconHover} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}