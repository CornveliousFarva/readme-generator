function generateProjectUrl(github, title){
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title){
    if(license !== "None"){
        return `[![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
    }
    return ''
}

function renderLicenseSelection(licence){
    if(license !== "None"){
        return(
          `## License
          
          This project is licensed under the ${license} license`  
        )
    }
    return ''
}

function generateMarkdown(data){
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license, data.github, data.title)}
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    
    *[Installation](#installation)`
}

