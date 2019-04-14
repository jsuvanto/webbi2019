import React, { FunctionComponent } from 'react';

const friendsInfo = [
  {
    name: 'ambientia',
    title: 'Ambientia',
    url: 'https://www.ambientia.fi/',
    logo: (
      <path className='f1' d='M373.7 41.4c-2.1 0-3.9.1-3.9 2.3v49.8c0 2.2 1.7 2.3 3.9 2.3 2.1 0 3.9-.1 3.9-2.3V43.7c0-2-1.7-2.3-3.9-2.3M226 40.6c-2.2 0-4 .1-4 2.3v50.6c0 2.2 1.7 2.3 3.9 2.3 2.1 0 3.9-.1 3.9-2.3V43c0-2.1-1.8-2.2-3.8-2.3m166 27.8c1-.5 3-.6 5.7-.6h24.8v12.8c0 3.7-.6 5.6-1.2 6.2-.3.3-.5.5-1.1.8-.6.1-1.4.3-2.7.3h-23c-2.6-.1-3.1-.8-3.7-1.5-.6-.8-1-2.4-1-3.8v-7.3c0-2.1.2-3.8.3-4.9.4-1.5 1.9-2 1.9-2M414 41.5h-17.8c-2.2 0-2.3-.1-3.1 1.6l-1 5c-.4.8.2 1.2.7 1.2H414c3.3 0 5.3.9 6.5 1.9 1.2 1 1.8 2.5 2 5.2v3.7h-24.8c-2.9 0-5.2.2-7.3.7-1.5.4-3 1-4.3 2-2 1.5-3 3.7-3.5 5.8-.5 2.2-.5 4.3-.5 7l.1 7.2c0 2.3.3 5.3 2.2 8.2 1.9 2.9 5.5 5 10 5h23.2c1.8 0 3.6-.3 5.3-.9 2.6-.9 4.8-3 6-5.5 1-2.5 1.4-5.4 1.4-8.8V56.5c0-4.3-1.4-8.3-4.5-11a17 17 0 0 0-11.8-4M210 76.5c0 5-1.1 7.7-2.6 9-1.4 1.5-3.8 2.6-8.3 2.7h-10.4c-2.3 0-4-.2-5.2-.6a5.1 5.1 0 0 1-3.2-2.8c-.8-1.5-1.3-4.2-1.3-8.1V61.4c0-5 .8-8.2 2-9.6.5-.7 1.2-1.2 2.4-1.6 1-.4 2.7-.8 4.9-.8H199c4.5 0 7 1 8.3 2.4 1.5 1.4 2.5 4 2.5 9l.1 15.6zm-10.5-35h-11.2c-2.8 0-5.4.3-7.6 1.2l-1.7.7V26.6c0-1.4-.3-2-2.1-1.4l-4.3.8c-.9.3-1.3 1-1.3 2.4V76.5c0 6 1 10.8 4 14.5 1.7 1.8 3.7 3 6 3.8 2.2.7 4.7 1 7.5 1H199c5.5 0 10.4-1.2 14-4.6 3.5-3.5 5-8.5 5-14.7V60.9c0-6.2-1.5-11.2-5-14.8-3.6-3.5-8.4-4.7-13.9-4.7h.4zm42.4 35V58c0-5.3 4.4-8.8 8.8-8.8h22v12.6c-.2 1.7-.5 2.4-1 3-.9 1.2-3.3 2.7-8.3 4.7-4.9 2-11.8 4.3-21.5 7.8v-.9zm38.6 13.1s-.2-1.5-2.4-1.5h-25c-4.4 0-7.1-1-8.5-2.5-.3-.1-.4-.4-.7-.7 13.4-5 21.6-7.5 27.1-10.1 2.8-1.5 5-2.9 6.8-5a13 13 0 0 0 2.7-7.4V48.6c0-5.4-2.4-7.2-8.3-7.2h-20.6C244.8 41.4 234 46 234 58v21.6c0 10.2 8.9 16.1 17.2 16.1H279c1.1 0 2.4 0 2-1.4l-.6-4.7zm56.2-63.8c-.7.4-1 1-1 2.2v48.4c0 6.2 1.4 11.2 5 14.8 3.6 3.5 8.5 4.6 14 4.6h9.8c1 0 1.3-.6 1-1.4l-1-5.1s-.5-1.3-1.6-1.3h-8.2c-4.5 0-7.2-1-8.6-2.4-1.5-1.5-2.6-4.1-2.6-9.2V67 49.3h11.3c.6 0 1.1-.1 1.4-.9l1.3-5.7c.1-.7-.3-1.2-2.3-1.2h-11.7V26c0-1.2-.5-1.5-1.2-1.3 0 0-4.8.7-5.6 1.2m-24.4 15.7h-8.4c-5.5 0-10.4 1.2-14 4.6-3.5 3.5-5 8.6-5 14.7v32.7c0 2.2 1.8 2.3 4 2.3 2.1 0 3.9-.1 3.9-2.3V61c0-5.2 1.1-7.7 2.5-9.2 1.5-1.4 4-2.4 8.6-2.4h8.4c4.5 0 7.1 1 8.5 2.4 1.5 1.5 2.6 4.1 2.6 9.2v32.6c0 2.2 1.8 2.3 4 2.3h-.2c2.2 0 4-.1 4-2.3V61c0-6.2-1.4-11.2-5-14.8-3.5-3.4-8.4-4.6-14-4.6M166.7 57.2c0-4.7-1.3-9-4.2-11.8-3-2.9-7-4-11.2-4h-5.4c-7.6 0-9.4 2.1-11.6 4.4-2.5-2.3-4.3-4.4-11.7-4.4h-5.4c-4.2 0-8.3 1.1-11.3 4-3 3-4.3 7.1-4.2 11.8v36.2c0 1.5.4 2.4 1.9 2.4h3.7c1.2 0 2.2-1 2.2-2.3V57.3c0-3.5 1-5.2 2-6.2s2.7-1.8 5.7-1.8h5.4c5.8 0 7.7 4.1 7.7 6.1V93.8c0 2.1 1.7 2.2 3.9 2.2h.1c2.2 0 3.8 0 3.8-2.2v-37-1c0-3.1 2-6.5 7.7-6.4h5.4c3 0 4.7.8 5.8 1.8 1.1 1 2 2.8 2 6.2v36.3c0 2.2 1.7 2.2 3.8 2.2 2.2 0 4-.5 4-2.7v-36M226 24.5c-2.1 0-4 0-4 1.7v4.3c-.1 2.1 1.5 1.8 3.7 1.9h.2c2 0 3.8.2 3.9-1.8v-4.4c0-1.7-1.6-1.6-3.8-1.7m147.7 0c-2.1 0-4-.3-4 1.7v4.4c0 1.5 1.5 1.8 3.7 1.9h.2c2 0 3.9-.3 3.9-1.9v-4.1c0-2-1.6-2-3.8-2m-314.7 44c1.1-.6 3-.6 5.8-.6h24.8v12.8c0 3.7-.7 5.6-1.2 6.2-.3.3-.5.5-1.1.7-.6.2-1.4.4-2.7.4h-23c-2.6-.1-3.1-.8-3.7-1.5-.6-.9-1-2.4-1-3.8v-7.4c0-2 .1-3.7.3-4.8.4-1.6 1.8-2 1.8-2m22.3-27H63.5c-2.1 0-2.2 0-3 1.7l-1 5c-.4.8.1 1.2.6 1.2h21.3c3.3 0 5.3.9 6.5 1.8 1.1 1.1 1.8 2.5 1.9 5.3v3.7H65c-2.9 0-5.2.2-7.3.7-1.6.4-3 1-4.3 2-2 1.5-3 3.7-3.5 5.8-.5 2.2-.5 4.3-.5 6.9v7.3c0 2.3.4 5.3 2.3 8.2 1.9 2.9 5.5 5 10 5H84.8c1.9 0 3.6-.3 5.4-.9 2.6-1 4.8-3 5.9-5.5 1.2-2.6 1.5-5.4 1.5-8.8V56.6c0-4.3-1.4-8.3-4.5-11-3.2-3-7.2-4-11.8-4m54.5 77.1c0-1-.7-1.8-2-1.8h-3.5v3.6h3.6c1.2 0 1.9-.8 1.9-1.8m-31.4 4.7h5l-2.5-6.5-2.5 6.5zM265 119c0-1.2-1-2.1-2.2-2.1h-3.1v4.3h3c1.4 0 2.3-.8 2.3-2.2m-131 3.1h-3.6v3.8h3.7c1.2 0 2-.7 2-1.9 0-1-.7-1.9-2-1.9m113.8 1.3h5l-2.5-6.5-2.5 6.5zM62 116.9h-2.5v9h2.5c2.9 0 4.5-2 4.5-4.5s-1.6-4.5-4.5-4.5m256 10.9c-2 0-3.7-.8-4.7-2l1-1.4c.9 1 2.2 1.8 3.9 1.8 2 0 2.6-1 2.6-2 0-1.2-1.4-1.6-3-2-2-.5-4.2-1-4.2-3.6 0-2 1.7-3.5 4.3-3.5 2 0 3.4.6 4.5 1.8l-1 1.3c-1-1-2.3-1.4-3.7-1.4-1.3 0-2.3.7-2.3 1.7 0 1.1 1.3 1.5 2.8 1.9 2 .5 4.4 1.1 4.4 3.7.1 1.8-1.2 3.7-4.5 3.7zm-10.7 0c-2.2 0-3.8-.8-4.8-2l1-1.4c.9 1 2.2 1.8 3.9 1.8 2 0 2.6-1 2.6-2 0-1.2-1.4-1.6-3-2-2-.5-4.2-1-4.2-3.6 0-2 1.7-3.5 4.3-3.5 2 0 3.4.6 4.5 1.8l-1 1.3c-1-1-2.3-1.4-3.7-1.4-1.3 0-2.3.7-2.3 1.7 0 1.1 1.3 1.5 2.8 1.9 2 .5 4.4 1.1 4.4 3.7.1 1.8-1.2 3.7-4.5 3.7zm-6.4-11h-6.4v3.7h6.2v1.5h-6.2v3.9h6.4v1.5h-8.3v-12.2h8.3v1.7zm-11 10.7h-1.7l-6.8-9.4v9.4h-1.8v-12.2h2l6.6 9.1v-9.1h1.8v12.2zM277.5 117H271v3.6h6.2v1.5H271v3.9h6.4v1.5h-8.2v-12.2h8.2v1.7zm-12.5 10.6l-2.9-4.7h-2.3v4.7h-1.8v-12.2h5.1c2.3 0 4 1.5 4 3.7 0 2.3-1.6 3.4-3.2 3.6l3.2 5h-2zm-10.5 0l-1-2.5h-6l-1 2.5h-2l4.9-12.2h2.3l5 12.2h-2.2zm-14.9 0l-2.6-9.5-2.5 9.5h-2l-3.5-12.2h2.1l2.5 9.8 2.7-9.8h1.5l2.6 9.8 2.5-9.8h2.1l-3.5 12.2h-1.9zm-12 0l-1-2.5h-6l-1 2.5h-2l4.9-12.2h2.3l5 12.2h-2.3zm-20.2.3c-2.2 0-3.8-.8-4.9-2l1.1-1.4c.9 1 2.2 1.8 3.8 1.8 2 0 2.7-1 2.7-2 0-1.2-1.4-1.6-3-2-2-.5-4.2-1-4.2-3.6 0-2 1.7-3.5 4.3-3.5 2 0 3.4.6 4.5 1.8l-1.1 1.3c-1-1-2.2-1.4-3.6-1.4-1.3 0-2.3.7-2.3 1.7 0 1.1 1.3 1.5 2.8 1.9 2 .5 4.3 1.1 4.3 3.7.1 1.8-1.2 3.7-4.4 3.7zm-11 0c-2 0-3.7-.8-4.7-2l1-1.4c.9 1 2.2 1.8 3.9 1.8 2 0 2.6-1 2.6-2 0-1.2-1.4-1.6-3-2-2-.5-4.2-1-4.2-3.6 0-2 1.7-3.5 4.3-3.5 2 0 3.4.6 4.5 1.8l-1 1.3c-1-1-2.3-1.4-3.7-1.4-1.3 0-2.3.7-2.3 1.7 0 1.1 1.3 1.5 2.8 1.9 2 .5 4.4 1.1 4.4 3.7.1 1.8-1.2 3.7-4.5 3.7zm-6.2-11h-6.4v3.7h6.2v1.5h-6.2v3.9h6.4v1.5h-8.3v-12.2h8.3v1.7zm-11 10.7h-1.7l-6.8-9.4v9.4h-1.8v-12.2h2l6.6 9.1v-9.1h1.8v12.2h-.1zm-13.1 0H164v-12.2h1.9v12.2zm-8.6.3c-2.1 0-3.7-.8-4.8-2l1-1.4c1 1 2.2 1.8 3.9 1.8 2 0 2.7-1 2.7-2 0-1.2-1.5-1.6-3-2-2-.5-4.3-1-4.3-3.6 0-2 1.8-3.5 4.3-3.5 2 0 3.5.6 4.5 1.8l-1 1.3c-1-1-2.3-1.4-3.6-1.4-1.3 0-2.3.7-2.3 1.7 0 1.1 1.3 1.5 2.8 1.9 2 .5 4.3 1.1 4.3 3.7 0 1.8-1.2 3.7-4.5 3.7zm-6.8-5.1c0 3-1.7 5-5.1 5-3.5 0-5.2-2-5.2-5v-7.4h1.8v7.4c0 2 1.2 3.4 3.4 3.4 2.1 0 3.3-1.3 3.3-3.4v-7.4h1.8v7.4zm-16.1 4.8h-6v-12.2h5.8c2.2 0 3.5 1.3 3.5 3.2 0 1.5-1 2.5-2.2 2.8 1.4.1 2.4 1.5 2.4 3 0 1.9-1.3 3.2-3.5 3.2zm-12.6 0h-7.4v-12.2h1.8v10.6h5.6v1.6zm-11 0l-1-2.5H104l-1 2.5h-2l5-12.2h2.2l5 12.2H111zm-13.1 0h-1.9V117h-3.8v-1.6h9.4v1.6h-3.7v10.6zm-7.6 0h-1.8v-12.2h1.8v12.2zm-4.1-1.9a6.3 6.3 0 0 1-5 2.2 6.1 6.1 0 0 1-6.3-6.4c0-3.8 2.9-6.3 6.4-6.3 2.3 0 3.8 1.1 4.8 2.4l-1.5.9c-.7-1-2-1.7-3.3-1.7-2.6 0-4.5 2-4.5 4.7 0 2.8 1.9 4.8 4.5 4.8 1.3 0 2.4-.7 3-1.3v-2.2h-3.9v-1.6h5.8v4.5zm-13.6 2h-1.8v-12.3h1.8v12.2zm-10.4 0h-4.4v-12.3h4.4c3.8 0 6.3 2.6 6.3 6.1 0 3.5-2.5 6.1-6.3 6.1zm-12.8 3.9h282v-20.2h-282v20.2zm171.7-8.1h5l-2.5-6.5-2.5 6.5z'/>
    )
  },{
    name: 'atostek',
    title: 'Atostek',
    url: 'https://www.atostek.com/',
    logo: (
      <g>
        <path className='f1' d='M395.5 115.3h15V92.5h3.3l12 22.8H444l-16.3-29.6 16.3-30h-18.1l-12.1 23.5h-3.3V55.7h-15v59.6zm-53.5-13c0 12.4 10.7 13.5 16 13.3 0 0 17.4-.3 25.7-1.4V101h-20.9c-2.3 0-5 0-5-4.2v-3.6l21.9-.7V79.3l-21.9-.9V75c0-2.2 0-4.6 4.2-4.6h21.7V57c-9.5-1.3-26.5-1.3-26.5-1.3-5.8 0-15.2 1.6-15.2 13.9v32.6zm-54.2-32.4h15v45.4h15.7V70H334V55.7h-46.2v14.2zm-51.4 6.4c0 3.8.7 17.3 16.1 17.3h7.4c3.5 0 4.3 1.2 4.3 3.6v1.3c0 2.4-1.3 3.3-4.8 3.3-7.6 0-17.8-.5-21-.9v12.3c8 2.8 9.8 2.8 25 2.8 8 0 16.5-3.1 16.5-18.3v-2.6c0-6.6-2.8-17.3-15.2-17.3h-7.6c-4.4 0-4.9-1.4-4.9-4V73c0-3.4 1.6-3.6 6-3.6 5.4 0 14.3.2 19.5.8V58c-6-2.2-13.1-3.4-25.2-2.7-9 .6-16 5.5-16 16.1v5zm-58 9.6c0 27.2 10 29.8 24.6 29.8 14.6 0 24.6-3.4 24.6-29.8 0-28-10.6-30.6-24.6-30.6-13.7 0-24.7 2.7-24.7 30.6zm15.7 0c0-14.6 1.7-16.4 8.9-16.4 7.4 0 8.8 2.6 8.8 16.4 0 12.7-1.8 15.6-8.8 15.6-8 0-8.9-3.1-8.9-15.6zm-68.2-16h15v45.4h15.7V70H172V55.7H126v14.2zM71 115.3h16.2l3.4-10.4h16l3.5 10.4h16.2l-18-59.6H89.5L71 115.3zm23.2-23.8l5-16 4.2 16h-9.2z'/>
        <path className='f2' d='M25 26.7l9.7-6.7H79L49.3 43z'/>
        <path className='f3' d='M49 43.4V83L25 65.4V27z'/>
      </g>
    )
  },{
    name: 'bitwise',
    title: 'Bitwise',
    url: 'https://bitwise.fi',
    logo: (
      <path className='f1' d='M32 48.4L42.4 38H447v74.7H32V48.4zM187.4 40v70.4h257.8V40H187.4zM60.3 77h11c3.8 0 7 .2 9.5.5 2.4.3 4.2.7 5.1 1.3 1 .6 1.6 1.5 2.1 2.8a21.8 21.8 0 0 1 0 10.7c-.4 1.5-1 2.4-1.8 3-.8.6-2.2 1-3.8 1.3-1.6.2-3.7.4-6.1.4h-35v5.8h31.8a75 75 0 0 0 12-.8c3.2-.5 5.6-1.3 7.2-2.4 1.6-1 2.8-2.5 3.6-4.6.8-2 1.2-4.6 1.2-7.6a24 24 0 0 0-.5-5.8c-.4-1.6-1-2.8-1.8-3.7a10 10 0 0 0-3.2-2.4c-1.3-.7-3-1.2-4.9-1.6 1-.3 2.7-.4 4.3-.8 1.6-.4 3-1.2 4.2-2.7.7-.8 1.1-2 1.5-3.6.3-1.5.5-3.3.5-5.5 0-2.8-.2-5-.9-6.9a8 8 0 0 0-3-4.1c-1.3-1-3.1-1.6-5.8-2-2.7-.4-5.9-.7-9.9-.7H41.3v5.9h32.9c3.2 0 5.8.1 7.8.4 2 .2 3.5.6 4.3 1 .8.6 1.3 1.4 1.7 2.6.4 1.2.6 2.8.6 4.6 0 2-.2 3.6-.6 5-.4 1.3-.9 2.2-1.7 2.8-.8.5-1.9 1-3.3 1.3-1.5.3-3.2.4-5.5.4h-36v5.6l18.8-.1zm50.8 25.8v-.1h8.3V47.5H111v55.3zm18.6-49.3H153v49.3h8.2V53.5h23.6v-5.9h-55.2v5.9zm59.7-6h8.4l17 47.9 17-48h11.5l17 48 16.8-48h8.5l-20.1 55.3H255L237.4 54l-17.3 48.7h-10.8l-19.9-55.2zm102.2 55.3V47.5h8.3v55.2h-8.3v.1zm23-18.1h8.5v1c0 3.4.3 5.8 1 7.4a6 6 0 0 0 3.1 3.3c1.2.6 3 .8 5.5 1.1a205.6 205.6 0 0 0 25-.4c2.3-.4 4-1 5.3-2 .6-.5 1-1.3 1.3-2.5.3-1.2.4-2.8.4-4.8 0-4.2-.5-6.7-1.6-7.8-1-1-3.3-1.7-6.5-1.8l-22.7-1.4c-6.8-.4-11.5-1.7-14.1-3.8-2.7-2.2-4-5.8-4-11 0-3.2.5-5.9 1.4-7.7.8-2 2.3-3.6 4.2-5 1.4-.9 3.6-1.7 6.2-2.1 2.7-.4 7.4-.7 14.2-.7h2.6c7.6 0 13 .3 16 .8 3.1.6 5.6 1.5 7.8 2.8 1.4 1 2.4 2.2 3.2 4 .6 1.5 1 3.6 1 6v2.7h-8.6v-1.3c0-2-.2-3.6-.6-4.7-.2-1-.8-1.9-1.4-2.4a11 11 0 0 0-5.5-1.6c-2.7-.3-7.6-.4-15-.4-7.5 0-12.2.7-14.2 1.9-2 1.3-3 3.8-3 7.7 0 3.2.7 5.3 2 6.5 1.3 1.3 3.7 2 7.3 2.2l23 1.5c6.2.4 10.4 1.6 12.8 3.7 2.4 2.1 3.8 5.6 3.8 10.7a25 25 0 0 1-1 8.1 9.8 9.8 0 0 1-3 4.5 16.4 16.4 0 0 1-7.2 3.2c-3 .7-8.6 1-16.6 1h-3.6c-6.8 0-11.6-.3-14.4-.8a20 20 0 0 1-7-2.7 11.1 11.1 0 0 1-4.2-4.8c-1-2-1.3-4.7-1.3-7.7v-2.7zM418.6 77h-11c-4 0-7 .1-9.6.4a14 14 0 0 0-5 1.3c-1 .6-1.6 1.5-2.2 2.8-.5 1.4-.6 3-.6 5 0 2.4.2 4.2.6 5.7.4 1.5 1 2.4 1.9 3 .8.6 2.1 1 3.7 1.3 1.6.2 3.8.4 6.2.4h34.8v5.8h-31.8a75 75 0 0 1-12-.8c-3.2-.5-5.6-1.3-7.2-2.4a9.2 9.2 0 0 1-3.6-4.6c-.8-2-1.2-4.6-1.2-7.6 0-2.3.2-4.2.6-5.8.4-1.6.9-2.8 1.7-3.7a10 10 0 0 1 3.2-2.4c1.3-.7 3-1.2 5-1.6-1.1-.3-2.7-.4-4.3-.8-1.6-.4-3.1-1.2-4.3-2.7-.7-.8-1-2-1.5-3.6-.2-1.5-.5-3.3-.5-5.5 0-2.8.3-5 1-6.9a8 8 0 0 1 2.9-4.1c1.3-1 3.2-1.6 5.8-2 2.7-.4 5.9-.7 9.9-.7h36v5.9h-32.8c-3.2 0-5.9.1-7.9.4-2 .2-3.4.6-4.2 1-.8.6-1.4 1.4-1.8 2.6-.4 1.2-.5 2.8-.5 4.6 0 2 .1 3.6.5 5 .4 1.3 1 2.2 1.8 2.8.8.5 1.8 1 3.3 1.3 1.5.3 3.2.4 5.5.4H437v5.6l-18.6-.1z'/>
    )
  },{
    name: 'cinia',
    title: 'Cinia',
    url: 'https://www.cinia.fi',
    logo: (
      <g>
        <path className='f1' d='M128 74.5l-1.2-.4a39.7 39.7 0 0 1 62.4-32.5c1 .6 1.4 1.2 1.3 2.4v2.8l-.1.6c-11.8-9.3-24.7-11.8-38.4-5.7-13.7 6.1-20.4 17.4-21.3 32.4l-.5.2c-.3 0-.5.2-.8.3a37 37 0 0 0 12.2 27.2 37.5 37.5 0 0 0 48.7 1.3c.5 1 0 1.4-.7 1.8a38.3 38.3 0 0 1-60.8-24.4c-.4-2-.5-3.9-.7-6m62.2-65.3a68.8 68.8 0 0 0-68.7 12.7 67.2 67.2 0 0 0-24 52.1l1.2.4a66.5 66.5 0 0 0 29.4 55.5 67 67 0 0 0 62.2 7.9v4A71.4 71.4 0 0 1 95 74.4l1.2-.5c.2-2.3.2-4.6.5-7a69.1 69.1 0 0 1 34.6-53.5A68 68 0 0 1 171 4.1c6.2.4 12.3 1.6 18.2 3.6.6.2 1.5.3 1 1.5m.1 121.6v4a64.9 64.9 0 0 1-89-60.4l1.2-.4c.2-2.5.2-4.8.5-7.2a62.8 62.8 0 0 1 31.4-47.7 62 62 0 0 1 54.6-4.6c.7.2 1.7.3 1.3 1.5-24.3-8.4-46.5-5.3-66 11.9a60.9 60.9 0 0 0-20.6 46l1.4.5a61.5 61.5 0 0 0 85.2 56.4m0-6.9v4.4a58 58 0 0 1-55.3-4.3 58 58 0 0 1-27.5-49.5l.8-.3.7-.2v-1.7a57.3 57.3 0 0 1 81-50.5c.3.2.2.2.2 1.1a55.9 55.9 0 0 0-59.2 7.7A54.9 54.9 0 0 0 110.2 74l1.4.5a54 54 0 0 0 25.9 46.3 54.4 54.4 0 0 0 53 3.2m-75.3-49.4l-1-.4A52.3 52.3 0 0 1 189 26.6c1.1.6 1.7 1.3 1.5 2.6v2.6a48 48 0 0 0-48.4.6A47.7 47.7 0 0 0 118 74.1l-1.4.5a49 49 0 0 0 24.5 42.6c16 9.4 32.6 9.2 49.2 1.2.5 1-.2 1.3-.8 1.6-3.1 1.2-6.1 2.6-9.3 3.5a51 51 0 0 1-63.6-38.7c-.7-3.3-1-6.7-1.4-10.3m6.5 0l-1.2-.4v-.8c.3-11 4-20.9 11.2-29.2a45 45 0 0 1 29-15.6c10-1.3 19.5.6 28.3 5.4 1.2.6 1.7 1.3 1.5 2.6v2.9c-14.3-8.7-29-10-43.6-2.3a41.3 41.3 0 0 0-22.6 37l-1.3.4a43.8 43.8 0 0 0 67.2 36.4c.6 1 .1 1.4-.6 1.7-2 1-4 2.3-6.2 3.1a44.7 44.7 0 0 1-61-34.6l-.7-6.6'/>
        <path className='f2' d='M325 50.4c3.2 0 5.6 2.4 5.6 5.5a5.5 5.5 0 1 1-11 0c0-3 2.3-5.5 5.4-5.5M320.5 98h9.2V64.5h-9.2V98zM262 98h9.2V64.6H262V98zm4.5-47.6c3.2 0 5.5 2.3 5.5 5.5 0 3-2.3 5.5-5.4 5.6-3 0-5.5-2.4-5.6-5.5 0-3 2.4-5.5 5.5-5.6m-11.2 11.1l-6 6.8a14.5 14.5 0 0 0-21.5-1.6c-4.6 4.6-4.4 14.3 0 19 4.4 4.6 14.3 6 21-1.6l6.3 6.1-1.7 1.9a23.5 23.5 0 0 1-34.7-2.2 22.4 22.4 0 0 1-4.5-14c0-10.2 6.5-19 16.2-21.6 9.6-2.6 18-.3 25 7.2m102.2 22.2h-7a7 7 0 0 0-1.7.4c-1.7.4-2.6 1.4-2.6 3-.1 1.6.7 2.8 2.4 3.4 4.3 1.5 10-.8 9-6.8m0-6.8c0-3.5-1.4-5.2-4.8-5.5-2.1-.1-4.2.3-6.2 1l-4.6 2-2-2.8-1.9-2.9 1.1-.8c5.8-3.6 12-5 18.6-3.5 5.9 1.2 9.2 5 9.3 11 .2 7.5 0 15 0 22.7H359l-.4-3.7-1.2 1c-5.3 5.5-15.1 3.6-18.7-2a11 11 0 0 1-1-10.2 8.3 8.3 0 0 1 4.5-4.5c2.5-1.3 5.3-1.7 8-1.7H357.9M280.3 98V64.5h9.3V68l1.7-1.3a12.4 12.4 0 0 1 20.4 8.9l.1 2.8v19.7h-9.3v-1.6-17.1L302 76c-.9-4.7-4.8-5.3-7.8-4.2a6.5 6.5 0 0 0-4.3 5c-.2 1.1-.3 2.3-.3 3.4V98h-9.4z'/>
      </g>
    )
  },{
    name: 'etteplanmore',
    title: 'Etteplan MORE',
    url: 'https://www.etteplanmore.com',
    logo: (
       <g>
        <path className='f1' d='M355.7 70l-1.3-1.2a1 1 0 0 0-.6-.2h-27.2a1 1 0 0 0-.7.2l-1.2 1.3a1 1 0 0 0-.2.6v26.1h6.6V75.6c0-.2.3-.4.5-.5h4.9c.2 0 .3.3.5.5v21.2h6.7V75.6c0-.2.2-.4.5-.5h4.8c.3 0 .5.3.5.5v21.2h6.7V70.7l-.5-.6m29.2 5.5v14c0 .3-.2.5-.5.5h-14a.5.5 0 0 1-.4-.5v-14c0-.2.2-.5.4-.5h14c.3.2.5.3.5.5zm6.5-5.5l-1.3-1.3a1 1 0 0 0-.6-.2h-24.1a1 1 0 0 0-.7.2l-1.2 1.3a1 1 0 0 0-.2.6v24.1c0 .3 0 .5.2.6l1.2 1.3.7.2h24.1c.3 0 .5 0 .6-.2l1.3-1.3.2-.6V70.7c0-.3 0-.5-.2-.6zm65 8.8c0 .2-.2.4-.4.4h-14a.5.5 0 0 1-.5-.4v-3.3c0-.2.2-.4.5-.5h14c.2 0 .4.3.5.5V79zM463 70l-1.2-1.3a1 1 0 0 0-.7-.2H437a1 1 0 0 0-.6.2l-1.3 1.3a1 1 0 0 0-.2.6v24c0 .2 0 .5.2.6l1.3 1.3.6.2h26.3v-6.7H442a.5.5 0 0 1-.5-.5v-3.2c0-.3.2-.5.5-.5h19c.3 0 .5 0 .7-.2l1.2-1.3c.2-.1.3-.4.3-.6V70.7c0-.3-.1-.5-.3-.6zm-42.4 8.8c0 .2-.2.4-.5.4h-14a.5.5 0 0 1-.5-.4v-3.3c0-.2.3-.4.5-.5h14c.3 0 .5.3.5.5V79m6.6-8.8l-1.2-1.3a1 1 0 0 0-.7-.2H399v28.2h6.7V86.4c0-.3.2-.5.5-.5h14c.2 0 .4.2.5.5v10.4h6.7v-12c0-.2-.1-.5-.3-.6l-1.5-1.5 1.5-1.5.3-.6v-10c0-.2-.1-.4-.3-.5'/>
        <path className='f2' d='M298.4 74.5c-3.8 0-8.7.5-10.5 3.9v-3.2h-7.4v22.4h7.6v-10c0-5 2-8.7 7.3-8.4 3.7.2 4.2 2.5 4.2 7v11.4h7.6V83c0-5-3.4-8.5-8.8-8.5zm-36.1 19.2c-2.8.3-4.6-.7-4.5-3.3.2-2.2 3.8-3.1 4.9-3.1l6.8.1c-.1 2.9-2 6-7.2 6.3zm13.9-10.4c0-7.2-5.8-8.8-11.2-8.8-3.4 0-8.4.4-11.2 1.5v5.4c3-1.5 6.2-2.3 9.5-2.5 4.6 0 6 1.7 6.2 5-2.3-.3-4.6-.4-6.8-.3-4.4.5-12.4 1.1-12.2 7.7 0 5.2 6.4 6.8 11 6.8 2 0 6.3-1.1 8.1-3.9l.1 3.4h6.8c-.2-1.9-.3-3.7-.3-5.6v-8.7zm-36.6 14.3h7.5V64.9h-7.5v32.7zm-17-4c-4 0-7.1-2.2-7.1-7.2 0-3.6 2-7.2 6.4-7.2 4.6 0 6.3 3.1 6.5 6.4.2 4.2-1.5 8-5.9 8zm3.4-19c-3.7 0-8.7.6-10.8 3.5h-.1v-3h-7.2V107h7.3l.3-12.3v.2c1.6 2.8 7.4 3 10.3 3 7 0 10.7-5.8 10.7-12.7A11.1 11.1 0 0 0 226 74.5zM185.1 84c.1-2.7 2.1-5.5 6.7-5.5 3 0 5.6 2.4 5.8 5.5h-12.5zm5.3-9.6c-7.3.2-12.8 4.9-12.8 12.6 0 7.6 7.5 11 15.2 11 3.4 0 6.7-.7 10-1.9v-4.7a23.8 23.8 0 0 1-8.5 2.5c-4 0-8.6-.8-9.6-5.8h20.4v-1.4c0-7-4-12.4-14.7-12.3zM172 93.6c-2.6 0-3.4-1.5-3.2-5.3v-8.8h6.8v-4.3h-6.8v-6.4l-7.3 1.8v4.6h-5v4.3h4.8v9.7c0 5.5 1.1 8 8.3 8.8 2.1 0 4.3 0 6.4-.4l-.3-4.4c-1.2.2-2.5.4-3.7.4zm-20-.1c-3.3 0-4-.9-4-5.2v-8.8h5.9v-4.3h-5.8v-6.5l-7.5 1.9v4.8l-6-.1v4.3h6v9.7c0 5.6 1.8 8.8 8.8 8.8 2.1 0 4.1-.3 5.7-.4v-4.3h-3.2v.1zm-35.6-9.4H130v-4.6h-13.7v-7.8h15V67h-22.8v30.6h23.1V93h-15.3V84zM16 57.2l4.7 6.4 14-5.5a2 2 0 0 1 2.1 0c1 1 2 2 2.7 3 1.2 1.4.8 2.7-1 3.3l-13 5.4 5.9 7.6L46 71a2 2 0 0 1 2.5.2c.2.4 1.6 2 3 3.5 1 1.7.7 2.6-.4 3.2l-14 6.8 7.1 9.5 26.3-14S48.3 57 47.3 55.7a2 2 0 0 1 .4-3l3.6-1.3c1.1-.5 1.6-.1 2.4.5.5.7 24.1 24.3 24.1 24.3l19.8-10.5-7.5-6.5-9.4 4.4c-.9.4-2.4 1-3.1.3-.9-.7-2.9-2.7-3.9-3.8-.8-1 .2-1.9.9-2.2l9.3-4-6.4-5.7L67 52.6c-.7.3-1.5.1-2.2-.4-1.1-1-2.2-2.1-3.2-3.3-.5-.7.4-1.4.6-1.5.6-.4 9.7-3.8 9.7-3.8L66.7 39 16 57.2z'/>
      </g>
    )
  },{
    name: 'futurice',
    title: 'Futurice',
    url: 'https://www.futurice.com',
    logo: (
      <path className='f1' d='M293.2 111h13.5V60.7h-13.5V111zm6.9-72a8 8 0 0 0-8.3 8c0 4.4 3.7 8 8.3 8 4.6 0 8.2-3.6 8.2-8 0-4.5-3.6-8-8.2-8zm111.1 41.4c0-5.1-2.4-10.3-10.7-10.3-7.1 0-10.5 5.1-11.1 10.3h21.8zm13.2 8.7h-35.2c.3 8.2 5.2 12.3 11.4 12.3 5.7 0 10-2.7 12.4-7.5l10.8 5.4A24.6 24.6 0 0 1 401 112c-16.7 0-25.4-10.3-25.4-26.4 0-16.1 9.8-25.9 24.7-25.9 14.3 0 24.2 7.4 24.2 23.5v6zm-79.5-18.4c5 0 8 2.5 9.8 7.6l12.5-3c-3.4-10.5-10.2-15.6-22.7-15.6-15.7 0-25.2 9.9-25.2 26.2 0 16.2 9.5 26.1 25.2 26.1 12.5 0 19.3-5.1 22.7-15.6l-12.5-3c-1.7 5-4.9 7.6-9.8 7.6-7.7 0-11.5-5-11.5-15.1 0-10.2 3.9-15.2 11.5-15.2zM252.4 111h13.4V71.6h18v-11h-31.4V111zM76 49c2.7 0 4.6.7 6.3 2.1l5.3-9C83.8 39.4 79.1 38 74 38 62.3 38 56 44.7 56 54.6V111h13.5V71.6H85v-11H69.5v-4.5c0-4.5 2.1-7.1 6.5-7.1zm96.3 52c-3.8 0-6.8-1.6-6.8-7V71.5h16.6v-11h-16.6V42H152v53.6c0 9.9 6.4 16.5 18 16.5 6.2 0 11-2 14.5-4.6l-5.2-9.3c-2.2 1.9-4 3-7 3zm52.3-10.6c0 7.7-3.1 10.6-9.1 10.6s-9.3-3-9.3-10.6V60.7h-13.5v29.6c0 14.6 7.8 21.7 22.8 21.7s22.6-7.1 22.6-21.7V60.7h-13.5v29.7zm-99.3-29.7h13.5v29.6c0 14.6-7.7 21.7-22.6 21.7-15 0-22.8-7.1-22.8-21.7V60.7H107v29.7c0 7.7 3.2 10.6 9.3 10.6 6 0 9.1-3 9.1-10.6V60.7z'/>
    )
  },{
    name: 'gofore',
    title: 'Gofore',
    url: 'https://gofore.com',
    logo: (
      <path className='f1' d='M84.9 67H68.2v13.8h18.6a13 13 0 0 1 11.7 6.4v-4.7c0-4.4-1.1-8-3.4-10.8A13 13 0 0 0 85 67zm1.9 17.4h-2.1v5.4a20.6 20.6 0 0 1-28.8-.6A20.6 20.6 0 0 1 56 60a20.6 20.6 0 0 1 29.4 0l9.7-9.8a34.4 34.4 0 0 0-48.9 0 34.3 34.3 0 0 0 0 49 34.4 34.4 0 0 0 51.3-2.7c-.3-4.2-2.1-12-10.6-12zm280.8-10.8c-2 2-4.6 3-7.4 3h-13.8V56H360c5.8 0 10.6 4.6 10.6 10.3 0 2.8-1 5.4-3 7.4zm16.8-7.5c0-13.3-11-24-24.4-24h-27.4v65h13.8V90.5h11.5l10 16.6h16.2l-12-19.8a24.3 24.3 0 0 0 12.3-21.2zM445 55.9V42.1h-45v65h45V93.2h-31.2V81.5h29.8V67.7h-29.8V55.9H445zm-252.5 51.2h13.8V81.5h30.4V67.7h-30.4V55.9h31.1V42.1h-45v65zM144 95.3a20.8 20.8 0 1 1 0-41.5 20.8 20.8 0 0 1 0 41.5zm0-55.3a34.6 34.6 0 1 0 0 69.2 34.6 34.6 0 0 0 0-69.2zm140 55.3a20.8 20.8 0 1 1 0-41.5 20.8 20.8 0 0 1 0 41.5zm0-55.3a34.6 34.6 0 1 0 .1 69.2 34.6 34.6 0 0 0 0-69.2z'/>
    )
  },{
    name: 'intopalo',
    title: 'Intopalo',
    url: 'https://www.intopalo.com',
    logo: (
      <g>
        <path className='f1' d='M249.2 84.1c0 3.7-.4 7.4.1 11 .2 1.4 2.2 3.5 3.4 3.5 1.3 0 3.7-2 3.7-3.2.4-7.5.4-15 0-22.5 0-1.2-2.4-3.1-3.7-3.1-1.1 0-3.1 2-3.3 3.4-.5 3.6-.2 7.3-.2 11zm-12.3-25h10.8l1.3 2.6 1.1-.6c6.5-5.4 15.4-3 18 5 .8 2.6 1.3 5.6 1.3 8.4 0 8 .2 16-.7 24-1.3 11-9.8 14.7-19.6 8.4v18.4h-12.2V59zM142.4 109H130V59.6c5.4-1.9 11-1 12.2 2.1 3-2.6 6.5-4.2 10.6-3.3 5.7 1.3 9.3 4.7 9.5 10.9.4 13 .1 26.2.1 39.6h-12c-.1-1.3-.3-2.5-.3-3.8V76.7v-2.6c-.3-2.6-1.1-4.8-4.2-4.5-2.8.1-3.5 2.1-3.5 4.6V109zm153.7-20.3c-3-.6-5.9-1-7.5 2-1.4 2.4-1.6 5.2.6 7.2 1 .9 3.8 1.3 4.7.5 3.2-2.4 2.2-6.2 2.2-9.7m-.5-9c1.3-5.6.6-9.3-1.7-10-3.5-1-4.8 1.3-5.5 4h-11.8c-.7-9.3 8.8-17 18.4-15.2 8.5 1.5 13.4 6.6 13.7 15.4.3 11.3 0 22.5 0 33.7 0 .4-.2.7-.4 1.3h-10.8l-1-2.7c-4.1 4.5-9 5-14 2.7-5.4-2.5-7-7.3-7.1-13-.1-10.6 5.2-16.2 16-16.2h4.2m63 4.5c0-3.6 0-7.2-.4-10.8-.1-1.5-1-3.2-2.5-3.6-1.9-.4-4.6 1.4-4.7 3.3-.3 7.3-.4 14.6 0 21.9 0 1.9 2.1 3.7 4 3.8 2.2.2 3.1-2.2 3.3-4.1.2-3.5.4-7 .4-10.5m11 15.4c-1.4 6.1-5.7 9.5-12 10.2-12.2 1.4-18.7-3.6-19.3-16-.4-7.6-.4-15.5.7-23.1 1.3-9 7.1-12.9 16.6-12.4 8.6.4 13.7 5.3 14.7 14.1.4 4 .3 22.2-.8 27.2m-153-15.3c0-3.5.3-7.1-.2-10.6-.2-1.5-2-3.5-3.5-4-2.3-.6-3.7 1.3-3.8 3.5 0 7.3-.2 14.6.1 21.9 0 1.4 2.2 3.5 3.7 3.7 2.4.3 3.6-1.9 3.7-4.2V84.2m13.1.9c-.4 3.7-.6 8.4-1.6 13-1.9 8.8-7.6 12.7-16.6 12-8.8-.8-13.4-4.2-14.3-13-1-8.7-.9-17.7.1-26.4 1-9.1 7-13 16.6-12.5 8.6.4 13.8 5.2 14.8 14l1 12.9m-38 13.5v9.9c-8.8 3-18.1-3.9-18.4-13.8-.3-6.7-.1-13.4-.1-20v-3.9l-4.4-.9v-8.6l4.2-.8V47.7h12.6v13l6 .4V70l-5.8.6v20c0 5.8.5 6.3 6 8m124-55.7h11.7l.2 47c0 6 .6 6.7 6.2 8.8v10c-10.2 1.8-18.2-4.2-18.4-13.8-.2-16.6 0-33.2 0-49.7l.3-2.3M109 109h12V64.3h-12V109z'/>
        <path className='f2' d='M278.4 140.2h4.8v-20.6h-4.8v20.6zm30.7 0h4.9v-20.6H309v20.6zm47.6-20.6h4.9v16h8.6v4.5h-13.5v-20.5zm-33 4.6l-5.3-.5v-4h15v4l-4.5.5v16h-5.3v-16zm29.2 16h-5.1l-1.3-3h-6l-1.4 3H334l7.4-20.7h4l7.5 20.7zm-7.6-7.4l-2-5.3-1.4 5.3h3.4zM304 126h-4.4l.2-.4c-1.6-.6-3.5-2-4.5-1.4-1 .5-1.5 2.7-1.8 4.3-.3 1.4-.4 3 0 4.3.4 1.1 1.5 2.6 2.4 2.8 1 0 2.3-1.2 3.4-1.8l-.4-1-2.6-.6v-3.7h7.5c1.4 7.9-2 12.5-8.9 11.9h-.6c-5.4-1-8-8-5.9-15.7 1.3-4.5 6-6.7 10.8-5 2.8 1 4.4 3 4.8 6.3m-41 10.3c2-.8 4.4-1.2 4.5-2 .5-3 .4-6.1 0-9-.2-.8-2.7-1.2-4.5-1.9v12.9zm-5 4.1v-21c4.9.5 10.5-2 13.9 3.1a14 14 0 0 1 .3 14c-3 5.9-9 3.3-14.2 4zM109 59.4c0-6.2-.3-12.5.1-18.6.5-5.8 4-9.9 9-12.5l11.6-5.8c4.8-2.5 8.5-6 10.9-11 .4-.8 1.1-1.6 1.8-2.5.6.5 1 .7 1 1-.2 6.6 0 13.3-1 19.8-1 6.4-5.5 10.8-11.2 13.6-3.6 1.8-7.3 3.2-11 5a15 15 0 0 0-8.5 9.2c-.3.8-1.1 1.5-1.7 2.3l-1-.5'/>
      </g>
    )
  },{
    name: 'netum',
    title: 'Netum',
    url: 'https://www.netum.fi',
    logo: (
      <path className='f1' d='M99.9 80.8c0-6.2-3.4-8.6-8.8-8.6-5.1 0-7.7 2.7-9.6 4.7v37.2H59V53.9h22.4v6.8c3.6-4 10.1-8.4 20.8-8.4 14 0 20 8.5 20 19V114H100V80.8zm61.8-28.4c17.7 0 31.3 12.8 31.3 34V91h-40.9c1.3 3.8 5.6 7.6 13.2 7.6 5.1 0 10.6-2 13.6-4.3l9.3 13.9c-6 5.1-16.7 7.4-25.7 7.4-18.9 0-33.6-11.8-33.6-31.7 0-17.4 13.3-31.5 32.8-31.5zm-9.9 24.3h20c-.7-2.6-2.8-7.2-10.1-7.2-6.9 0-9 4.5-9.9 7.2zm54.4 20V70h-10V50.4h10V34h22.5v16.4H265L241 70h-12.3v20.3c0 3 2 5.6 5 5.6 1.9 0 4-.6 4.4-1l4 16.9c-2.4 2.1-7.6 4-15.2 4-13.3-.2-20.7-6.5-20.7-19.1zm83.8 10.7a27.1 27.1 0 0 1-20.7 8.2c-14 0-20-8.4-20-18.7V72.8l22.4-19v33.5c0 6 3.3 8.5 8.8 8.5 5 0 7.6-2.7 9.5-4.8V54h22.4v60.3H290v-6.8zM398.5 79c0-3.6-1.9-6.8-6.9-6.8s-7.7 3-9.2 4.7v37.2H360V79c0-3.6-1.8-6.8-6.9-6.8-4.9 0-7.6 3-9 4.7v37.2h-22.5V53.9h22.3v6.8a27 27 0 0 1 20-8.4c8.5 0 14.6 3.1 17.3 10.6a26.1 26.1 0 0 1 21-10.6c11.2 0 18.7 5.7 18.7 18.1v43.7h-22.5V79h.1z'/>
    )
  },{
    name: 'nokianpanimo',
    title: 'Nokian Panimo',
    url: 'http://nokianpanimo.fi',
    logo: (
      <path d='M412.5 110.3l-4.9 4.7-7.8 8.3c-.7.6-1.1.8-1.9 0-1-.9 0-1.2.5-1.5l11.4-12c1-1 1.7-1.3 2.7-.3v.8zM93 83.5L103 71.7c3.1-3.6 6.2-7.3 9.4-10.8.7-.8.8-1.3-.1-2l-7.8-6.9c-.9-.7-1-1.2-.2-2.1l11.8-12.3c.7-.8 1-.9 1.9-.2 4.2 3.8 8.5 7.5 12.9 11.2 1 .8.4 1.3-.1 2L115 68.1c-1 1.1-1 1.9-.3 3.2l19.5 34c.7 1.3.7 2-.3 3.2-4.2 4.2-8.3 8.6-12.4 13-.8.8-1.2 1.1-2.2.3-3.6-3-7.3-5.9-11-8.7-1.2-.8-1-1.3-.2-2.2 1.5-1.5 3.6-3 3.9-4.8.2-1.6-1.6-3.6-2.5-5.4l-7.8-15.5c-.5-1-.8-1.2-1.7-.2-2 2.5-4.3 4.9-6.4 7.4-.5.7-.6 1.8-.7 2.7-.8 4 .6 6.9 4 9.1l3.1 2.9c1 .8.8 1.3 0 2.1l-11.5 12.5c-.8 1-1.3 1-2.3.2l-16.4-14c.8-.9 1.4-1.8 2.2-2.4 3-2.3 3.5-5.3 3.5-9-.2-18-.1-36-.1-54 0-1.2-.2-2.1-1.3-3-2-1.7-3.8-3.6-5.7-5.3-.7-.6-.6-1 0-1.5l13.5-13c.8-.8 1.3-1 2.2-.1l12.1 10.5c.8.7 1 1.2.2 1.8-3.3 2.7-3.7 6.2-3.6 10.1.2 13 0 25.9 0 38.8v2.6zm165.2 23.8V80c0-.8-3.3-4-4-3.8-.4.1-.7.6-1 .9l-8 9.5c-.7.9-1.2 1-2.1.2l-13.9-12.1c-.5-.4-.8-1.2-.8-1.8V53c0-.5.6-1.4 1-1.7L257 38.7c.5-.2 1.6 0 2 .3l12.5 10.4c1 .8 1 1.2 0 2.2-3 2.9-5.8 5.9-8.6 9-.8.8-1.3.7-2.1 0l-15.8-13.4-.1 1.6v17.4c-.1 1.7.3 2.9 1.7 4 3.4 2.6 3.3 2.7 6.4-.3l5.3-5.4c.8-1 1.5-1 2.5-.1l13.4 11.2c1 .7 1.3 1.6 1.3 2.8v25c0 .5-.4 1.2-.8 1.5a2808 2808 0 0 1-25.8 16.5c-.4.3-1.4.2-1.8-.2L226.4 104c-.8-.7-.7-1 0-1.8l10-11.1c.9-1 1.4-1 2.4-.2l17.9 15.2 1.5 1.2zM312 67.7l-19.1-11c-.4-.1-1.4.2-1.7.5l-5.4 6c-.6.8-1 .7-1.8.1-3.7-2.9-3.7-2.9-.6-6.4L299 39.4c.8-1 1.4-1 2.5-.4l26.6 16.1c1 .6 1.4 1.3 1.4 2.5v49.2c0 1.2-.4 1.8-1.5 2.3l-27 12.1c-.9.5-1.5.5-2.4-.2l-18-15.1c-1-1-.5-1.4.1-2.1l30-34.5 1.3-1.6zm-.1 9.5c-5.1 6-9.9 11.5-14.6 17.2-.2.2.1 1.2.5 1.5l10.3 9 3.8 3.3v-31zM168 38.6l1 .8 18 14.9c1.1 1 .8 1.5 0 2.4-10 11.4-19.8 22.8-29.8 34-1.3 1.6-1.2 2 .5 3 5.6 3 11.1 6.3 16.7 9.5 1 .6 1.4.7 2.2-.3 1.5-1.9 3.2-3.6 4.7-5.4.6-.8 1-.9 1.9-.3 1.2 1 2.6 1.7 3.9 2.6l-3 3.6-15 17c-1 1.2-1.7 1.6-3.2.6-8.7-5.4-17.4-10.6-26.2-15.8-1-.6-1.5-1.3-1.5-2.6V55.3c0-1.2.2-1.9 1.4-2.4l27.1-13.7 1.3-.6zm-12 13.6V83L170.4 66c.3-.3.3-1.2 0-1.5L156 52.2zm199.5-.8V100c0 1.2.3 2 1.3 2.7l6 4.5c.7.5 1 .8.2 1.6l-12 12.2c-.7.7-1.2 1-2 .2-3.3-2.7-6.7-5.2-10-8-.5-.4-.8-1.5-.8-2.3V60.9c0-1.9-.5-3-2-4.2-1.2-.9-3-2-3.3-3.2-.2-1 1.7-2.4 2.7-3.5l8.5-10.3c.8-1 1.2-1.1 2.2-.2l8 7c1 .7 1.4.8 2.2-.1 2.2-2.5 4.6-4.7 6.8-7.2.8-.8 1.2-.8 2-.1l10.8 9.5c.9.7.7 1 0 1.7l-9 9.2c-.7.8-1.2.9-2 0l-9.6-8zM222.4 108l-.7.8c-3.6 4-7.2 8.1-10.7 12.3-.7.7-1.2.7-2 .1-5-3.6-10-7.2-15.2-10.7-1-.7-1-1.2-.2-2 3-2.4 3.5-5.5 3.4-9.2-.2-13.4 0-26.8 0-40.2 0-1.3-.3-2.1-1.3-2.9-1.3-1-2.5-2.3-3.8-3.5-.7-.6-1-1-.1-1.8L202.5 39c.6-.6 1-.7 1.7 0 4 3.6 8 7.2 11.9 11 .3.2.3 1.2 0 1.4-1.9 1.5-2 3.4-2 5.7v42.5c0 1.3.4 2.2 1.4 3l6 4.5.9.7zm168.4-69.3l1.2 1 11.5 10.6c.9.8 1.2 1.4.2 2.1-1.7 1.2-1.9 2.9-1.9 4.8v43.5c0 1.3.3 2.2 1.3 3 1.9 1.4 3.6 3 5.4 4.5.7.6.7 1 0 1.7l-12 12.3c-.7.8-1.1.8-1.9.1l-13-10.6c-1-.8-1-1.4-.2-2.2 3-2.5 3.5-5.7 3.4-9.5-.2-13.3 0-26.6 0-39.8 0-1.6-.4-2.6-1.6-3.5l-3.4-2.6c-.8-.6-1-1-.2-2 3.6-4 7.2-8.3 10.8-12.5.2-.2.3-.5.4-1zm-90 84.5l27.7-12.5c1.4-.6 1.8-1.4 1.8-2.9V57.3l.6-.3c.3.8.9 1.5.9 2.2v50.1c0 1-.3 1.6-1.3 2L303 123.7c-.6.3-1.5 0-2.2 0v-.6zM191.2 56.9l-.8 1L161.1 92c-.8 1-1.4.7-2 0-.2-.1 0-1 .4-1.4l29.3-34c.3-.4.9-.9 1.3-.8.4 0 .7.6 1.2 1zm214.1 45c-.3-.7-.9-1.4-.9-2.1V56.3c0-2 2-2.6 3-3.9.2 0 1 .3 1.4.6.2.1.2.9 0 1-3.2 1.8-2.7 4.7-2.7 7.4V101.7l-.8.3zm-189 0c-.3-.7-.8-1.5-.9-2.3V56.4c0-2 2-2.7 3-4 .2 0 1.1.3 1.4.6.2.2.2.9 0 1-3 1.7-2.6 4.4-2.6 7v40.7l-.9.3zM94.6 78.8v-2c0-11.8.2-23.7-.1-35.5-.1-3.8 2-5.8 4-8.3h1c.7.5 1.1 1 .3 1.7l-.1.1c-3.4 2.7-3.7 6.4-3.6 10.4.2 10.3 0 20.6 0 30.8 0 1-.5 2-.8 3l-.7-.2zM358.8 56c.2.7.7 1.3.7 2v44l-.3 1.2c-.4-1.1-.8-1.8-.8-2.4V56l.4-.2zM190 101.6l-.8 1c-6 6.9-12 13.7-17.8 20.6-.8 1-1.4.7-2 0-.2-.1 0-1 .3-1.2l17.8-20.6c.3-.3.8-.6 1.2-.6.5 0 .8.5 1.3.8zM249 123l20.9-13.2c1.7-1 3.3-2.1 5-3 .4-.3 1.2 0 1.7.2-.2.4-.4.9-.8 1.1l-24.4 15.4c-1 .7-1.7.6-2.4-.5zm-131.6-52c-1.3-1.1-1.1-2 0-3.1l15.4-17c.4-.5.7-1 1.6-.3 1 .8.4 1.2-.1 1.7l-17 18.6zm159.6 6.9c.2.7.7 1.4.7 2.2v22.7c0 .9-.4 1.8-.7 2.7l-.4-.1V77.9l.4-.1zM123.3 125c-.4-.4-1-.7-1.1-1.1-.1-.2.2-.8.5-1.1l13-14.7c.3-.3.9-.3 1.3-.4 0 .7.3 1.5 0 1.9l-5.8 6.6-7 7.9-.9.9zm-33.2 0c-.4-.4-1-.6-1-1-.2-.3 0-.8.3-1l12.5-13.7c.3-.2 1-.2 1.3 0 .3.3.5 1.1.3 1.3l-12.6 13.8-.8.6zm123.6-1.2c-.8-.5-1.3-.8-1.6-1.2-.2-.1 0-.6.3-.9l11.6-12.3c.7-.7 1.2-.7 1.7 0 .2.3.2 1 0 1.3L214 123l-.4.8zm153.9-13l-.8.9-12.4 12.7c-.7.7-1.2.9-1.7 0-.2-.3-.1-1 .1-1.4l12.4-12.6c.3-.3.9-.4 1.3-.4s.7.5 1 .8zM275.4 52l-.8 1-9 9.1c-.6.6-1.1.9-1.6 0-.2-.3-.2-1 .1-1.3l9.1-9.2c.3-.3.8-.5 1.2-.4.4 0 .6.5 1 .8zm-19.6 27.7l-.8 1-7.3 8c-.3.4-1.2.6-1.6.4-1.2-.5-.5-1.1 0-1.7l7.3-8c.2-.3.8-.6 1-.6.5.1 1 .6 1.4 1zm-160.2 21c-.3-.8-.7-1.5-.9-2.3-1.2-5 3-7.2 5.7-10.3h.7c.1.6.5 1.5.2 1.9a19 19 0 0 1-3 3.2c-1.6 1.5-2.4 3-2 5.1v2.2l-.7.2zM247 51.3c.3.7.7 1.4.7 2 0 5 0 10-.2 15.2-.3-.5-.9-1-.9-1.6V51.5l.4-.2zM370 62.8c-.5-.4-1-.6-1.1-1-.2-.2 0-.7.2-1l7.3-7.2c.2-.2 1 .1 1.6.3 0 0 0 1-.2 1.2l-7.1 7-.7.7zm-76-2.6c-1.8 2-3.5 4-5.4 5.9-.2.3-1 .1-1.5 0-.1-.2-.2-1 0-1.3l3.9-4.4c1-1.3 1.8-1.5 3-.2zm14.7 22.2c.5 2 0 3.4-1.2 4.7-2.3 2.6-4.4 5.4-6.6 8.1-.5.6-.8 1.6-1.9.6-1-1-.2-1.3.2-1.8l9.5-11.6zm-151.9-4.8V56l.4-.2c.2.7.7 1.4.7 2.1v17.2c0 .9-.4 1.7-.6 2.6l-.5-.2z'/>
    )
  },{
    name: 'poas',
    title: 'POAS',
    url: 'https://poas.fi',
    logo: (
      <g>
        <path className='f1 t' d='M51.9 128.2h375.7V21.9H51.9z'/>
        <path className='f2' d='M50 131h379.5V20H50v111zm48.2-37.6a18 18 0 1 1 0-36 18 18 0 0 1 0 36zM63.6 31.8v10.3h59.6v25.3a26.5 26.5 0 0 0-49.3-3.1V49H63.6v70.4h10.3V86.5a26.5 26.5 0 0 0 49.3-3v18.3h11.6v-70H63.6zm125.1 31.4h10.7c4 0 6.9-1 8.5-2.8 1.7-1.9 2.5-4 2.5-6.5 0-2.8-1-5-2.7-6.7-1.9-1.7-4.6-2.5-8.4-2.5h-10.6v18.5zm.6 12.7v25.9h-16.7V32h27.6c6.2 0 10.9.7 14.1 2A20.9 20.9 0 0 1 227 53.4c0 3.5-.7 6.8-2 10a18.1 18.1 0 0 1-5.8 7.8c-2.5 1.9-5 3.1-7.3 3.7-2.3.6-6 1-11 1h-11.5zm73.5-31.6c-8.6 0-13 7.5-13 22.6 0 15 4.4 22.6 13 22.6 8.3 0 12.5-7.5 12.5-22.6 0-15-4.2-22.6-12.5-22.6m-.5 58.5c-9.4 0-16.7-3.5-21.9-10.5-5.1-7-7.7-15.6-7.7-25.6 0-10.2 2.6-18.7 7.8-25.5A26.5 26.5 0 0 1 263 30.9a25 25 0 0 1 22 11c5 7.2 7.5 15.5 7.5 25a42 42 0 0 1-7.6 25.5 26.2 26.2 0 0 1-22.5 10.4m54.4-28.3h14.9l-7.4-24.4-7.5 24.4zM335.5 32l21.9 69.8h-17.6l-4.3-14.4h-22.7l-4.4 14.4H294L316.5 32h19zm77.8 15.3l-14 4.7c-1.8-5.5-5.8-8.3-11.9-8.3-6.4 0-9.7 2.1-9.7 6.3 0 1.7.6 3 1.8 4.2 1.3 1.2 4 2.2 8.3 3a81.7 81.7 0 0 1 15.6 4.4 20 20 0 0 1 11.8 18c0 6.3-2.4 11.7-7.3 16.3-4.9 4.6-12 7-21.6 7a33 33 0 0 1-18.4-5c-5-3.2-8.3-8-10-14.4l15.3-3.5c1.7 6.6 6.4 9.8 14.2 9.8 3.7 0 6.5-.7 8.4-2.2a6.4 6.4 0 0 0 2.7-5.2c0-2-.8-3.6-2.5-4.7a30.3 30.3 0 0 0-9.6-3.2c-9-1.8-15.3-4.3-19.1-7.5-3.8-3.2-5.7-7.9-5.7-14 0-6.2 2.3-11.4 6.8-15.7a25.8 25.8 0 0 1 18.4-6.4c13.8 0 22.6 5.5 26.5 16.4'/>
      </g>
    )
  },{
    name: 'profit',
    title: 'Profit Software',
    url: 'https://profitsoftware.com',
    logo: (
      <path className='f1' d='M256.3 121.9c-.3.8-.7 1.4-1.2 2a5.5 5.5 0 0 1-4.2 1.8c-.9 0-1.6-.2-2.3-.5a5.5 5.5 0 0 1-3-3.3 7.2 7.2 0 0 1 0-4.9c.2-.7.6-1.3 1.1-1.9a5.4 5.4 0 0 1 4.2-1.7 6 6 0 0 1 2.4.4 5.4 5.4 0 0 1 3 3.2 7.2 7.2 0 0 1 0 4.9zm1-8.9a8 8 0 0 0-2.8-1.8 10 10 0 0 0-3.6-.5c-1.3 0-2.5.2-3.6.6a8.1 8.1 0 0 0-4.6 4.6 9.8 9.8 0 0 0-.7 3.7c0 1.3.2 2.5.7 3.6a8.2 8.2 0 0 0 4.6 4.5 10 10 0 0 0 7.2 0c1.1-.4 2-1 2.9-1.8a9.4 9.4 0 0 0 2.5-6.4c0-1.4-.2-2.6-.7-3.7-.4-1-1-2-1.8-2.8zm56.5-2l-3.3 12.2-3.8-12.1h-3l-3.7 12.1-3.2-12.1h-3.3l5 16.9h2.7l4-12.9L309 128h2.9l4.9-17h-3zm-50.2 17h3v-7h7.5v-2.8h-7.5v-4.4h8v-2.7h-11V128zm14-14.2h5V128h3.1v-14.2h5.2v-2.7h-13.4v2.7zm87.3-48.6V53.6h-18V42h-11.5v11.6h-8.2v11.6h8.2v13.1c0 6.3 1.6 11.3 4.7 14.7 3.4 3.8 8.5 5.7 15.1 5.7 2.8 0 7.1-1.2 9.7-2.5V84.7a18.2 18.2 0 0 1-9.7 2.9c-5.5 0-8.2-3.6-8.2-10.7V65.2h17.9zM353.3 128h11.6v-2.8h-8.6v-4.5h7.7v-2.8h-7.7v-4.1h8.6v-2.7h-11.6V128zm-30.5-6.5l2.6-6.8 2.6 6.8h-5.2zm1.4-10.4l-7.3 16.9h3.3l1.5-4h7.4l1.5 4h3.5l-7.3-17h-2.6zm19.1 7l-1.2.1h-2.4v-4.5h3.8c.4 0 .8.2 1.1.3l.8.7c.2.3.3.7.3 1.2 0 .6 0 1-.3 1.3a2 2 0 0 1-.9.7 4 4 0 0 1-1.2.3zm4.6.9c.6-.8 1-1.9 1-3 0-1-.2-1.8-.6-2.4a4 4 0 0 0-1.4-1.5 6 6 0 0 0-2-.8 12 12 0 0 0-2.3-.2h-5.9V128h3v-7.2h2.2l4 7.2h3.5l-4.4-7.5c1.2-.2 2.2-.7 2.9-1.5zm-110.7.1l-1.9-.8-2-.7c-.5-.2-1-.4-1.4-.8-.4-.3-.6-.7-.6-1.3a2 2 0 0 1 .9-1.6c.2-.2.5-.3.9-.4l1-.1c.6 0 1.1 0 1.6.3.6.2 1 .5 1.3 1l2.2-2.3a6 6 0 0 0-2.2-1.3 8.3 8.3 0 0 0-5-.1c-.7.2-1.3.5-1.9.9-.6.4-1 1-1.4 1.6-.4.6-.5 1.4-.5 2.3 0 1 .2 1.8.6 2.3.3.6.8 1.1 1.4 1.5a8 8 0 0 0 2 .8l1.9.7c.6.2 1 .5 1.5.8.4.4.6.8.6 1.5a2.2 2.2 0 0 1-1 1.7l-1 .4a4 4 0 0 1-2.9-.3c-.6-.3-1-.7-1.4-1.3l-2.3 2.2c.7.8 1.5 1.4 2.5 1.8a8.9 8.9 0 0 0 5.4.1c.7-.2 1.4-.5 2-1 .5-.4 1-1 1.3-1.6.3-.7.5-1.5.5-2.4 0-1-.2-1.8-.6-2.4-.4-.6-.9-1.1-1.5-1.5zm-99-31.6c-4.8 0-8.7-2.1-11.5-6.3l-.1-.2V69.7l.2-.3c3-4 7-6.2 11.4-6.2A12 12 0 0 1 150 75.3a12 12 0 0 1-11.7 12.2zm1-35.4c-3.8 0-7.8 1.2-11.1 3.2l-1.5 1v-4.4H115v76h11.6V94.5l1.5 1a21.5 21.5 0 0 0 27-3.6c4.1-4.4 6.4-10.2 6.4-16.5 0-6.3-2.3-12-6.4-16.4a21.7 21.7 0 0 0-15.9-6.8zm167 45.2h11.5V53.7h-11.6v43.6zM194.6 53.1c-3.8 0-8 1.2-11.6 3.3l-1.6.9v-3.6H170v43.6h11.5V69.7l.3-.3c2.9-3.2 7.3-5.2 11.4-5.2 1.5 0 6.2.2 9.6 2.3l-.4-11.8a18 18 0 0 0-7.7-1.6zm23.8 22c0-7 4.9-12.1 11.6-12.1 6.8 0 11.7 5 11.7 12.1 0 7-5 12.2-11.7 12.2-6.7 0-11.6-5.2-11.6-12.2zm34.9 0A23 23 0 0 0 230 52 23 23 0 0 0 207 75a23 23 0 0 0 23.2 23.2 23 23 0 0 0 23.3-23.2zm13.8 22.2h11.5v-32h17.5V53.7h-17.5v-1.4c0-7.5 3.4-11.2 10-11.2 2.6 0 5 .7 7.5 2.3V31.6c-2.6-1-4.8-1.6-8.7-1.6-12.6 0-20.3 8.3-20.3 21.8v2h-7.8v11.5h7.8v32zm52.8-58l-8-8.1-8.2 8 8.1 8.2 8.1-8.1z'/>
    )
  },{
    name: 'pyynikin',
    title: 'Pyynikin',
    url: 'http://pyynikin.com',
    logo: (
      <path className='f1' d='M440.1 53.4c-2.2 3.4-4 6.7-3.4 10.8v2.6c0 5.1-.5 10.3.2 15.4.6 5.2-2.1 9.7-2 14.8.2 7.7-.4 15.4 4.5 23.5l-13-2.8c-.9-1.3-2.8-3.6-4.2-6.1l-16.5-30.8v4.7c-.3 4.1.4 8.2-1.4 12.3-1 2.3-1.4 6 .8 9 1 1.3.6 3.7.8 5.6-3.3.4-13.3-1.6-16.7-3.1 2.2-7.3.7-14.6 1-21.8.2-7.4.3-15 0-22.4-.4-7.2 1.7-14.6-2.1-21.7 2.7-1 4.9-1 7.4 0 2.2 1 4.9.9 7.6 1.3 6.6 11.4 11.5 24.2 19.3 35.6 0-10.2 1.5-20.2-.4-30.7 6.1-1 12 2 18.1 3.8M199.2 32.9l2.1-2H214c7.7 12 13 25.9 23 39.3 0-11.2.3-20.6-.1-30-.2-3-2.2-5.9-3.6-9.3h21.2c-.7 1.6-1.7 2.9-2 4.2-.6 4-2 8-1.8 12.2.4 9.2 0 18.4.1 27.5 0 7.5-.7 15 2 22.6h-14.6C230.8 87 226 75 218 65c-.2-.2-.6 0-.9 0a85.2 85.2 0 0 0 1 31.8c-2.5.9-4.9 2-7.4 2.5-2.5.4-5 .1-8.2.1V72.7 44.3c0-5.6 0-5.6-3.3-11.4m149.4 2.8L328 64c5.3 14.1 15 25.6 20.2 40.8-5.8-3-10.7-1.5-15.9-2l-15.5-29.6-.8 3.3c-.9 7.3-3 15.7.4 24.6-3-.1-5.8 0-8.4-.5-2.4-.3-4.7-1.2-7.3-2V53.6c0-7 .7-13.9-2.3-21.3 6.8.2 12.9-.7 18.9 2.4-.9 3.2-2.3 6.8-2.8 10.6-.5 4.2 0 8.4 0 14 1.8-1.6 2.7-2.2 3.4-3 2.7-3.4 5-7.1 8-10.4a14 14 0 0 0 3.9-12c3.2.7 6 1.5 8.8 1.8 2.7.3 5.5 0 10 0m-288.8 21v27.2h6l7.3-7.5V62.2l-5.6-5.7h-7.7zM44.3 120c0-1-.6-2.4-.2-3 2.2-3.7 1.6-7.6 1.7-11.4V71.2c0-6.2-.5-12-6.8-17.1 13.7-3.5 25.7-7.8 38.9-6.1l9.1 9.1c.6 3.5 1.6 7.3 1.7 11 0 3.8-1 7.6-1.5 12L74.6 90.5c-4.7 3.7-9.6 1.9-15-.5v14c0 4-1 8.3 2.4 11.8L44.3 120zm72.9-54c3.5-10 7.7-18.5 8-28.1 4.8-1.7 10.1 1.4 14.9-2.2.4 2.8-.1 5-1 7.8-4.2 12.3-11 23.6-14.3 36.2-.4 1.6-1.5 3-1.5 4.5.4 7.2-1.4 14.5 1.8 21.4l-15.6 2.4V87.6c0-2.5-.4-4.7-1.6-7.1-4.3-8.5-8.1-17.3-12.2-25.9-1.4-2.9-3.2-5.5-5.2-9l2-2.5 14.6-2a81.5 81.5 0 0 0 10 24.8m77-33.2c-.7 3.3-1 6.4-2.1 9-3.8 9.1-7.8 18-12 27a30 30 0 0 0-3.4 14c.2 6 0 12 0 18.2H163V82.5c0-3.9-.7-7.3-2.6-11-5.2-10-9.5-20.6-14.1-31-.5-1.2-.5-2.7-.7-4.2l15.3-2.7.4 7 8.5 20.5c5.3-9.6 7.3-19 9.2-28.4h15.3zm70.9-2h17.8l2 2.1-3 6.2v52.2c0 2.4.8 4.8 1.4 7.7a26 26 0 0 1-16.7-2c.5-1.1 1.4-2.4 1.4-3.6 0-17.4.2-34.9-.1-52.3 0-3.3-1.8-6.6-2.8-10.3m93.1 6.5c2.4.6 4.9 1.6 7.4 1.9 2.8.3 5.7 0 8.3 0l3 3c-.7 1-1.9 2-2 3.2-.4 4.4-2.1 8.4-2 13 .5 14 .1 28.1.2 42.1 0 2.3.6 4.7 1 7.5l-14.8-2.2v-6-48c0-4.6-.7-9.2-1.1-14.5'/>
    )
  },{
    name: 'rdvelho',
    title: 'RD Velho',
    url: 'https://www.rdvelho.com',
    logo: (
      <g>
        <path className='f1' d='M79.3 61.5c0-6.8-4.5-9.7-13.6-9.7l-8 .3v20.4l8 .3c9.3 0 13.6-2.5 13.6-10.5v-.8zM92.9 109H81.1L67 83h-1.2c-2.4 0-6-.3-8-.4v24.6c0 1-.8 1.8-1.8 1.8H45V42.7s1-.3 3-.5c4.6-.8 11-1.2 17.7-1.2 14 0 26.1 5 26.1 20.5v.8c0 9.6-4.8 15.6-12.2 18.4l14.2 26.5c.2.3.2.5.2.7 0 .7-.4 1.1-1.1 1.1zm46.8-40.6c0-13.4-6.8-17-15.8-17-3.3 0-5.6.2-7.5.3v46.5c1.9.1 4.2.3 7.5.3 9 0 15.8-3.5 15.8-17V68.5zM123.9 109c-6.3 0-14.9-.6-17.6-1l-2.3-.5v-65l2.3-.4c2.7-.5 11.3-1.1 17.6-1.1 18 0 28.1 9.7 28.1 27.4v13.2c0 17.7-10.2 27.4-28 27.4z'/>
        <path className='f2' d='M213.9 44l-14.7 56.8c-2.2 8.4-8.7 9.2-12.5 9.2-3.9 0-10.3-.8-12.5-9.2L159 42h11.6c.8 0 1.5.7 1.7 1.5l13 54.5c.3 1 .5 1.4 1.4 1.4 1 0 1.2-.4 1.5-1.4l13.4-56h10.8c.9 0 1.6.6 1.6 1.5l-.1.5m47.3 63.7c-3 .5-6.5 1.3-17.2 1.3-11.8 0-21-3.1-21-18.4V59.4C223 44 232.2 41 244 41c10.8 0 14.3.8 17.2 1.3 1.3.1 1.8.6 1.8 1.8V50c0 1-.8 1.8-1.8 1.8h-18.5c-5.3 0-7.2 1.8-7.2 7.7V69h24.6c1 0 1.8.8 1.8 1.8v6.5c0 1-.8 1.8-1.8 1.8h-24.6v11.5c0 6 2 7.8 7.2 7.8h18.5c1 0 1.8.8 1.8 1.7v5.8c0 1.2-.5 1.7-1.8 1.8m50 1a97 97 0 0 1-15.4 1.3c-11.7 0-20.8-3.2-20.8-18.6V42h10.7c1 0 1.9.8 1.9 1.8v47.6c0 6 1.8 7.8 7 7.8h16.6c1 0 1.8.8 1.8 1.8v5.8c0 1.3-.5 1.7-1.8 2m60 .2h-10.8V79.6h-25.8v27.6c0 1-.8 1.8-1.8 1.8H322V42h10.8c1 0 1.8.7 1.8 1.7v24.9h25.8V42h10.8c1 0 1.8.7 1.8 1.7v63.5c0 1-.8 1.8-1.8 1.8m51.3-40c0-11.9-4.2-17.2-13-17.2s-13 5.3-13 17.1v12.2c0 11.8 4.2 17 13 17 8.7 0 13-5.2 13-17V68.9zm-13 40c-14.8 0-25.5-8.2-25.5-28V69c0-19.8 10.7-28 25.5-28S435 49.2 435 69v12c0 19.8-10.7 28-25.5 28z'/>
      </g>
    )
  },{
    name: 'solita',
    title: 'Solita',
    url: 'https://www.solita.fi',
    logo: (
      <path className='f1' d='M321.8 119.9h14.4V59.5h-14.4V120zM51 119h25V19H51v100zm187.8-29.3c0-9.3-7.2-16.7-16.3-16.8a16.6 16.6 0 0 0-16.5 17c0 9.3 7.2 16.7 16.3 16.7 9.3 0 16.6-7.4 16.5-17M222.5 121a30.8 30.8 0 0 1-31.3-31.1 31.1 31.1 0 1 1 62.3-.1 30.8 30.8 0 0 1-31 31.2M132.6 110l9.7-9.7a20.8 20.8 0 0 0 18.1 8c1.5 0 3.2-.1 4.2-1 1.3-1 2.8-2.8 2.9-4.3 0-1.5-1.5-3.7-2.9-4.3-3-1.4-6.5-2-9.9-3-2.5-.7-5.2-1.3-7.6-2.3-6.4-2.4-10.6-6.6-11-13.7-.6-7.2 2.3-13 8.5-16.6 10.2-5.7 20.6-5 30.6.8 2.6 1.6 4.8 3.9 7.2 5.8l-9.3 8.9a17.9 17.9 0 0 0-14.8-6.4c-1.4 0-3.2 0-4.2.9-1.4 1.1-3 2.9-3.1 4.5-.2 1.2 1.7 3.1 3.1 3.7 3.5 1.3 7.1 2 10.7 2.9 2 .5 4 1 6 1.8 6.5 2.3 11.1 6.3 12 13.5.8 7.7-2 14-8.5 18.4-7.9 5.1-16.5 4.8-25.2 2.8a30 30 0 0 1-16.5-10.7m296.5-30.7l-7 19.8h14l-7-19.8m29.6 41.8h-13.1c-.8-.1-2-1.2-2.4-2-2.8-7-2.8-7-10.4-7-4 0-8 .2-12 0-2.7-.2-3.9.7-4.4 3.2-.5 2-1.4 3.8-2 5.7h-14.8l6.2-16.7 15.2-41c.7-2.1 1.6-3.1 4-3 3 .3 6 0 9 .2 1 0 2.4.8 2.7 1.6l22 59M399 73.4h-17v46.5h-14.7V73.5h-17.2V59.6H399v13.8zM280.5 106H307V120h-40.7V59.6h14.3V106zm-199-36.2h25V20h-25V70zm-57.5 50h24.6V70H24v49.8z'/>
    )
  },{
    name: 'vincit',
    title: 'Vincit',
    url: 'https://www.vincit.fi',
    logo: (
      <path className='f1' d='M147.8 116.33h19.74V38.05H147.8v78.28zm273.38-59.08v-19.2H362v19.2h19.73v59.08h19.73V57.25h19.73zM100.93 77.28L81.2 38.05H59l42 79.37 41.86-79.37h-22.2l-19.73 39.23zM334 38.05v78.28h19.73V38.05h-19.73zM222.9 77.2L178.5 37v79.33h19.76V81.66l44.4 38.9V38.05h-19.73l-.03 39.16zm67.72 20.85c-11.38 0-20.59-9.36-20.59-20.93 0-11.56 9.21-20.92 20.6-20.92 6.32 0 12.01 2.92 15.76 7.48l14.48-13.29A40.4 40.4 0 0 0 290.75 37c-22.35 0-40.48 18-40.48 40.2 0 22.21 18.13 40.22 40.48 40.22a40.5 40.5 0 0 0 34.78-19.66l-17-10.33a20.52 20.52 0 0 1-17.9 10.63zM309.8 68.6c-.18.04-.3.22-.22.37a21.04 21.04 0 0 1 1.2 12.4c-.04.18.15.37.33.33 1.84-.26 3.04-.52 3.78-.78 6.86-2.51 7.16-9.63 6.97-12.36a1.1 1.1 0 0 0-1.2-1.01L309.8 68.6zm-14.11 1.6a2.56 2.56 0 0 0 2.54 2.6 2.56 2.56 0 0 0 2.55-2.6 2.56 2.56 0 0 0-2.55-2.58 2.53 2.53 0 0 0-2.54 2.59z'/>
    )
  },{
    name: 'wapice',
    title: 'Wapice',
    url: 'https://www.wapice.com/fi',
    logo: (
      <path className='f1' d='M67.6 60.9h16.2l5.9 19 12.1-19 12 19 7-19h13.8a37.7 37.7 0 0 0-33.4-22.6 36.8 36.8 0 0 0-33.6 22.6m33.6 66.4a51.1 51.1 0 0 1-49.8-52.2v-1H25l8.2-13.2h20.2A50.8 50.8 0 0 1 101.2 23c26.7 0 48.6 23.4 49.8 51 0 .3 0-.2 0 0h-21.8L114 104.6l-12.2-17.7-12.1 17.7L75 74H64.5v2a37.3 37.3 0 0 0 36.7 37.6 37 37 0 0 0 35-26.3h13.5c-5.3 22.9-25 40-48.5 40m318.6-39.7c-3.2 5.7-13.2 6.5-10.6-2.1h27c6.6-12.5 1.6-25.3-15-25.1-10.1.1-27.1 9.3-29.1 25-1.2 9.7 2.9 17.7 17 17.7a27.8 27.8 0 0 0 26-15l-15.3-.5zm-7.6-11.2c1.8-6.5 12.7-9.4 10.8 0h-10.8zm-19.2.8c1.1-10.2-3.6-16.8-14-16.8-15.4 0-26.9 11-29.4 24.4-.9 4.9-2.2 18.3 14.8 18.3 11.6 0 21.8-5.6 24.4-17l-13-1c-.9 2.2-3.5 6.9-7.7 6.9-5.7 0-.5-21.1 8.1-20.5 2 .2 1.9 3.6 1.6 6.3l15.2-.6zm-36-30.3h-17l-3.9 12.4h17l4-12.4zm-35.2 55.2h17l13.5-40.7h-16.5l-14 40.7zm-51 13h16l5.9-17.9c1.8 5.3 4.8 6 7.5 6 20.6 0 37-42.2 13.4-42.2-4.7 0-8 1.8-10.7 5.5h-.1l.9-5h-14.9l-18 53.6zm28.4-23c-6.7.6.7-21.3 7-20 5 1-2.5 19.7-7 20zm-46.7-18c1.1-4.2 13.8-6 10.1.5-3.5 1.7-29-.5-32.7 17.8-1.6 7.5 3.3 10.7 10.2 10.7 4.4 0 11.9-1.6 14.6-4.9h.2c-.1 1.3-.3 2.7 0 3.9h15.5c.3-5.4 8.8-22.1 8.8-31.6 0-9.7-8.8-10.1-16.1-10.1-9.8 0-22.6 3-25 13.7h14.4zm-4.8 16.5c-.3-5.6 8.9-6.2 11.7-7.4-1 6-3 8.5-8.1 9.5-.5.1-3.4.7-3.6-2.1zm-2-43.7h-13.9l-17.7 30.4 3.4-30.4h-14.3l-16.8 30.4 2.9-30.4h-16.7l-4 55.2H184l16.5-28.6-3.2 28.6h14.6l34-55.2z'/>
    )
  }
];

const Friends: FunctionComponent = () => (
  <div className='friends-container'>
    { friendsInfo.map((f, i) => {
        const order = { order: Math.floor(Math.random()*100) }
        return (
          <a key={i} style={order} id={f.name} className='friend' href={f.url} target='_blank'>
            <svg className='logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 150'>
              <title>{f.title}</title>
              {f.logo}
            </svg>
          </a>
        );
    }) }
  </div>
);

export default Friends;
