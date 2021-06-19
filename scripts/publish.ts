import * as ghpages from 'gh-pages'

ghpages.publish('public', {
  branch: 'master',
  repo: 'https://github.com/RedPeanut/RedPeanut.github.io.git',
  dotfiles: true,
})
