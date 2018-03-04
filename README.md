# Twitter Live Wall
----

Deployed at [Heroku](https://gentle-lowlands-95248.herokuapp.com/)


#### Known issues:
* Unfinished client side unit tests
* Problem with displaying images from chrome browser on heroku server
(works on Firefox and/or local server)


----

### Project structure
Project contains both server source files and client. Both has their own dependencies with *pacakge.json* file. All client side source code is in **client** directory.

### To launch locally
1. Clone repo
2. execute to install all dependencies (server and client) 
```bash
$ npm run install-all
```
3. create **.env** file in root and add all necessary Twitter API keys (used at */src/twitterClient.ts*)
4. execute to start development in watch mode
```bash
$ npm run dev
```
