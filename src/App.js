import React from 'react';
import './style.css';
import 'animate.css';
import { AddShop } from './ui.js';
import 'chicken.png';
export default function App() {
  return (
    <div>
      <script src="ui.js" />
      <div id="border" class="action ">
        <h1 class="eggsText"> 5351 eggs </h1>
        <br></br>
        <br></br>
        <br></br>
        <a onClick={giveEggs}>
          <img src="chicken.png" />
        </a>
      </div>
      <div id="border" class="center updates">
        <h1> Updates </h1>
      </div>
      <div id="border" class="right shop">
        <div id="contents">
          <AddShop Name="Smasher" Pricer="900" />
        </div>
      </div>
    </div>
  );
}
