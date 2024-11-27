export const fetchGithubRepo = async (username, repoName) => {
  const url = `https://api.github.com/repos/${username}/${repoName}`;
  
  try {
    const response = await fetch(url);
    const repos = await response.json(); 

    console.log(repos);

    const languages = await((await fetch(repos.languages_url)).json());

    return {description: repos.description, reponame: repos.name, url:repos.svn_url, languages: languages};
  } catch (e) {
    console.error("Error:", e);
  }
}
