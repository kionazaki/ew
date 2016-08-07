import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "app/components/App/App";
import RootObject from "app/library/RootObject";
import getTokenAsync from "app/library/getTokenAsync";
import config from "app/config";
import generatorCSS from "app/css/generatorCSS";



// Добавляем в конец документа наш root-элемент
var rootObject = new RootObject(config.RootElementId);

// Асинхронно получаем Token
getTokenAsync(config.iframeSrc, _ewPars.id);

// Генерируем CSS
generatorCSS();

// Рендерим DOM
ReactDOM.render(<App/>, rootObject.element);


//API(
//    "http://kionazaki.github.io/tmp/dummy-check-domain.json",
//    (r)=>{console.log(r)},
//    (e)=>{console.log(e.status + ': ' + e.statusText);}
//);