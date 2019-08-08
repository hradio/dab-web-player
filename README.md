# Attention! Beta phase.

At the moment there are **still considerable performance problems**.  These problems will be fixed in the coming months. Also the** API could change several times.**

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

## API
### Methods

`ediPlayer.start([url])` : starts streaming data and Audiodecoding, when you call the function for the first time, an url must be passed. after that, this is no longer necessary. for compatibility reasons, `startStream()` also exists.

`ediPlayer.stop()` : stops audio decoding and streaming data 

### Properties


`ediPlayer.state` :represents the current player state. it can be `running` or `stopped`.

`ediPlayer.audioCtx`: this lib uses in the background the web Audio API. to increase this control possibilities, this property provides the corresponding baseAudioContext.



### Events

you can register for events and define corresponding functions for them.

`ediPlayer.addEventListener(type, (arg) => {console.log(arg)})`

`ediPlayer.removeEventListener(type, function)`

`type` can be one of the flying events.

<table>
<tr><th> event </th><th> description </th><th> argument </th><tr>
<tr><td> sls </td><td> Slide Show Service - DAB images </td><td>
<pre>
example argument:
{
  "contentName": "f851.jpg",
  "clickThroughUrl": "",
  "contentSubType": 1,
  "triggerTime": "now",
  "categoryId": 0,
  "categoryTitle": "",
  "isCategorized": false,
  "slideId": 0,
  "url": "blob:http://localhost:9000/99465a13-3c50-4768-a388-7c4586000391"
}
</pre>
</td></tr>
<tr><td> dls </td><td> Dynamic label Service - Text </td><td>

   
<pre>
example argument:
{
    "dlsObject": {
        "dynamicLabel": "Lana Del Rey - Video Games",
        "charset": 0,
        "itemToggle": true,
        "itemRunning": true,
        "dlPlusTags": {}
    },
    "dls": "Lana Del Rey - Video Games",
    "dlsp": {
        "ITEM_TITLE": "Video Games",
        "ITEM_ARTIST": "Lana Del Rey"
    }
}
</pre>


</td></tr>



<tr><td> stateChange </td><td> info about edi player state </td><td>

   
could be `running` or `stopped`


</td></tr>


<tr><td> serviceMetaData </td><td> not yet implemented - info about the current service </td><td>

   
 not yet implemented 

</td></tr>



</td></tr>
</table>
