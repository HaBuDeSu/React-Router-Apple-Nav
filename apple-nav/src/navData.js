import React from 'react';

const navItems = [
  {main: "logo",
  content: <img src="https://img.icons8.com/metro/26/000000/mac-os.png"/>,
  subItems: []},
  {main: "Mac",
  content: "Mac",
  subItems: [
    {id: "MacBook", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/macbook.png"/>, new: false},
    {id: "MacBook Air", img: <img src="https://img.icons8.com/windows/32/000000/laptop.png"/>, new: false},
    {id: "MacBook Pro", img: <img src="https://img.icons8.com/ios/50/000000/macbook.png"/>, new: true},
    {id: "iMac", img: <img src="https://img.icons8.com/ios/50/000000/macbook.png"/>, new: true},
    {id: "iMac Pro", img: <img src="https://img.icons8.com/ios/50/000000/imac-filled.png"/>, new: false},
    {id: "Mac Pro", img: <img src="https://img.icons8.com/ios/50/000000/desktop-mac.png"/>, new: true},
    {id: "Mac mini", img: <img src="https://img.icons8.com/material-rounded/24/000000/desktop-mac.png"/>, new: false},
    {id: "Compare", img: <img src="https://img.icons8.com/ios/50/000000/scales.png"/>, new: false},
    {id: "Pro Display XDR", img: <img src="https://img.icons8.com/ios/50/000000/tv.png"/>, new: true},
    {id: "Accessories", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/headphones.png"/>, new: false},
    {id: "Mojave", img: <img src="https://img.icons8.com/ios/50/000000/operating-system-filled.png"/>, new: false}
  ]},
  {main: "iPad",
  content: "iPad",
  subItems: [
    {id: "iPad Pro", img: <img src="https://img.icons8.com/ios/50/000000/smartphone-tablet.png"/>, new: false},
    {id: "iPad Air", img: <img src="https://img.icons8.com/wired/64/000000/ipad.png"/>, new: true},
    {id: "iPad", img: <img src="https://img.icons8.com/wired/64/000000/ipad.png"/>, new: false},
    {id: "iPad mini", img: <img src="https://img.icons8.com/wired/64/000000/ipad.png"/>, new: true},
    {id: "Compare", img: <img src="https://img.icons8.com/ios/50/000000/scales.png"/>, new: false},
    {id: "Apple Pencil", img: <img src="https://img.icons8.com/ios/50/000000/edit.png"/>, new: false},
    {id: "Smart Keyboard", img: <img src="https://img.icons8.com/ios/50/000000/keyboard.png"/>, new: false},
    {id: "Accessories", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/headphones.png"/>, new: false},
    {id: "iOS 12", img: <img src="https://img.icons8.com/ios/50/000000/ios-logo-filled.png"/>, new: false}
  ]},
  {main: "iPhone",
  content: "iPhone",
  subItems: [
    {id: "iPhone Xs", img: <img src="https://img.icons8.com/pastel-glyph/64/000000/iphone-x.png"/>, new: true},
    {id: "iPhone Xr", img: <img src="https://img.icons8.com/pastel-glyph/64/000000/iphone-x.png"/>, new: true},
    {id: "iPhone 8", img: <img src="https://img.icons8.com/pastel-glyph/64/000000/iphone-x.png"/>, new: false},
    {id: "iPhone 7", img: <img src="https://img.icons8.com/pastel-glyph/64/000000/iphone-x.png"/>, new: false},
    {id: "Compare", img: <img src="https://img.icons8.com/ios/50/000000/scales.png"/>, new: false},
    {id: "Apple Card", img: <img src="https://img.icons8.com/ios/50/000000/bank-card-back-side-filled.png"/>, new: false},
    {id: "AirPods", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/earbud-headphones.png"/>, new: false},
    {id: "Accessories", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/headphones.png"/>, new: false},
    {id: "iOS 12", img: <img src="https://img.icons8.com/ios/50/000000/ios-logo-filled.png"/>, new: false}
  ]},
  {main: "Watch",
  content: "Watch",
  subItems: [
    {id: "Apple Watch Series 4", img: <img src="https://img.icons8.com/ios/50/000000/apple-watch.png"/>, new: false},
    {id: "Apple Watch Nike+", img: <img src="https://img.icons8.com/ios/50/000000/apple-watch.png"/>, new: false},
    {id: "Apple Watch Hermes", img: <img src="https://img.icons8.com/ios/50/000000/apple-watch.png"/>, new: false},
    {id: "Apple Watch Series 3", img: <img src="https://img.icons8.com/ios/50/000000/apple-watch.png"/>, new: false},
    {id: "watchOS", img: <img src="https://img.icons8.com/ios/50/000000/ios-logo-filled.png"/>, new: false},
    {id: "Bands", img: <img src="https://img.icons8.com/dotty/80/000000/microsoft-band-2.png"/>, new: false},
    {id: "Accessories", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/headphones.png"/>, new: false},
    {id: "Compare", img: <img src="https://img.icons8.com/ios/50/000000/scales.png"/>, new: false}
  ]},
  {main: "TV",
  content: "TV",
  subItems: [
    {id: "Apple TV app", img: <img src="https://img.icons8.com/ios/50/000000/apple-tv.png"/>, new: true},
    {id: "Apple TV+", img: <img src="https://img.icons8.com/ios/50/000000/apple-tv.png"/>, new: true},
    {id: "Apple TV 4K", img: <img src="https://img.icons8.com/ios/50/000000/apple-tv.png"/>, new: false},
    {id: "Apple TV HD", img: <img src="https://img.icons8.com/ios/50/000000/apple-tv.png"/>, new: false},
    {id: "AirPlay", img: <img src="https://img.icons8.com/ios/50/000000/air-play.png"/>, new: false},
    {id: "Accessories", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/headphones.png"/>, new: false}
  ]},
  {main: "Music",
  content: "Music",
  subItems: [
    {id: "Apple Music", img: <img src="https://img.icons8.com/ios/50/000000/itunes.png"/>, new: false},
    {id: "iTunes", img: <img src="https://img.icons8.com/ios/50/000000/itunes.png"/>, new: false},
    {id: "HomePod", img: <img src="https://img.icons8.com/ios/50/000000/apple-homepod.png"/>, new: false},
    {id: "AirPods", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/earbud-headphones.png"/>, new: false},
    {id: "iPod touch", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/iphone.png"/>, new: true},
    {id: "Music Accessories", img: <img src="https://img.icons8.com/ios-glyphs/30/000000/headphones.png"/>, new: false},
    {id: "Gift Cards", img: <img src="https://img.icons8.com/ios/50/000000/bank-card-back-side-filled.png"/>, new: false}
  ]},
  {main: "Support",
  content: "Support",
  subItems: []},
  {main: "Search",
  content: <img src="https://img.icons8.com/ios-glyphs/50/000000/search.png"/>,
  subItems: []},
  {main: "Bag",
  content: <img src="https://img.icons8.com/ios/50/000000/shopping-bag.png"/>,
  subItems: []},
]

export default navItems;
