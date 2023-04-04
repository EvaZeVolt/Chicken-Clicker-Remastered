import React from 'react';
import './style.css';
import 'animate.css';
import { AddShop } from './ui.js';
import { loop } from './game.js'
export default function App() {
  return (
    <div>
      <script src="ui.js" />
      <div id="border" class="action ">
        <h1 class="eggsText"> 1 eggs </h1>
        <br></br>
        <br></br>
        <br></br>
        <a onClick="">
          <img
            src="https://raw.githubusercontent.com/EvaZeVolt/Chicken-Clicker-Remastered/main/chicken.png"
            width="350"
            height="450"
          />
        </a>
      </div>
      <div id="border" class="center updates">
        <h1> Updates </h1>
      </div>
      <div id="border" class="right shop">
        <div id="contents">
          <AddShop Name="Smasher" Price="90" />
          <AddShop Name="Smasher" Price="90" />
          <AddShop Name="Smasher" Price="90" />
          <AddShop Name="Smasher" Price="90" />
          <AddShop Name="Smasher" Price="90" />
          <AddShop Name="Smasher" Price="90" />
          <AddShop Name="Smasher" Price="90" />
        </div>
      </div>
    </div>
  );
}
