export const fetchGithubRepo = async (username, repoName) => {
  const url = `https://api.github.com/repos/${username}/${repoName}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const repos = await response.json(); 
    return {description: repos.description, reponame: repos.name};
  } catch (e) {
    console.error("Error:", e);
  }
}
