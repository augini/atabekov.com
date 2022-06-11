export default async function handler(_, res) {
  const userResponse = await fetch(
    `https://api.github.com/users/augini?client_id=${process.env.OAUTH_CLIENT_KEY} &client_secret=${process.env.OAUTH_CLIENT_SECRET}`
  );
  const userReposResponse = await fetch(
    'https://api.github.com/users/augini/repos?per_page=100?client_id=${process.env.OAUTH_CLIENT_KEY} &client_secret=${process.env.OAUTH_CLIENT_SECRET}'
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const mine = repositories?.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    followers: user.followers,
    stars
  });
}
