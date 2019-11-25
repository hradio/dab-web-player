var threadInfoStruct=0,selfThreadId=0,parentThreadId=0,tempDoublePtr=0,STACK_BASE=0,STACKTOP=0,STACK_MAX=0,buffer,DYNAMICTOP_PTR=0,DYNAMIC_BASE=0,ENVIRONMENT_IS_PTHREAD=!0,PthreadWorkerInit={},__performance_now_clock_drift=0,Module={};function assert(a,c){a||abort("Assertion failed: "+c)}
this.addEventListener("error",function(a){if(-1!=a.message.indexOf("SimulateInfiniteLoop"))return a.preventDefault();var c=" in "+a.filename+":"+a.lineno+":"+a.colno;console.error("Pthread "+selfThreadId+" uncaught exception"+(a.filename||a.lineno||a.colno?c:"")+": "+a.message+". Error object:");console.error(a.error)});function threadPrint(){var a=Array.prototype.slice.call(arguments).join(" ");console.log(a)}
function threadPrintErr(){var a=Array.prototype.slice.call(arguments).join(" ");console.error(a);console.error(Error().stack)}function threadAlert(){var a=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:a,threadId:selfThreadId})}out=threadPrint;err=threadPrintErr;this.alert=threadAlert;var wasmModule,wasmMemory;
this.onmessage=function(a){try{if("load"===a.data.cmd){tempDoublePtr=a.data.tempDoublePtr;DYNAMIC_BASE=a.data.DYNAMIC_BASE;DYNAMICTOP_PTR=a.data.DYNAMICTOP_PTR;buffer=a.data.buffer;PthreadWorkerInit=a.data.PthreadWorkerInit;if("string"===typeof a.data.urlOrBlob)importScripts(a.data.urlOrBlob);else{var c=URL.createObjectURL(a.data.urlOrBlob);importScripts(c);URL.revokeObjectURL(c)}"undefined"!==typeof FS&&"function"===typeof FS.createStandardStreams&&FS.createStandardStreams();postMessage({cmd:"loaded"})}else if("objectTransfer"===
a.data.cmd)PThread.receiveObjectTransfer(a.data);else if("run"===a.data.cmd){__performance_now_clock_drift=performance.now()-a.data.time;threadInfoStruct=a.data.threadInfoStruct;__register_pthread_ptr(threadInfoStruct,0,0);selfThreadId=a.data.selfThreadId;parentThreadId=a.data.parentThreadId;STACK_BASE=STACKTOP=a.data.stackBase;STACK_MAX=STACK_BASE+a.data.stackSize;assert(threadInfoStruct);assert(selfThreadId);assert(parentThreadId);assert(0!=STACK_BASE);assert(STACK_MAX>STACK_BASE);Module.establishStackSpace(a.data.stackBase,
a.data.stackBase+a.data.stackSize);writeStackCookie();PThread.receiveObjectTransfer(a.data);PThread.setThreadStatus(_pthread_self(),1);try{var d=Module.dynCall_ii(a.data.start_routine,a.data.arg);checkStackCookie()}catch(b){if("Canceled!"===b){PThread.threadCancel();return}if("SimulateInfiniteLoop"===b||"pthread_exit"===b)return;Atomics.store(HEAPU32,threadInfoStruct+4>>2,b instanceof ExitStatus?b.status:-2);Atomics.store(HEAPU32,threadInfoStruct+0>>2,1);if("function"!==typeof _emscripten_futex_wake)throw err("Thread Initialisation failed."),
b;_emscripten_futex_wake(threadInfoStruct+0,2147483647);if(!(b instanceof ExitStatus))throw b;}Module.noExitRuntime||PThread.threadExit(d)}else"cancel"===a.data.cmd?threadInfoStruct&&0==PThread.thisThreadCancelState&&PThread.threadCancel():"setimmediate"!==a.data.target&&("processThreadQueue"===a.data.cmd?threadInfoStruct&&_emscripten_current_thread_process_queued_calls():(err("worker.js received unknown command "+a.data.cmd),console.error(a.data)))}catch(b){throw console.error("worker.js onmessage() captured an uncaught exception: "+
b),console.error(b.stack),b;}};
