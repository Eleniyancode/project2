import React, { useState, useEffect } from "react";
import { Octokit } from "octokit";
import "./App.css";
import Repos from './components/Repos'
import Pagination from "./components/Pagination";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(3);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      // Octokit.js
      // https://github.com/octokit/core.js#readme
      const octokit = new Octokit({
        auth: "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",
      });

      const result = await octokit.request("GET /users/Eleniyancode/repos", {
        username: "Eleniyancode",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      setRepos(result.data);
      setLoading(false);
      // console.log(result);
    };

    fetchRepos();
  }, []);

  // console.log(repos)

  //Get current repo
  const indexOfLastRepos = currentpage * reposPerPage;
  const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepos, indexOfLastRepos);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className="mt-5">
        <h1 className="mb-3">My Repositories</h1>
        <Repos repos={currentRepos} loading={loading}/>
        <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate}/>

      </div>
    </>
  );
}

export default App;
