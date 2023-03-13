// ==UserScript==
// @name         Color Changer of VRich
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://*.vrich619.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vrich619.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(
		'.box.box-blue .box-header { color: #000000 !important; background-color: #a9dfff !important; }'+
		'.box.box-solid.box-danger > .box-header {color: #000000; background: #ff0000; background-color: #ff000030;}'+
		'.box.box-solid.box-success > .box-header {color: #000000; background: #00a65a; background-color: #b1ffcf;}'+
		'.btn-primary {background-color: #2e9eff !important; border-color: #2e9eff !important;}'+
		'.chatbox__header{ background: #2e9eff !important;}'+
		'.frompage .comment .commentBody{ background-color: transparent !important; border: 1px solid #000000;}' +
		'.full-block{box-shadow: none;}'+
		'.info-block .fa { color: #FFFFFF !important;}'+
		'.info-block span .fa.fa-long-arrow-right { color: #FFFFFF !important;}'+
		'.info-block span { color: #FFFFFF !important;}'+
		'.info-block { background-color: #000000 !important; box-shadow:none; border: 1px solid #FFFFFF;}'+
		'.info-block:hover { background-color: #606060 !important;}'+
		'.main-menu .main-menu-content nav ul li.nav-item a{ color: #FFFFFF !important; }' +
		'.main-menu .main-menu-content nav ul li.nav-item.active a{ background-color: transparent !important; border: 1px solid #FFFFFF;}' +
		'.main-menu{ background-color: #000000 !important; border-right: 1px solid #FFFFFF; }' +
		'body{ background-color: #000000 !important; }' +
		'figure.logo img{ box-shadow: none !important; }' +
		'header .header-user .fa {background-color: #0000 !important; color: #79c1ff !important;}'+
		'header.sticky{ background-color: black !important; box-shadow:none !important;}'
);

//GM_addStyle('.full-block{ background-color: #000000 !important; }');
//GM_addStyle('.table-striped > tbody > tr:nth-of-type(odd) { background-color: gray !important; }');
