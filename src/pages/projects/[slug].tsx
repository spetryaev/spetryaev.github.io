import * as React from 'react';
import InternalLink from 'components/Link/Internal';
import { LayoutProject } from 'components/Layout/Project';
import Image from 'next/image';

interface Params {
  params: {
    slug: string;
  };
}
const token = process.env.REACT_APP_STRAPI_TOKEN;
const domain = process.env.REACT_APP_STRAPI_URL;

export const getStaticPaths = async () => {
  let paths: Params[] = [];
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await fetch(domain + '/api/art-projects', config);
    const projects = await res.json();
    paths = projects.data.map((project) => ({
      params: { slug: `${project.slug}` },
    }));
    console.log(paths);
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

  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await fetch(
      domain +
        `/api/art-projects?filters[slug]=${params.slug}&populate[heroBanner][populate][0]=%2A&populate[artworkCollection][populate][1]=asset`,
      config
    );
    const data = await res.json();
    console.log(data.data[0].artworkCollection);
    if (data.data.length > 0) {
      project = data.data[0];
    }
  } catch (e) {
    console.error(e);
  }

  return {
    props: { project },
  };
};

interface IProjectProps {
  project: any;
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

export const Project: React.FunctionComponent<IProjectProps> = ({
  project,
}) => {
  return (
    <LayoutProject className={styles.main}>
      <div className="flex flex-col items-center space-y-2">
        <div className={styles.title}>{`${project.title}`}</div>
        <div className={styles.description}>{`${project.description}`}</div>
        <InternalLink href={`/projects`}>Go back</InternalLink>
        <div id="artworkGrid" className={styles.grid}>
          {project.artworkCollection.map((artwork) => (
            <div key={artwork.id} className={styles.card}>
              <p>{artwork.title}</p>
              <img
                alt={artwork.asset ? artwork.asset.url : 'no image'}
                src={artwork.asset ? artwork.asset.url : '/'}
                width="100px"
                height="100px"
              />
            </div>
          ))}
        </div>
      </div>
    </LayoutProject>
  );
};

export default Project;
