// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _runningViewJs = require("./RunningView.js");
var _runningViewJsDefault = parcelHelpers.interopDefault(_runningViewJs);
var _cyclingViewJs = require("./CyclingView.js");
var _cyclingViewJsDefault = parcelHelpers.interopDefault(_cyclingViewJs);
var _uiviewJs = require("./UIView.js");
var _uiviewJsDefault = parcelHelpers.interopDefault(_uiviewJs);
var _storageViewJs = require("./StorageView.js");
var _storageViewJsDefault = parcelHelpers.interopDefault(_storageViewJs);
var _markupJs = require("./Markup.js");
var _markupJsDefault = parcelHelpers.interopDefault(_markupJs);
const modalContent = document.querySelector(".modal__content p");
//form selection
const workouContainer = document.querySelector(".workouts__container");
const form = document.querySelector(".form");
const distanceInput = document.querySelector(".distance__input");
const durationInput = document.querySelector(".duration__input");
const cadenceInput = document.querySelector(".cadence__input");
const elevationInput = document.querySelector(".elevation__input");
const typeInput = document.querySelector("#type_workout");
const modalElem = document.querySelector(".modal");
class App extends (0, _uiviewJsDefault.default) {
    //define variables
    #map;
    #mapEvent;
    #mapMarkerArray = [];
    #workouts = [];
    #mapZoomLevel = 13;
    constructor(){
        super();
        this._getPosition();
        this._getLocalStorage();
        // set value of select input of type
        typeInput.value = "running";
        form.addEventListener("submit", this._newWorkout.bind(this));
        //prettier-ignore
        workouContainer.addEventListener("click", this._moveToPopup.bind(this));
        //prettier-ignore
        workouContainer.addEventListener("click", this._workoutElemEventhandler.bind(this));
        // select chande & toggle inputs
        typeInput.addEventListener("change", this._toggleElevationField);
    }
    _newWorkout(e) {
        //prettier-ignore
        const validInputs = (...inputs)=>inputs.every((inp)=>Number.isFinite(inp));
        const isAllPositive = (...inputs)=>inputs.every((inp)=>inp > 0);
        e.preventDefault();
        // Get data of form
        const type = typeInput.value;
        const distance = +distanceInput.value;
        const duration = +durationInput.value;
        const { lat , lng  } = this.#mapEvent.latlng;
        let workout;
        let elevation;
        let cadence;
        if (type === "running") {
            cadence = +cadenceInput.value;
            //gard
            // prettier-ignore
            if (!validInputs(distance, duration, cadence) || !isAllPositive(distance, duration, cadence)) return this._modalHandler(modalElem);
            workout = new (0, _runningViewJsDefault.default)([
                lat,
                lng
            ], distance, duration, cadence);
        }
        if (type === "cycling") {
            elevation = +elevationInput.value;
            // Gard
            // prettier-ignore
            if (!validInputs(distance, duration, elevation) || !isAllPositive(distance, duration)) return this._modalHandler(modalElem);
            workout = new (0, _cyclingViewJsDefault.default)([
                lat,
                lng
            ], distance, duration, elevation);
        }
        //if flag is true => means the workout edited
        let flag = false;
        this.#workouts.some((work, index)=>{
            if (work.coords.includes(workout.coords[0])) {
                workout = work;
                this.#workouts.splice(index, 1);
                this.#map.removeLayer(this.#mapMarkerArray[index]);
                this.#mapMarkerArray.splice(index, 1);
                flag = true;
                return;
            }
        });
        if (flag) {
            // prettier-ignore
            if (type === "running") workout = new (0, _runningViewJsDefault.default)([
                lat,
                lng
            ], distance, duration, cadence);
            // prettier-ignore
            if (type === "cycling") workout = new (0, _cyclingViewJsDefault.default)([
                lat,
                lng
            ], distance, duration, elevation);
        }
        this.#workouts.push(workout);
        this._renderworkoutMarker(workout);
        this._renderWorkout(workout, flag);
        //hide form
        this._hideForm();
        this._toggleMenuHandler();
        (0, _storageViewJsDefault.default)._setLocalStorag(this.#workouts);
    }
    _workoutElemEventhandler(e) {
        //Gard
        if (!this.#map) return;
        //remove
        if (e.target.className === "fa fa-trash") {
            const deleteItem = e.target.closest(".workout");
            const deleteIndex = this.#workouts.findIndex((workout)=>workout.id === deleteItem.dataset.id);
            this.#workouts.splice(deleteIndex, 1);
            // renders remain workout
            this.append(workouContainer, this.#workouts);
            // update localstorage
            (0, _storageViewJsDefault.default)._setLocalStorag(this.#workouts);
            //delete marker
            this.#map.removeLayer(this.#mapMarkerArray[deleteIndex]);
            this.#mapMarkerArray.splice(deleteIndex, 1);
        }
        //change
        if (e.target.className === "fa fa-edit") {
            form.classList.remove("hidden");
            const index = e.target.closest(".workout");
            //prettier-ignore
            const itemEditIndex = this.#workouts.findIndex((workout)=>workout.id === index.dataset.id);
            // const itemEditIndex = this.#workouts.find(editWork => editWork.id === deleteItem.dataset.id);
            this.#mapEvent = this.#mapMarkerArray[itemEditIndex];
            this.#mapEvent.latlng = this.#mapEvent._latlng;
        }
    }
    _getPosition() {
        if (navigator.geolocation) //prettier-ignore
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), geoError.bind(this));
        //Error handler
        function geoError() {
            modalContent.textContent = `دسترسی به موقعیت مکانی ممکن نیست!`;
            this._modalHandler(modalElem);
        }
    }
    _loadMap(position) {
        const { latitude , longitude  } = position.coords;
        const coords = [
            latitude,
            longitude
        ];
        this.#map = L.map("map").setView(coords, this.#mapZoomLevel);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        // handling mark on map
        this.#map.on("click", this._showForm.bind(this));
        // render markers
        this.#workouts.forEach((work)=>this._renderworkoutMarker(work));
    }
    _renderworkoutMarker(workout) {
        const options = {
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`
        };
        let newMarker = L.marker(workout.coords, {
            draggable: true
        }).addTo(this.#map).bindPopup(L.popup(options)).setPopupContent(`${workout.description}`).openPopup();
        newMarker.on("dragend", this._newCoordsMarker.bind(this, workout));
        this.#mapMarkerArray.push(newMarker);
    }
    _newCoordsMarker(workout, e) {
        const { lat: newLat , lng: newLng  } = e.target._latlng;
        const newCoords = [
            newLat,
            newLng
        ];
        //set new coords
        this.#workouts.forEach((newWorkMark)=>{
            if (workout.id === newWorkMark.id) newWorkMark.coords = newCoords;
        });
        (0, _storageViewJsDefault.default)._setLocalStorag(this.#workouts);
    }
    _renderWorkout(workout, flag = false) {
        // if the workout is edited replace the new to
        if (flag) this.append(workouContainer, this.#workouts);
        else (0, _markupJsDefault.default)._generateMarkup(workout, form);
    }
    append(ItemContainer, workoutArray) {
        const form1 = workouContainer.firstElementChild;
        ItemContainer.innerHTML = "";
        ItemContainer.appendChild(form1);
        workoutArray.forEach((work)=>(0, _markupJsDefault.default)._generateMarkup(work, form1));
    }
    _moveToPopup(e) {
        //Gard
        if (!this.#map) return;
        const workouElem = e.target.closest(".workout");
        if (!workouElem) return;
        const workoutClicked = this.#workouts.find((work)=>work.id === workouElem.dataset.id);
        if (!workoutClicked) return;
        const setViewOptions = {
            animate: true,
            pan: {
                duration: 1
            }
        };
        //prettier-ignore
        this.#map.setView(workoutClicked.coords, this.#mapZoomLevel, setViewOptions);
    }
    _getLocalStorage() {
        this.#workouts = (0, _storageViewJsDefault.default)._getLocalStorage();
        this.#workouts.forEach((work)=>this._renderWorkout(work));
    }
    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        durationInput.focus();
        this._toggleMenuHandler();
    }
    _hideForm() {
        //prettier-ignore
        distanceInput.value = durationInput.value = elevationInput.value = cadenceInput.value = "";
        form.classList.add("hidden");
    }
    _toggleElevationField() {
        elevationInput.closest(".form__row").classList.toggle("form__row_hidden");
        cadenceInput.closest(".form__row").classList.toggle("form__row_hidden");
    }
}
exports.default = App;
const app = new App();

},{"./RunningView.js":"6OX1g","./CyclingView.js":"3XHR6","./UIView.js":"7ah18","./StorageView.js":"b13Xa","./Markup.js":"djWyQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OX1g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _workoutViewJs = require("./WorkoutView.js");
var _workoutViewJsDefault = parcelHelpers.interopDefault(_workoutViewJs);
class Running extends (0, _workoutViewJsDefault.default) {
    //
    type = "running";
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }
    calcPace() {
        // min / km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
exports.default = Running;

},{"./WorkoutView.js":"bbM0z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbM0z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _globalConfigJs = require("../config/globalConfig.js");
class Workout {
    //
    date = new Date();
    id = (Date.now() + "").slice(-10);
    constructor(coords, distance, duration){
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }
    _setDescription() {
        const optionsDate = {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "long",
            year: "numeric"
        };
        //prettier-ignore
        const formatedDate = new Intl.DateTimeFormat((0, _globalConfigJs.locale), optionsDate).format(this.date);
        this.description = `${this.type === "running" ? "\u062F\u0648\u06CC\u062F\u0646" : "\u062F\u0648\u0686\u0631\u062E\u0647 \u0633\u0648\u0627\u0631\u06CC"} در ${formatedDate}`;
    }
}
exports.default = Workout;

},{"../config/globalConfig.js":"wNTxS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wNTxS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "locale", ()=>locale);
const locale = "fa-IR";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3XHR6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _workoutViewJs = require("./WorkoutView.js");
var _workoutViewJsDefault = parcelHelpers.interopDefault(_workoutViewJs);
class Cycling extends (0, _workoutViewJsDefault.default) {
    //
    type = "cycling";
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }
    calcSpeed() {
        this.speed = this.distance / this.duration;
        return this.speed;
    }
}
exports.default = Cycling;

},{"./WorkoutView.js":"bbM0z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ah18":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class UIView {
    _toggleMenu = document.querySelector(".toggler__menu");
    _menuOverlay = document.querySelector(".menu__overlay");
    _closeMenuBtn = document.querySelector(".close__menu--btn");
    _form = document.querySelector(".form");
    _modalClose = document.querySelector(".modal i.fa-close");
    _modalDetailBtn = document.querySelector(".modal_datail_close");
    _modalOverlay = document.querySelector(".modal__overlay");
    _menu = document.querySelector(".menu");
    _modalDetailElem = document.querySelector(".modal__info");
    _modalElem = document.querySelector(".modal");
    _aboutAppBtn = document.querySelector(".about__app");
    constructor(){
        // menu handler
        this._toggleMenu.addEventListener("click", this._toggleMenuHandler.bind(this));
        this._menuOverlay.addEventListener("click", this._toggleMenuHandler.bind(this));
        this._closeMenuBtn.addEventListener("click", this._toggleMenuHandler.bind(this));
        //modal close
        this._modalClose.addEventListener("click", this._modalCloseHandler.bind(this));
        this._modalDetailBtn.addEventListener("click", this._modalDetailClose.bind(this));
        this._modalOverlay.addEventListener("click", this._modalCloseHandler.bind(this));
        this._aboutAppBtn.addEventListener("click", this._modalHandler.bind(this, this._modalDetailElem));
        document.addEventListener("keydown", (function(e) {
            if (e.key === "Escape") this._toggleMenuHandler();
        }).bind(this));
    }
    _toggleMenuHandler() {
        this._menu.classList.toggle("menu__isActive");
        this._menuOverlay.classList.toggle("overlay--active");
        if (!this._form.classList.contains("hidden") && !this._menu.classList.contains("menu__isActive")) {
            this._form.classList.add("hidden");
            this._form.classList.add("hidden");
        }
    }
    _modalCloseHandler() {
        this._modalElem.classList.add("hidden_modal");
        this._modalDetailElem.classList.add("hidden_modal");
        this._modalOverlay.classList.remove("overlay--active");
    }
    _modalDetailClose() {
        this._modalDetailElem.classList.add("hidden_modal");
        this._modalOverlay.classList.remove("overlay--active");
    }
    _modalHandler(modalElement) {
        modalElement.classList.remove("hidden_modal");
        this._modalOverlay.classList.add("overlay--active");
        if (modalElement.classList.contains("modal")) setTimeout(()=>{
            modalElement.classList.add("hidden_modal");
            this._modalOverlay.classList.remove("overlay--active");
        }, 5000);
    }
}
exports.default = UIView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b13Xa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cyclingViewJs = require("./CyclingView.js");
var _cyclingViewJsDefault = parcelHelpers.interopDefault(_cyclingViewJs);
var _runningViewJs = require("./RunningView.js");
var _runningViewJsDefault = parcelHelpers.interopDefault(_runningViewJs);
class StorageView {
    _setLocalStorag(workoutArr) {
        localStorage.setItem("workouts", JSON.stringify(workoutArr));
    }
    _getLocalStorage() {
        const allData = JSON.parse(localStorage.getItem("workouts"));
        if (!allData) return [];
        allData.forEach((data)=>{
            if (data.type === "running") Object.setPrototypeOf(data, (0, _runningViewJsDefault.default));
            if (data.type === "cycling") Object.setPrototypeOf(data, (0, _cyclingViewJsDefault.default));
        });
        return allData;
    }
}
exports.default = new StorageView();

},{"./CyclingView.js":"3XHR6","./RunningView.js":"6OX1g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djWyQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Markup {
    _generateMarkup(workout, container) {
        let html = `
    <li class="workout workout__${workout.type}" data-id="${workout.id}">
      <a href="#" class="workout__del"><i class="fa fa-trash"></i></a>
      <a href="#" class="workout__change"><i class="fa fa-edit"></i></a>
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__detail">
        <span class="workou_unit">km</span>
        <span class="workou_value">${workout.distance}</span>
        <span class="workou_icon">${workout.type === "running" ? "\uD83C\uDFC3\u200D\u2642\uFE0F" : "\uD83D\uDEB2"}</span>
      </div>
      <div class="workout__detail">
        <span class="workou_unit">MIN</span>
        <span class="workou_value">${workout.duration}</span>
        <span class="workou_icon">⌚</span>
      </div>
    `;
        if (workout.type === "running") html += `
          <div class="workout__detail">
          <span class="workou_unit">MIN/KM</span>
          <span class="workou_value">${workout.pace.toFixed(1)} </span>
          <span class="workou_icon">⚡</span>
        </div>
        <div class="workout__detail">
          <span class="workou_unit">SPM</span>
          <span class="workou_value">${workout.cadence} </span>
          <span class="workou_icon">👣</span>
        </div>
      </li>
      `;
        if (workout.type === "cycling") html += `
          <div class="workout__detail">
          <span class="workou_unit">KM/H</span>
          <span class="workou_value">${workout.speed.toFixed(1)}</span>
          <span class="workou_icon">⚡</span>
        </div>
        <div class="workout__detail">
          <span class="workou_unit">M</span>
          <span class="workou_value">${workout.elevationGain}</span>
          <span class="workou_icon">🗻</span>
        </div>
      </li>
      `;
        container.insertAdjacentHTML("afterend", html);
    }
}
exports.default = new Markup();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequire16e1")

//# sourceMappingURL=index.59a40e7a.js.map
