import * as React from 'react';
import InternalLink from 'components/Link/Internal';
import { LayoutProject } from 'components/Layout/Project';

const token = process.env.REACT_APP_STRAPI_TOKEN;
const domain = process.env.REACT_APP_STRAPI_URL;

export const getStaticProps = async () => {
  let projects = [];
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await fetch(domain + '/api/art-projects', config);
    const data = await res.json();
    console.log(data);
    projects = data.data;
  } catch (e) {
    console.error(e);
  }
  return {
    props: { projects },
  };
};

interface IProjectsProps {
  projects: any[];
}

const styles = {
  main: 'justify-center items-center',
  title: 'leading-[1.15] text-[4rem] text-center mt-8 md:mt-0',
  titleLink:
    'no-underline text-blue-500 text-center hover:underline focus:underline active:underline',
  description: 'mt-4 px-8 text-center text-2xl leading-normal',
  code: 'bg-gray-100 rounded-[5px] p-3 text-[1.1rem] font-mono',
  grid: 'flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full',
  card: 'p-6 mt-6 md:w-96 text-left border rounded-xl transition ease-[2s] hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:border-blue-600 focus:border-blue-600 active:border-blue-600',
  cardTitle: 'text-xl font-bold',
  cardText: 'mt-4 text-lg',
};

export const Projects: React.FunctionComponent<IProjectsProps> = ({
  projects,
}) => {
  return (
    <LayoutProject className={styles.main}>
      <div className="flex flex-col items-center space-y-2">
        <div>Projects are here!</div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <InternalLink
              key={project.id}
              href={`/projects/${project.slug}`}
              className={styles.card}
            >
              <h3>{project.title} &rarr;</h3>
            </InternalLink>
          ))}
        </div>
      </div>
    </LayoutProject>
  );
};

export default Projects;
