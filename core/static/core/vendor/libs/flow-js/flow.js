!function(e,t){var i=function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=483)}({105:function(e,t,i){(function(e){var i;
/**
 * @license MIT
 */
/**
 * @license MIT
 */
!function(s,n,r){"use strict";if(s&&n){var o=s.navigator.msPointerEnabled;a.prototype={on:function(e,t){e=e.toLowerCase(),this.events.hasOwnProperty(e)||(this.events[e]=[]),this.events[e].push(t)},off:function(e,t){var i,s,n;e!==r?(e=e.toLowerCase(),t!==r?this.events.hasOwnProperty(e)&&(i=this.events[e],s=t,(n=i.indexOf(s))>-1&&i.splice(n,1)):delete this.events[e]):this.events={}},fire:function(e,t){t=Array.prototype.slice.call(arguments),e=e.toLowerCase();var i=!1;return this.events.hasOwnProperty(e)&&c(this.events[e],function(e){i=!1===e.apply(this,t.slice(1))||i},this),"catchall"!=e&&(t.unshift("catchAll"),i=!1===this.fire.apply(this,t)||i),!i},webkitReadDataTransfer:function(e){var t=this,i=e.dataTransfer.items.length,s=[];function n(e,t){e.relativePath=t.substring(1),s.push(e),o()}function r(e){throw e}function o(){0==--i&&t.addFiles(s,e)}c(e.dataTransfer.items,function(e){var t=e.webkitGetAsEntry();t?t.isFile?n(e.getAsFile(),t.fullPath):function e(t){t.readEntries(function(s){s.length?(i+=s.length,c(s,function(t){if(t.isFile){var i=t.fullPath;t.file(function(e){n(e,i)},r)}else t.isDirectory&&e(t.createReader())}),e(t)):o()},r)}(t.createReader()):o()})},generateUniqueIdentifier:function(e){var t=this.opts.generateUniqueIdentifier;if("function"==typeof t)return t(e);var i=e.relativePath||e.webkitRelativePath||e.fileName||e.name;return e.size+"-"+i.replace(/[^0-9a-zA-Z_-]/gim,"")},uploadNextChunk:function(e){var t=!1;if(this.opts.prioritizeFirstAndLastChunk&&(c(this.files,function(e){return!e.paused&&e.chunks.length&&"pending"===e.chunks[0].status()?(e.chunks[0].send(),t=!0,!1):!e.paused&&e.chunks.length>1&&"pending"===e.chunks[e.chunks.length-1].status()?(e.chunks[e.chunks.length-1].send(),t=!0,!1):void 0}),t))return t;if(c(this.files,function(e){if(e.paused||c(e.chunks,function(e){if("pending"===e.status())return e.send(),t=!0,!1}),t)return!1}),t)return!0;var i=!1;return c(this.files,function(e){if(!e.isComplete())return i=!0,!1}),i||e||p(function(){this.fire("complete")},this),!1},assignBrowse:function(e,t,i,s){e instanceof Element&&(e=[e]),c(e,function(e){var r;"INPUT"===e.tagName&&"file"===e.type?r=e:((r=n.createElement("input")).setAttribute("type","file"),d(r.style,{visibility:"hidden",position:"absolute",width:"1px",height:"1px"}),e.appendChild(r),e.addEventListener("click",function(){r.click()},!1)),this.opts.singleFile||i||r.setAttribute("multiple","multiple"),t&&r.setAttribute("webkitdirectory","webkitdirectory"),c(s,function(e,t){r.setAttribute(t,e)});var o=this;r.addEventListener("change",function(e){e.target.value&&(o.addFiles(e.target.files,e),e.target.value="")},!1)},this)},assignDrop:function(e){void 0===e.length&&(e=[e]),c(e,function(e){e.addEventListener("dragover",this.preventEvent,!1),e.addEventListener("dragenter",this.preventEvent,!1),e.addEventListener("drop",this.onDrop,!1)},this)},unAssignDrop:function(e){void 0===e.length&&(e=[e]),c(e,function(e){e.removeEventListener("dragover",this.preventEvent),e.removeEventListener("dragenter",this.preventEvent),e.removeEventListener("drop",this.onDrop)},this)},isUploading:function(){var e=!1;return c(this.files,function(t){if(t.isUploading())return e=!0,!1}),e},_shouldUploadNext:function(){var e=0,t=!0,i=this.opts.simultaneousUploads;return c(this.files,function(s){c(s.chunks,function(s){if("uploading"===s.status()&&++e>=i)return t=!1,!1})}),t&&e},upload:function(){var e=this._shouldUploadNext();if(!1!==e){this.fire("uploadStart");for(var t=!1,i=1;i<=this.opts.simultaneousUploads-e;i++)t=this.uploadNextChunk(!0)||t;t||p(function(){this.fire("complete")},this)}},resume:function(){c(this.files,function(e){e.isComplete()||e.resume()})},pause:function(){c(this.files,function(e){e.pause()})},cancel:function(){for(var e=this.files.length-1;e>=0;e--)this.files[e].cancel()},progress:function(){var e=0,t=0;return c(this.files,function(i){e+=i.progress()*i.size,t+=i.size}),t>0?e/t:0},addFile:function(e,t){this.addFiles([e],t)},addFiles:function(e,t){var i=[];c(e,function(e){if((!o||o&&e.size>0)&&(e.size%4096!=0||"."!==e.name&&"."!==e.fileName)){var s=this.generateUniqueIdentifier(e);if(this.opts.allowDuplicateUploads||!this.getFromUniqueIdentifier(s)){var n=new h(this,e,s);this.fire("fileAdded",n,t)&&i.push(n)}}},this),this.fire("filesAdded",i,t)&&(c(i,function(e){this.opts.singleFile&&this.files.length>0&&this.removeFile(this.files[0]),this.files.push(e)},this),this.fire("filesSubmitted",i,t))},removeFile:function(e){for(var t=this.files.length-1;t>=0;t--)this.files[t]===e&&(this.files.splice(t,1),e.abort(),this.fire("fileRemoved",e))},getFromUniqueIdentifier:function(e){var t=!1;return c(this.files,function(i){i.uniqueIdentifier===e&&(t=i)}),t},getSize:function(){var e=0;return c(this.files,function(t){e+=t.size}),e},sizeUploaded:function(){var e=0;return c(this.files,function(t){e+=t.sizeUploaded()}),e},timeRemaining:function(){var e=0,t=0;return c(this.files,function(i){i.paused||i.error||(e+=i.size-i.sizeUploaded(),t+=i.averageSpeed)}),e&&!t?Number.POSITIVE_INFINITY:e||t?Math.floor(e/t):0}},h.prototype={measureSpeed:function(){var e=Date.now()-this._lastProgressCallback;if(e){var t=this.flowObj.opts.speedSmoothingFactor,i=this.sizeUploaded();this.currentSpeed=Math.max((i-this._prevUploadedSize)/e*1e3,0),this.averageSpeed=t*this.currentSpeed+(1-t)*this.averageSpeed,this._prevUploadedSize=i}},chunkEvent:function(e,t,i){switch(t){case"progress":if(Date.now()-this._lastProgressCallback<this.flowObj.opts.progressCallbacksInterval)break;this.measureSpeed(),this.flowObj.fire("fileProgress",this,e),this.flowObj.fire("progress"),this._lastProgressCallback=Date.now();break;case"error":this.error=!0,this.abort(!0),this.flowObj.fire("fileError",this,i,e),this.flowObj.fire("error",i,this,e);break;case"success":if(this.error)return;this.measureSpeed(),this.flowObj.fire("fileProgress",this,e),this.flowObj.fire("progress"),this._lastProgressCallback=Date.now(),this.isComplete()&&(this.currentSpeed=0,this.averageSpeed=0,this.flowObj.fire("fileSuccess",this,i,e));break;case"retry":this.flowObj.fire("fileRetry",this,e)}},pause:function(){this.paused=!0,this.abort()},resume:function(){this.paused=!1,this.flowObj.upload()},abort:function(e){this.currentSpeed=0,this.averageSpeed=0;var t=this.chunks;e&&(this.chunks=[]),c(t,function(e){"uploading"===e.status()&&(e.abort(),this.flowObj.uploadNextChunk())},this)},cancel:function(){this.flowObj.removeFile(this)},retry:function(){this.bootstrap(),this.flowObj.upload()},bootstrap:function(){"function"==typeof this.flowObj.opts.initFileFn&&this.flowObj.opts.initFileFn(this),this.abort(!0),this.error=!1,this._prevProgress=0;for(var e=this.flowObj.opts.forceChunkSize?Math.ceil:Math.floor,t=Math.max(e(this.size/this.flowObj.opts.chunkSize),1),i=0;i<t;i++)this.chunks.push(new l(this.flowObj,this,i))},progress:function(){if(this.error)return 1;if(1===this.chunks.length)return this._prevProgress=Math.max(this._prevProgress,this.chunks[0].progress()),this._prevProgress;var e=0;c(this.chunks,function(t){e+=t.progress()*(t.endByte-t.startByte)});var t=e/this.size;return this._prevProgress=Math.max(this._prevProgress,t>.9999?1:t),this._prevProgress},isUploading:function(){var e=!1;return c(this.chunks,function(t){if("uploading"===t.status())return e=!0,!1}),e},isComplete:function(){var e=!1;return c(this.chunks,function(t){var i=t.status();if("pending"===i||"uploading"===i||"reading"===i||1===t.preprocessState||1===t.readState)return e=!0,!1}),!e},sizeUploaded:function(){var e=0;return c(this.chunks,function(t){e+=t.sizeUploaded()}),e},timeRemaining:function(){if(this.paused||this.error)return 0;var e=this.size-this.sizeUploaded();return e&&!this.averageSpeed?Number.POSITIVE_INFINITY:e||this.averageSpeed?Math.floor(e/this.averageSpeed):0},getType:function(){return this.file.type&&this.file.type.split("/")[1]},getExtension:function(){return this.name.substr(2+(~-this.name.lastIndexOf(".")>>>0)).toLowerCase()}},l.prototype={getParams:function(){return{flowChunkNumber:this.offset+1,flowChunkSize:this.flowObj.opts.chunkSize,flowCurrentChunkSize:this.endByte-this.startByte,flowTotalSize:this.fileObj.size,flowIdentifier:this.fileObj.uniqueIdentifier,flowFilename:this.fileObj.name,flowRelativePath:this.fileObj.relativePath,flowTotalChunks:this.fileObj.chunks.length}},getTarget:function(e,t){return e.indexOf("?")<0?e+="?":e+="&",e+t.join("&")},test:function(){this.xhr=new XMLHttpRequest,this.xhr.addEventListener("load",this.testHandler,!1),this.xhr.addEventListener("error",this.testHandler,!1);var e=f(this.flowObj.opts.testMethod,this.fileObj,this),t=this.prepareXhrRequest(e,!0);this.xhr.send(t)},preprocessFinished:function(){this.endByte=this.computeEndByte(),this.preprocessState=2,this.send()},readFinished:function(e){this.readState=2,this.bytes=e,this.send()},send:function(){var e=this.flowObj.opts.preprocess,t=this.flowObj.opts.readFileFn;if("function"==typeof e)switch(this.preprocessState){case 0:return this.preprocessState=1,void e(this);case 1:return}switch(this.readState){case 0:return this.readState=1,void t(this.fileObj,this.startByte,this.endByte,this.fileObj.file.type,this);case 1:return}if(!this.flowObj.opts.testChunks||this.tested){this.loaded=0,this.total=0,this.pendingRetry=!1,this.xhr=new XMLHttpRequest,this.xhr.upload.addEventListener("progress",this.progressHandler,!1),this.xhr.addEventListener("load",this.doneHandler,!1),this.xhr.addEventListener("error",this.doneHandler,!1);var i=f(this.flowObj.opts.uploadMethod,this.fileObj,this),s=this.prepareXhrRequest(i,!1,this.flowObj.opts.method,this.bytes);this.xhr.send(s)}else this.test()},abort:function(){var e=this.xhr;this.xhr=null,e&&e.abort()},status:function(e){return 1===this.readState?"reading":this.pendingRetry||1===this.preprocessState?"uploading":this.xhr?this.xhr.readyState<4?"uploading":this.flowObj.opts.successStatuses.indexOf(this.xhr.status)>-1?"success":this.flowObj.opts.permanentErrors.indexOf(this.xhr.status)>-1||!e&&this.retries>=this.flowObj.opts.maxChunkRetries?"error":(this.abort(),"pending"):"pending"},message:function(){return this.xhr?this.xhr.responseText:""},progress:function(){if(this.pendingRetry)return 0;var e=this.status();return"success"===e||"error"===e?1:"pending"===e?0:this.total>0?this.loaded/this.total:0},sizeUploaded:function(){var e=this.endByte-this.startByte;return"success"!==this.status()&&(e=this.progress()*e),e},prepareXhrRequest:function(e,t,i,s){var n=f(this.flowObj.opts.query,this.fileObj,this,t);n=d(n||{},this.getParams());var r=f(this.flowObj.opts.target,this.fileObj,this,t),o=null;if("GET"===e||"octet"===i){var a=[];c(n,function(e,t){a.push([encodeURIComponent(t),encodeURIComponent(e)].join("="))}),r=this.getTarget(r,a),o=s||null}else o=new FormData,c(n,function(e,t){o.append(t,e)}),void 0!==s&&o.append(this.flowObj.opts.fileParameterName,s,this.fileObj.file.name);return this.xhr.open(e,r,!0),this.xhr.withCredentials=this.flowObj.opts.withCredentials,c(f(this.flowObj.opts.headers,this.fileObj,this,t),function(e,t){this.xhr.setRequestHeader(t,e)},this),o}},a.evalOpts=f,a.extend=d,a.each=c,a.FlowFile=h,a.FlowChunk=l,a.version="<%= version %>",e&&"object"==typeof e.exports?e.exports=a:(s.Flow=a,(i=function(){return a}.apply(t,[]))===r||(e.exports=i))}else console.warn("Flowjs needs window and document objects to work");function a(e){if(this.support=!("undefined"==typeof File||"undefined"==typeof Blob||"undefined"==typeof FileList||!Blob.prototype.slice&&!Blob.prototype.webkitSlice&&!Blob.prototype.mozSlice),this.support){this.supportDirectory=/Chrome/.test(s.navigator.userAgent)||/Firefox/.test(s.navigator.userAgent)||/Edge/.test(s.navigator.userAgent),this.files=[],this.defaults={chunkSize:1048576,forceChunkSize:!1,simultaneousUploads:3,singleFile:!1,fileParameterName:"file",progressCallbacksInterval:500,speedSmoothingFactor:.1,query:{},headers:{},withCredentials:!1,preprocess:null,method:"multipart",testMethod:"GET",uploadMethod:"POST",prioritizeFirstAndLastChunk:!1,allowDuplicateUploads:!1,target:"/",testChunks:!0,generateUniqueIdentifier:null,maxChunkRetries:0,chunkRetryInterval:null,permanentErrors:[404,413,415,500,501],successStatuses:[200,201,202],onDropStopPropagation:!1,initFileFn:null,readFileFn:u},this.opts={},this.events={};var t=this;this.onDrop=function(e){t.opts.onDropStopPropagation&&e.stopPropagation(),e.preventDefault();var i=e.dataTransfer;i.items&&i.items[0]&&i.items[0].webkitGetAsEntry?t.webkitReadDataTransfer(e):t.addFiles(i.files,e)},this.preventEvent=function(e){e.preventDefault()},this.opts=a.extend({},this.defaults,e||{})}}function h(e,t,i){this.flowObj=e,this.bytes=null,this.file=t,this.name=t.fileName||t.name,this.size=t.size,this.relativePath=t.relativePath||t.webkitRelativePath||this.name,this.uniqueIdentifier=i===r?e.generateUniqueIdentifier(t):i,this.chunks=[],this.paused=!1,this.error=!1,this.averageSpeed=0,this.currentSpeed=0,this._lastProgressCallback=Date.now(),this._prevUploadedSize=0,this._prevProgress=0,this.bootstrap()}function u(e,t,i,s,n){var r="slice";e.file.slice?r="slice":e.file.mozSlice?r="mozSlice":e.file.webkitSlice&&(r="webkitSlice"),n.readFinished(e.file[r](t,i,s))}function l(e,t,i){this.flowObj=e,this.fileObj=t,this.offset=i,this.tested=!1,this.retries=0,this.pendingRetry=!1,this.preprocessState=0,this.readState=0,this.loaded=0,this.total=0,this.chunkSize=this.flowObj.opts.chunkSize,this.startByte=this.offset*this.chunkSize,this.computeEndByte=function(){var e=Math.min(this.fileObj.size,(this.offset+1)*this.chunkSize);return this.fileObj.size-e<this.chunkSize&&!this.flowObj.opts.forceChunkSize&&(e=this.fileObj.size),e},this.endByte=this.computeEndByte(),this.xhr=null;var s=this;this.event=function(e,t){(t=Array.prototype.slice.call(arguments)).unshift(s),s.fileObj.chunkEvent.apply(s.fileObj,t)},this.progressHandler=function(e){e.lengthComputable&&(s.loaded=e.loaded,s.total=e.total),s.event("progress",e)},this.testHandler=function(e){var t=s.status(!0);"error"===t?(s.event(t,s.message()),s.flowObj.uploadNextChunk()):"success"===t?(s.tested=!0,s.event(t,s.message()),s.flowObj.uploadNextChunk()):s.fileObj.paused||(s.tested=!0,s.send())},this.doneHandler=function(e){var t=s.status();if("success"===t||"error"===t)delete this.data,s.event(t,s.message()),s.flowObj.uploadNextChunk();else{s.event("retry",s.message()),s.pendingRetry=!0,s.abort(),s.retries++;var i=s.flowObj.opts.chunkRetryInterval;null!==i?setTimeout(function(){s.send()},i):s.send()}}}function f(e,t){return"function"==typeof e&&(t=Array.prototype.slice.call(arguments),e=e.apply(null,t.slice(1))),e}function p(e,t){setTimeout(e.bind(t),0)}function d(e,t){return c(arguments,function(t){t!==e&&c(t,function(t,i){e[i]=t})}),e}function c(e,t,i){var s;if(e)if(void 0!==e.length){for(s=0;s<e.length;s++)if(!1===t.call(i,e[s],s))return}else for(s in e)if(e.hasOwnProperty(s)&&!1===t.call(i,e[s],s))return}}("undefined"!=typeof window&&window,"undefined"!=typeof document&&document)}).call(this,i(6)(e))},483:function(e,t,i){"use strict";i.r(t);var s=i(105);i.n(s),i.d(t,"Flow",function(){return s})},6:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}});if("object"==typeof i){var s=["object"==typeof module&&"object"==typeof module.exports?module.exports:null,"undefined"!=typeof window?window:null,e&&e!==window?e:null];for(var n in i)s[0]&&(s[0][n]=i[n]),s[1]&&"__esModule"!==n&&(s[1][n]=i[n]),s[2]&&(s[2][n]=i[n])}}(this);