<img align="left" width="190" src="https://cdn.rawgit.com/TripHub/App/5034f827/images/icon.svg" />

# TripHub

[![Build Status](https://travis-ci.org/TripHub/App.svg?branch=master)](https://travis-ci.org/TripHub/App)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

🛠 *This project is in the early stages of development*

**Welcome to TripHub, a unified place for groups to organise trips!**

I am building TripHub, partly because I think it's a cool idea and I can't find anything else like it, and partly as a learning exercise for developing scalable and performant Single Page Applications (SPA's) by utilising awesome techniques like bundle splitting and atomic CSS.

**Below is a running log of some of the packages I'm using, with my thoughts/notes** 📝

## [Redux]()

*Global App State*

[This](https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1) article on how
[Twitter Lite](https://mobile.twitter.com) have structured
their redux store is really interesting, and definitely an influencer in how the redux state is designed in TripHub.

## [Create React App](https://github.com/facebookincubator/create-react-app)

*Bootstrapping*

## [Styletron](https://github.com/rtsao/styletron)

*CSS-in-JS*

I was drawn to this library because I like how it handles CSS class names. Styletron converts individual CSS rules into their own atomic classes, and then combines those classes to create the desired styles. In doing this, it hopes to limit CSS size, as future rules are likely to simply be a combination of pre-existing classes.

A great explaination on how Styletron works along with it's limitations can be found [here](https://ryantsao.com/blog/virtual-css-with-styletron).
