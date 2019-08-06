# ediPlayer simple api

this repo contains only the compiled files that can be directly integrated into your browser. The whole toolchain to create the **ediStreaming lib** still consists of too many manual steps, but will also be published here or in its own repo.

In order to understand more precisely which components the Lib is composed of, a look can be taken at the following system overview
![drawing](https://docs.google.com/drawings/d/1iyQhElNmXxd967e9s1axMzjzui7aLsuNBgxVvDdP2AI/export/png)

## Getting Started
to understand how to use the **ediStreaming lib**, look at the example in [app.js](app.js).


to run the demo you can check out this repo and run it. however you need a webserver to do this. 


you can also have a look at [http://mpattest.irt.de/hradio/simpleApi](http://mpattest.irt.de/hradio/simpleApi). it runs this repo.

add [ediPlayerLib.js](ediPlayerLib.js) to your dom. this file will also load [irtdab.js](irtdab.js) and [irtdab.worker.js](irtdab.worker.js). make sure all files are part of your project.


the minimal example contains materialize files. *materialize* is *not* a dependecy of the ediPlayer library.
