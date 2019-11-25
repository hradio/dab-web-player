# Attention! Beta phase.

At the moment there are still **considerable performance problems**.  These problems will be fixed in the coming months. Also the **API could change several times.**

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

#### `ediPlayer.start([{url:'http://example.com/ediStream'}])`
starts streaming data and Audiodecoding, when you call the function for the first time, an url must be passed. after that, this is no longer necessary. for compatibility reasons, `startStream()` also exists.

#### `ediPlayer.stop()`
stops audio decoding and streaming data 

#### `ediPlayer.seek(ms)`
if timeshift is supported by the EDI server, the EDI stream can be set to a time relative to now in milliseconds. <code>ediPlayer.seek(3600e3)</code> sets the edistream an hour ago
#### `ediPlayer.seekUts(uts)`
the same as <code>ediPlayer.seek()</code> only that the time is specified as absolute Unix time in Milliseconds.
#### `ediPlayer.toggleId(id)`
the same as <code>ediPlayer.seek()</code> only that the jump marker is passed over an ID to jump to defined positions. these positions come from the items-array that is available through the <code>items</code>event




### Properties


#### `ediPlayer.state`
represents the current player state. it can be `running` or `stopped`.

#### `ediPlayer.audioCtx`
this lib uses in the background the [web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). To increase control possibilities, this property provides the corresponding [baseAudioContext](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext).



### Events

you can register for events and define corresponding functions for them.

`ediPlayer.addEventListener(type, (arg) => {console.log(arg)})`

`ediPlayer.removeEventListener(type, function)`

`type` can be one of the following events.

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



<tr>
    <td> stateChange </td>
    <td> info about edi player state </td>
    <td>could be <code>running</code> or <code>stopped</code></td>

</tr>
<tr>
    <td> missingSharedArrayBuffer </td>
    <td> not every browser has <code>SharedArrayBuffer</code> activated by default. dab encoding will not work without <code>SharedArrayBuffer</code>.  </td>
    <td>
    
This event has no event-object as argument passed to the registered function.

A description of SharedArrayBuffer follows.

The <code>SharedArrayBuffer</code> object is not available.

In Chrome go to chrome://flags/#shared-array-buffer to enable this feature.

In FireFox go to about:config look for javascript.options.shared_memory and set it to true

Audio is not available in FireFox at the moment, but meta-data are coming in.


Note that <code>SharedArrayBuffer</code> was disabled by default in all major browsers on 5 January, 2018 in response to https://meltdownattack.com Spectre. 

Chrome https://bugs.chromium.org/p/chromium/issues/detail?id=821270 re-enabled it in v67 on platforms where its site-isolation feature is enabled to protect against Spectre-style vulnerabilities.
    
    
</td>
</tr>





<tr>
    <td> msg </td>
<td> some system messages like notifications and error messages. the EventObject has at least two properties.
<br><br>

<code>msg</code>: the notification itself as string 
<br><br>

<code>code</code>: a message code <br><br>

depending on <code>code</code> there are some more properties. 
</td>
<td>
<br>
<br>

Some <code>code</code>s are: 
<code>afBroken</code>, 
<code>noStreamData</code>, 
<code>audioZero</code>, 
<code>networkError</code>

<pre>
{
    code: "noStreamData"
    msg: "No data has been received from the streaming server for a few seconds. Is there a problem?"
}
</pre>

or

<pre>
{   
    code: "afBroken"
    msg: "af seq counter broken", 
    seq: 60447, 
    lastSeqCounter: 60445, 
}
</pre>

</td>
</tr>



<tr>
    <td>serviceInfo</td>
    <td>
    is thrown if the current service name and ensemble name is available
    </td>
    <td>
<pre>
{
    ensembleLabel: 'Antenne',
    serviceLabel: 'Bayern'
}
</pre>
    </td>
</tr>

<tr>
    <td>timeShiftControllerAvailable</td>
    <td>is thrown if the current edi server supports TimeShift. 
    <br><br>
    As argument an object is passed which consists of the maximum timeshift buffer size in milliseconds and a timeshift token. The timeshift token can be used to design multidevice senarios by transferring the token to another device.<br><br>
To start the same stream at the same position on another device, the timeshift token is appended to the stream URL as get parameter. If the timeShiftControllerAvailable-event returns the same timeshift token, it is possible to control the stream from both devices.
</td>
<td>
<pre>
{
    'Timeshift-Max': 360000
    'Timeshift-Token': 'dsfh2345kh3'
}
</pre>
</td>
</tr>


<tr>
    <td>items</td>
    <td>an array consisting of item-running elements.</td>
    <td>
    <pre>
[
    {
        "label": "Talisco - Sun",
        "tags": [
            {
                "type": 1,
                "typeDescription": "ITEM_TITLE",
                "text": "Sun"
            },
            {
                "type": 4,
                "typeDescription": "ITEM_ARTIST",
                "text": "Talisco"
            }
        ],
        "toggleState": true,
        "runningState": true,
        "time": 1574668398548,
        "id": 314010,
        "slidePath": "",
        "slideMime": ""
    },
    ......
]
    </pre>
    </td>
</tr>


<tr>
    <td>liveItem</td>
    <td>Items that are transferred at runtime. The structure corresponds to the elements from the item array.</td>
    <td>one Object from items array</td>
</tr>

<tr>
    <td>unhandeldEdiTag</td>
    <td> An EDI tag was found in the stream that was not further handled. this is especially the case for custom edi tags the case .</td>
    <td>
        <code>{tagName, payLoad}</code><br>
        payload: <code>uint8Array</code>
    </td>
</tr>

<tr>
    <td>dabTime</td>
    <td>Time from the DAB stream</td>
    <td>js Date-Object (new Date())</td>
</tr>

</table>
