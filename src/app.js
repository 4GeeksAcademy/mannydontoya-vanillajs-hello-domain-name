/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".net", ".com", ".org", ".gov"];
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          document.querySelector("#domainGen").innerHTML +=
            "<li><h1>" + pronoun + adj + noun + domain + "</h1></li>";
        }
      }
    }
  }

  console.log();
};
