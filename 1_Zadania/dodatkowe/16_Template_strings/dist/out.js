!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n){document.addEventListener("DOMContentLoaded",(function(){var e=[2,15,268,288,[358,2,14,256],586].flat();e.sort((e,n)=>e-n),console.log(e);var n=e.map(e=>2*e);console.log(n);var o=n.reduce((e,n)=>e*n);console.log(o);(e=>`My name is ${e.name} ${e.lastName}\nI am ${(new Date).getFullYear()-e.yearOfBirth} years old.\nMy profession is ${e.proffesion}`)({name:"Vlad",lastName:"Drăculea",yearOfBirth:1431,proffesion:"Lord of Wallachia"});console.log("Sume dwóch liczb 2 i 4 to: 6");console.log("Moje imię i nazwisko to: Sebastian Machczyński");const t={value:"Send message",idName:"sendMsg",width:"100px",padding:"20px"};console.log(`\n        To jest button.\n        Jego szerokość to ${+t.width.match(/\d+/g)+2*+t.padding.match(/\d+/g)}px.\n        Napis, które na nim widnieje to ${t.value}\n    `)}))}]);