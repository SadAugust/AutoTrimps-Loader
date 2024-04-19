// ==UserScript==
// @name         AutoTrimps-SadAugust
// @version      1.0-SadAugust
// @namespace    https://localhost:8887/AutoTrimps_Loader
// @updateURL    https://localhost:8887/AutoTrimps_Loader/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, SadAugust
// @match      https://raw.githack.com/*
// @connect      *localhost:8887/AutoTrimps_Local*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-SadAugust';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://localhost:8887/AutoTrimps_Loader/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(script);
