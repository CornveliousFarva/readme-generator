function generateProjectUrl(github, title){
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renserLicenseBadge(license, github, title){
    if(license !== "None"){
        return `[![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
    }
    return ''
}

