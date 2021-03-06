'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Arvind Narayan'),
  handle: chalk.white('thearvindnarayan'),
  work: chalk.white('Fullstack developer, UI UX Designer otherwise'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('ImArvindNarayan'),
  dribbble: chalk.gray('https://dribbble.com/') + chalk.cyan('ImArvind'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~thearvindnarayan'),
  github: chalk.gray('https://github.com/') + chalk.green('thearvindnarayan'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('thearvindnarayan'),
  web: chalk.cyan('http://imarvind.uphero.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('thearvindnarayan'),
  labelDribbble: chalk.red('   Dribbble:'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const dribbbling = `${data.labelDribbble}  ${data.dribbble}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               dribbbling + newline + // data.labelWork + data.work
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               newline + `              Stay Hungry. Stay Foolish 🍎` + newline
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
