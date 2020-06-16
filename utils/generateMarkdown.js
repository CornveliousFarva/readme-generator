// Generste Project URL
function generateProjectUrl(github, title){
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
}

//Render the license badge
function renderLicenseBadge(license, github, title){
    if(license !== "None"){
        return `[![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
    }
    return ''
}

// Render the license selection
function renderLicenseSelection(licence){
    if(license !== "None"){
        return(
          `## License
          
          This project is licensed under the ${license} license`  
        )
    }
    return ''
}

// Generate Markdown and return question responses
function generateMarkdown(data){
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license, data.github, data.title)}
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    
    * [Installation](#installation)
    
    * [Usage](#usage)
    
    * [License](#license)
    
    * [Contributing](#contributing)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
    ## Installation
    
    To install necessary dependencies, run the following command:
    
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage
    
    ${data.usage}
    
    ${renderLicenseSelection(data.license)}
    
    ## Contributing
    
    ${data.contributing}
    
    ## Tests 
    
    To run tests, run the following command:
    
    \`\`\`
    ${data.test}
    \`\`\`

    ## Questions
    
    <img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width:"30" />
    
    If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}
    
    `;
}

export default generateMarkdown;

