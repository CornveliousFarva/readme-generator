function generateProjectUrl(github, title){
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
}