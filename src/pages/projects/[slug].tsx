import * as React from 'react';
import InternalLink from 'components/Link/Internal';
import { LayoutProject } from 'components/Layout/Project';
import { getProjects, getProjectBySlug } from 'utils/api';
import markdownToHtml from 'utils/markdownToHtml';

interface Params {
  params: {
    slug: string;
  };
}

export const getStaticPaths = async () => {
  let paths: Params[] = [];
  try {
    const projects = await getProjects();
    paths = projects.map((project) => ({
      params: { slug: `${project.slug}` },
    }));
  } catch (e) {
    console.error(e);
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  let project = {};
  let projectDescription;

  try {
    const data = await getProjectBySlug(params.slug);
    if (data) {
      projectDescription = await markdownToHtml(data.description);
      console.log(projectDescription.value);
      project = data;
      projectDescription = projectDescription.value;
    }
  } catch (e) {
    console.error(e);
  }

  return {
    props: { project, projectDescription },
  };
};

interface IProjectProps {
  project: any;
  projectDescription: any;
}

const styles = {
  main: 'justify-center items-center',
  title: 'leading-[1.15] text-[4rem] text-center mt-8 md:mt-0',
  titleLink:
    'no-underline text-blue-500 text-center hover:underline focus:underline active:underline',
  description: 'mt-4 px-8 text-center text-2xl leading-normal',
  code: 'bg-gray-100 rounded-[5px] p-3 text-[1.1rem] font-mono',
  grid: 'flex flex-wrap items-center justify-around max-w-4xl mt-8 sm:w-full',
  card: 'p-8 md:w-[60rem] text-center',
  cardSm: 'p-8 md:w-[30rem] text-center',
  cardTitle: 'text-xl font-bold',
  cardText: 'mt-4 text-lg',
  columnLayout: 'flex flex-col space-y-6 items-center',
  image: 'inline-block',
  banner: 'w-full md:w-[50rem] lg:w-[70rem]',
};

export const Project: React.FunctionComponent<IProjectProps> = ({
  project,
  projectDescription,
}) => {
  return (
    <LayoutProject className={styles.main}>
      <div className="flex flex-col items-center space-y-2">
        <div className={styles.banner}>
          <img
            alt={project.heroBanner ? project.heroBanner.url : 'no image'}
            src={project.heroBanner ? project.heroBanner.url : '/'}
            height="auto"
            className={styles.image}
          />
        </div>
        <div className={styles.title}>{`${project.title}`}</div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: projectDescription }}
        ></div>
        <InternalLink href={`/projects`}>Go back</InternalLink>
        <div id="artworkGrid" className={styles.columnLayout}>
          {project.artworkCollection.map((artwork) => (
            <div
              key={artwork.id}
              className={
                artwork.display == 'inset' ? styles.cardSm : styles.card
              }
            >
              <img
                alt={artwork.asset ? artwork.asset.url : 'no image'}
                src={artwork.asset ? artwork.asset.url : '/'}
                width="1000px"
                height="auto"
                className={styles.image}
              />
              <p>{artwork.title}</p>
              <p>{artwork.description}</p>
            </div>
          ))}
        </div>
      </div>
    </LayoutProject>
  );
};

export default Project;
