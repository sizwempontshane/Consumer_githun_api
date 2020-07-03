const fetch = require("../node_modules/node-fetch");

function getRepoData(repoName, startDate, endDate) {
  let 	starting_date = new Date(startDate);
  let ending_date = new Date(endDate);
  fetch(`https://api.github.com/repos/Azure/${repoName}/pulls`)
    .then((response) => response.json())
    .then((data) => {
      pullRequests = 0;
      for (pullRequests in data) {
        if (
          new Date(data[pullRequests].created_at) >= 	starting_date &&
          new Date(data[pullRequests].created_at) <= ending_date &&
          new Date(data[pullRequests].updated_at) >= 	starting_date &&
          new Date(data[pullRequests].updated_at) <= ending_date
        ) {
          console.log(data[pullRequests]);
        }

        pullRequests++;   
      }
    })
    .catch((error) => console.error(error));
}
getRepoData("azure-quickstart-templates", "2020-04-18", "2020-06-24");
