const token = process.env.REACT_APP_STRAPI_TOKEN;
const domain = process.env.REACT_APP_STRAPI_URL;

async function fetchAPI(url: string) {
  console.log('Sending GET Request to: ' + url);
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(
    'Sending GET Request to: ' + url + ' => \x1b[33m' + res.status + '\x1b[0m'
  );
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getProjects(): Promise<any[]> {
  return fetchAPI(domain + '/api/art-projects');
}

export async function getProjectBySlug(slug: string): Promise<any> {
  const data = await fetchAPI(
    domain +
      `/api/art-projects?filters[slug]=${slug}&populate[heroBanner][populate][0]=%2A&populate[artworkCollection][populate][1]=asset`
  );
  return data && data.length ? data[0] : null;
}
