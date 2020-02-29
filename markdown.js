function generateMarkdown(data) {
    return `
  # ${data.title}
  [![ForTheBadge 60percent-js](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](http://ForTheBadge.com)
  [![ForTheBadge madeWith-js](https://forthebadge.com/images/badges/made-with-javascript.svg)](http://ForTheBadge.com)
  [![ForTheBadge winter-js](https://forthebadge.com/images/badges/winter-is-coming.svg)](http://ForTheBadge.com)
  `;
  }
  
  module.exports = generateMarkdown;