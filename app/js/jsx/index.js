require('../../sass/header.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import autoFont from '../common/autoFont.js';
import addScript from '../common/addScript.js';
import Header from './_header.js';
import Head from '../temp/head.js';
var headData = {
  tit: '首页-知乎',
  shareName: '首页-知乎',
  shareUrl: 'http://fans.tv.sohu.com/h5/vstar/star_result.html',
  shareImg: 'http://tv.sohu.com/upload/clientapp/vstar/img/default_share_logo.jpg',
  shareDesc: '搜狐V星团是为粉丝精心打造的追星互动平台！只要你来，就有机会零距离接触明星！快为你最爱的明星点赞吧！',
  keywords: '搜狐V星团',
  desc: '搜狐V星团是为粉丝精心打造的追星互动平台！只要你来，就有机会零距离接触明星！快为你最爱的明星点赞吧！',
  admins: '25250114746637056375',
  favicon: '../img/favicon.ico',
}

autoFont.init();
Head.init(headData);



console.log(addScript.init('http://t.m.tv.sohu.com/mb/dist/js/baseLib.min.js?v=1.0.1'));



ReactDOM.render(<Header name="Nate" />, document.getElementById('header'));
