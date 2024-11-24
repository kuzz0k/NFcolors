import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

let colorsData = [
  {
    "color1": "#2f293d",
    "color2": "#4b4360",
    "color3": "#746699",
    "color4": "#ab9cc9",
    "color5": "#c5b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3c293d",
    "color2": "#604e43",
    "color3": "#999366",
    "color4": "#c9c79c",
    "color5": "#e0deb8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d2d29",
    "color2": "#435860",
    "color3": "#669991",
    "color4": "#9cc9c5",
    "color5": "#b8e0dc",
    "mainColor": "aqua"
  },
  {
    "color1": "#293d34",
    "color2": "#60434e",
    "color3": "#996691",
    "color4": "#c99cbf",
    "color5": "#e0b8d7",
    "mainColor": "magenta"
  },
  {
    "color1": "#343d29",
    "color2": "#534360",
    "color3": "#6a6699",
    "color4": "#a29cc9",
    "color5": "#beb8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#37293d",
    "color2": "#604743",
    "color3": "#998766",
    "color4": "#c9bc9c",
    "color5": "#e0d5b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d2a29",
    "color2": "#604344",
    "color3": "#996666",
    "color4": "#c99f9c",
    "color5": "#e0bab8",
    "mainColor": "red"
  },
  {
    "color1": "#3d292d",
    "color2": "#586043",
    "color3": "#729966",
    "color4": "#a3c99c",
    "color5": "#bee0b8",
    "mainColor": "green"
  },
  {
    "color1": "#3d293a",
    "color2": "#436049",
    "color3": "#739966",
    "color4": "#a4c99c",
    "color5": "#bfe0b8",
    "mainColor": "green"
  },
  {
    "color1": "#3d2f29",
    "color2": "#435660",
    "color3": "#669995",
    "color4": "#9cc9c9",
    "color5": "#b8e0e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#2c293d",
    "color2": "#604352",
    "color3": "#996c66",
    "color4": "#c9a49c",
    "color5": "#e0bfb8",
    "mainColor": "red"
  },
  {
    "color1": "#293d3d",
    "color2": "#604443",
    "color3": "#99667b",
    "color4": "#c99cac",
    "color5": "#e0b8c6",
    "mainColor": "red"
  },
  {
    "color1": "#292d3d",
    "color2": "#604358",
    "color3": "#996672",
    "color4": "#c99ca3",
    "color5": "#e0b8be",
    "mainColor": "red"
  },
  {
    "color1": "#293d32",
    "color2": "#604351",
    "color3": "#996695",
    "color4": "#c99cc3",
    "color5": "#e0b8da",
    "mainColor": "magenta"
  },
  {
    "color1": "#29373d",
    "color2": "#604e43",
    "color3": "#99666a",
    "color4": "#c99c9c",
    "color5": "#e0b8b8",
    "mainColor": "red"
  },
  {
    "color1": "#3d293c",
    "color2": "#436046",
    "color3": "#779966",
    "color4": "#a8c99c",
    "color5": "#c2e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#2d293d",
    "color2": "#474360",
    "color3": "#6d6699",
    "color4": "#a59cc9",
    "color5": "#c0b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#373d29",
    "color2": "#436058",
    "color3": "#668d99",
    "color4": "#9cbcc9",
    "color5": "#b8d4e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#3b293d",
    "color2": "#446043",
    "color3": "#809966",
    "color4": "#afc99c",
    "color5": "#c9e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#303d29",
    "color2": "#574360",
    "color3": "#736699",
    "color4": "#aa9cc9",
    "color5": "#c5b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#293d2a",
    "color2": "#436043",
    "color3": "#669966",
    "color4": "#9cc99f",
    "color5": "#b8e0ba",
    "mainColor": "green"
  },
  {
    "color1": "#3d292f",
    "color2": "#5c6043",
    "color3": "#789966",
    "color4": "#a9c99c",
    "color5": "#c3e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#29353d",
    "color2": "#5c4360",
    "color3": "#996687",
    "color4": "#c99cb6",
    "color5": "#e0b8cf",
    "mainColor": "magenta"
  },
  {
    "color1": "#2b3d29",
    "color2": "#5f4360",
    "color3": "#806699",
    "color4": "#b69cc9",
    "color5": "#cfb8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#3d3529",
    "color2": "#436044",
    "color3": "#669981",
    "color4": "#9cc9b7",
    "color5": "#b8e0d0",
    "mainColor": "aqua"
  },
  {
    "color1": "#292a3d",
    "color2": "#604355",
    "color3": "#99666c",
    "color4": "#c99c9e",
    "color5": "#e0b8ba",
    "mainColor": "red"
  },
  {
    "color1": "#3d2935",
    "color2": "#605c43",
    "color3": "#879966",
    "color4": "#b6c99c",
    "color5": "#cfe0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#293d37",
    "color2": "#474360",
    "color3": "#876699",
    "color4": "#bc9cc9",
    "color5": "#d5b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#29393d",
    "color2": "#435c60",
    "color3": "#669299",
    "color4": "#9cc0c9",
    "color5": "#b8d8e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#29303d",
    "color2": "#434f60",
    "color3": "#667a99",
    "color4": "#9cabc9",
    "color5": "#b8c5e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d293c",
    "color2": "#605243",
    "color3": "#999966",
    "color4": "#c6c99c",
    "color5": "#dee0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d3629",
    "color2": "#434c60",
    "color3": "#668c99",
    "color4": "#9cbbc9",
    "color5": "#b8d3e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#293d29",
    "color2": "#60435f",
    "color3": "#846699",
    "color4": "#b99cc9",
    "color5": "#d2b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#3c293d",
    "color2": "#5c4360",
    "color3": "#926699",
    "color4": "#c69cc9",
    "color5": "#deb8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#3d2939",
    "color2": "#60435c",
    "color3": "#996692",
    "color4": "#c99cc0",
    "color5": "#e0b8d8",
    "mainColor": "magenta"
  },
  {
    "color1": "#303d29",
    "color2": "#4f6043",
    "color3": "#7a9966",
    "color4": "#abc99c",
    "color5": "#c5e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#29393d",
    "color2": "#604b43",
    "color3": "#99666f",
    "color4": "#c99ca0",
    "color5": "#e0b8bc",
    "mainColor": "red"
  },
  {
    "color1": "#293d2f",
    "color2": "#434b60",
    "color3": "#726699",
    "color4": "#a99cc9",
    "color5": "#c4b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d3229",
    "color2": "#435160",
    "color3": "#669599",
    "color4": "#9cc3c9",
    "color5": "#b8dae0",
    "mainColor": "aqua"
  },
  {
    "color1": "#293d3c",
    "color2": "#43605c",
    "color3": "#669992",
    "color4": "#9cc9c6",
    "color5": "#b8e0de",
    "mainColor": "aqua"
  },
  {
    "color1": "#29293d",
    "color2": "#5f6043",
    "color3": "#998466",
    "color4": "#c9b99c",
    "color5": "#e0d2b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d3429",
    "color2": "#434e60",
    "color3": "#669199",
    "color4": "#9cbfc9",
    "color5": "#b8d7e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#293a3d",
    "color2": "#604943",
    "color3": "#996673",
    "color4": "#c99ca4",
    "color5": "#e0b8bf",
    "mainColor": "red"
  },
  {
    "color1": "#3d292b",
    "color2": "#604347",
    "color3": "#99666d",
    "color4": "#c99c9f",
    "color5": "#e0b8ba",
    "mainColor": "red"
  },
  {
    "color1": "#2f293d",
    "color2": "#604352",
    "color3": "#997266",
    "color4": "#c9a99c",
    "color5": "#e0c4b8",
    "mainColor": "red"
  },
  {
    "color1": "#293d3c",
    "color2": "#4e4360",
    "color3": "#936699",
    "color4": "#c79cc9",
    "color5": "#deb8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#293d39",
    "color2": "#4b4360",
    "color3": "#8d6699",
    "color4": "#c29cc9",
    "color5": "#dab8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#2a293d",
    "color2": "#434360",
    "color3": "#666699",
    "color4": "#9f9cc9",
    "color5": "#bab8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#2a3d29",
    "color2": "#435560",
    "color3": "#666c99",
    "color4": "#9c9ec9",
    "color5": "#b8bae0",
    "mainColor": "blue"
  },
  {
    "color1": "#2f3d29",
    "color2": "#435c60",
    "color3": "#667899",
    "color4": "#9ca9c9",
    "color5": "#b8c3e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d292d",
    "color2": "#60434b",
    "color3": "#996674",
    "color4": "#c99ca5",
    "color5": "#e0b8c0",
    "mainColor": "red"
  },
  {
    "color1": "#3d2a29",
    "color2": "#526043",
    "color3": "#669966",
    "color4": "#9cc99f",
    "color5": "#b8e0ba",
    "mainColor": "green"
  },
  {
    "color1": "#3d293c",
    "color2": "#604360",
    "color3": "#996699",
    "color4": "#c99cc6",
    "color5": "#e0b8de",
    "mainColor": "magenta"
  },
  {
    "color1": "#39293d",
    "color2": "#584360",
    "color3": "#8b6699",
    "color4": "#c09cc9",
    "color5": "#d8b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#293a3d",
    "color2": "#554360",
    "color3": "#996693",
    "color4": "#c99cc1",
    "color5": "#e0b8d9",
    "mainColor": "magenta"
  },
  {
    "color1": "#31293d",
    "color2": "#604352",
    "color3": "#997866",
    "color4": "#c9af9c",
    "color5": "#e0c9b8",
    "mainColor": "red"
  },
  {
    "color1": "#3a3d29",
    "color2": "#436055",
    "color3": "#669399",
    "color4": "#9cc1c9",
    "color5": "#b8d9e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#29373d",
    "color2": "#435860",
    "color3": "#668b99",
    "color4": "#9cbac9",
    "color5": "#b8d3e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#2d3d29",
    "color2": "#435860",
    "color3": "#667299",
    "color4": "#9ca3c9",
    "color5": "#b8bee0",
    "mainColor": "blue"
  },
  {
    "color1": "#293c3d",
    "color2": "#524360",
    "color3": "#996699",
    "color4": "#c99cc6",
    "color5": "#e0b8de",
    "mainColor": "magenta"
  },
  {
    "color1": "#293d2a",
    "color2": "#435260",
    "color3": "#666699",
    "color4": "#9f9cc9",
    "color5": "#bab8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#293d2c",
    "color2": "#60435a",
    "color3": "#8c6699",
    "color4": "#c19cc9",
    "color5": "#d9b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#293d35",
    "color2": "#444360",
    "color3": "#816699",
    "color4": "#b79cc9",
    "color5": "#d0b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#36293d",
    "color2": "#554360",
    "color3": "#856699",
    "color4": "#ba9cc9",
    "color5": "#d3b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#3d2930",
    "color2": "#60434f",
    "color3": "#99667a",
    "color4": "#c99cab",
    "color5": "#e0b8c5",
    "mainColor": "red"
  },
  {
    "color1": "#3d2d29",
    "color2": "#604743",
    "color3": "#996d66",
    "color4": "#c9a59c",
    "color5": "#e0c0b8",
    "mainColor": "red"
  },
  {
    "color1": "#3d2a29",
    "color2": "#435d60",
    "color3": "#669988",
    "color4": "#9cc9bd",
    "color5": "#b8e0d6",
    "mainColor": "aqua"
  },
  {
    "color1": "#29323d",
    "color2": "#605543",
    "color3": "#996f66",
    "color4": "#c9a69c",
    "color5": "#e0c1b8",
    "mainColor": "red"
  },
  {
    "color1": "#293c3d",
    "color2": "#436060",
    "color3": "#669999",
    "color4": "#9cc6c9",
    "color5": "#b8dee0",
    "mainColor": "aqua"
  },
  {
    "color1": "#3d3129",
    "color2": "#476043",
    "color3": "#669978",
    "color4": "#9cc9af",
    "color5": "#b8e0c9",
    "mainColor": "green"
  },
  {
    "color1": "#3d3b29",
    "color2": "#434460",
    "color3": "#668099",
    "color4": "#9cafc9",
    "color5": "#b8c9e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d2f29",
    "color2": "#4b6043",
    "color3": "#669972",
    "color4": "#9cc9a9",
    "color5": "#b8e0c4",
    "mainColor": "green"
  },
  {
    "color1": "#293d2d",
    "color2": "#604358",
    "color3": "#916699",
    "color4": "#c59cc9",
    "color5": "#dcb8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#393d29",
    "color2": "#5c6043",
    "color3": "#929966",
    "color4": "#c0c99c",
    "color5": "#d8e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d292b",
    "color2": "#43605f",
    "color3": "#669980",
    "color4": "#9cc9b6",
    "color5": "#b8e0cf",
    "mainColor": "aqua"
  },
  {
    "color1": "#3d2c29",
    "color2": "#4e6043",
    "color3": "#66996c",
    "color4": "#9cc9a4",
    "color5": "#b8e0bf",
    "mainColor": "green"
  },
  {
    "color1": "#37293d",
    "color2": "#496043",
    "color3": "#889966",
    "color4": "#b7c99c",
    "color5": "#d0e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d2929",
    "color2": "#435f60",
    "color3": "#669984",
    "color4": "#9cc9b9",
    "color5": "#b8e0d2",
    "mainColor": "aqua"
  },
  {
    "color1": "#2b3d29",
    "color2": "#476043",
    "color3": "#6d9966",
    "color4": "#9fc99c",
    "color5": "#bae0b8",
    "mainColor": "green"
  },
  {
    "color1": "#3d2939",
    "color2": "#43604b",
    "color3": "#6f9966",
    "color4": "#a0c99c",
    "color5": "#bce0b8",
    "mainColor": "green"
  },
  {
    "color1": "#292f3d",
    "color2": "#605a43",
    "color3": "#997766",
    "color4": "#c9ae9c",
    "color5": "#e0c8b8",
    "mainColor": "red"
  },
  {
    "color1": "#3c3d29",
    "color2": "#436052",
    "color3": "#669999",
    "color4": "#9cc6c9",
    "color5": "#b8dee0",
    "mainColor": "aqua"
  },
  {
    "color1": "#29313d",
    "color2": "#60435f",
    "color3": "#99667e",
    "color4": "#c99cae",
    "color5": "#e0b8c8",
    "mainColor": "red"
  },
  {
    "color1": "#3d2c29",
    "color2": "#435a60",
    "color3": "#66998c",
    "color4": "#9cc9c1",
    "color5": "#b8e0d9",
    "mainColor": "aqua"
  },
  {
    "color1": "#35293d",
    "color2": "#604443",
    "color3": "#998166",
    "color4": "#c9b79c",
    "color5": "#e0d0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d293d",
    "color2": "#436044",
    "color3": "#7b9966",
    "color4": "#acc99c",
    "color5": "#c6e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#2f293d",
    "color2": "#566043",
    "color3": "#999566",
    "color4": "#c9c99c",
    "color5": "#e0e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#293d2a",
    "color2": "#60435d",
    "color3": "#886699",
    "color4": "#bd9cc9",
    "color5": "#d6b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#373d29",
    "color2": "#586043",
    "color3": "#8b9966",
    "color4": "#bac99c",
    "color5": "#d3e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#36293d",
    "color2": "#4c6043",
    "color3": "#8c9966",
    "color4": "#bbc99c",
    "color5": "#d3e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#292d3d",
    "color2": "#434b60",
    "color3": "#667499",
    "color4": "#9ca5c9",
    "color5": "#b8c0e0",
    "mainColor": "blue"
  },
  {
    "color1": "#293d2f",
    "color2": "#43604b",
    "color3": "#669974",
    "color4": "#9cc9ab",
    "color5": "#b8e0c5",
    "mainColor": "green"
  },
  {
    "color1": "#373d29",
    "color2": "#4e4360",
    "color3": "#666a99",
    "color4": "#9c9cc9",
    "color5": "#b8b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#32293d",
    "color2": "#516043",
    "color3": "#959966",
    "color4": "#c3c99c",
    "color5": "#dae0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d3c29",
    "color2": "#43604e",
    "color3": "#669993",
    "color4": "#9cc9c7",
    "color5": "#b8e0de",
    "mainColor": "aqua"
  },
  {
    "color1": "#292f3d",
    "color2": "#60435c",
    "color3": "#996678",
    "color4": "#c99ca9",
    "color5": "#e0b8c3",
    "mainColor": "red"
  },
  {
    "color1": "#3d2f29",
    "color2": "#604b43",
    "color3": "#997466",
    "color4": "#c9ab9c",
    "color5": "#e0c5b8",
    "mainColor": "red"
  },
  {
    "color1": "#3d3929",
    "color2": "#43604b",
    "color3": "#66998d",
    "color4": "#9cc9c2",
    "color5": "#b8e0da",
    "mainColor": "aqua"
  },
  {
    "color1": "#293d39",
    "color2": "#436058",
    "color3": "#66998b",
    "color4": "#9cc9c0",
    "color5": "#b8e0d8",
    "mainColor": "aqua"
  },
  {
    "color1": "#2f3d29",
    "color2": "#5a4360",
    "color3": "#776699",
    "color4": "#ae9cc9",
    "color5": "#c8b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d293a",
    "color2": "#605543",
    "color3": "#939966",
    "color4": "#c1c99c",
    "color5": "#d9e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d3929",
    "color2": "#605843",
    "color3": "#998b66",
    "color4": "#c9c09c",
    "color5": "#e0d8b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#293d2f",
    "color2": "#604356",
    "color3": "#956699",
    "color4": "#c99cc9",
    "color5": "#e0b8e0",
    "mainColor": "magenta"
  },
  {
    "color1": "#3a3d29",
    "color2": "#494360",
    "color3": "#667399",
    "color4": "#9ca4c9",
    "color5": "#b8bfe0",
    "mainColor": "blue"
  },
  {
    "color1": "#2d3d29",
    "color2": "#4b6043",
    "color3": "#749966",
    "color4": "#a5c99c",
    "color5": "#c0e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#293d31",
    "color2": "#434760",
    "color3": "#786699",
    "color4": "#af9cc9",
    "color5": "#c9b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#293d2d",
    "color2": "#436047",
    "color3": "#66996d",
    "color4": "#9cc9a5",
    "color5": "#b8e0c0",
    "mainColor": "green"
  },
  {
    "color1": "#293d37",
    "color2": "#604349",
    "color3": "#996688",
    "color4": "#c99cb7",
    "color5": "#e0b8d0",
    "mainColor": "magenta"
  },
  {
    "color1": "#323d29",
    "color2": "#554360",
    "color3": "#6f6699",
    "color4": "#a69cc9",
    "color5": "#c1b8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#293d3b",
    "color2": "#604344",
    "color3": "#996680",
    "color4": "#c99caf",
    "color5": "#e0b8c9",
    "mainColor": "red"
  },
  {
    "color1": "#2d293d",
    "color2": "#586043",
    "color3": "#999166",
    "color4": "#c9c59c",
    "color5": "#e0dcb8",
    "mainColor": "yellow"
  },
  {
    "color1": "#29373d",
    "color2": "#584360",
    "color3": "#99668d",
    "color4": "#c99cbc",
    "color5": "#e0b8d4",
    "mainColor": "magenta"
  },
  {
    "color1": "#3d2930",
    "color2": "#436057",
    "color3": "#669973",
    "color4": "#9cc9aa",
    "color5": "#b8e0c5",
    "mainColor": "green"
  },
  {
    "color1": "#3d3729",
    "color2": "#436047",
    "color3": "#669987",
    "color4": "#9cc9bc",
    "color5": "#b8e0d5",
    "mainColor": "aqua"
  },
  {
    "color1": "#34293d",
    "color2": "#4e6043",
    "color3": "#919966",
    "color4": "#bfc99c",
    "color5": "#d7e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#2a293d",
    "color2": "#604352",
    "color3": "#996666",
    "color4": "#c99f9c",
    "color5": "#e0bab8",
    "mainColor": "red"
  },
  {
    "color1": "#29343d",
    "color2": "#605343",
    "color3": "#996a66",
    "color4": "#c9a29c",
    "color5": "#e0beb8",
    "mainColor": "red"
  },
  {
    "color1": "#353d29",
    "color2": "#43605c",
    "color3": "#668799",
    "color4": "#9cb6c9",
    "color5": "#b8cfe0",
    "mainColor": "aqua"
  },
  {
    "color1": "#2a293d",
    "color2": "#5d6043",
    "color3": "#998866",
    "color4": "#c9bd9c",
    "color5": "#e0d6b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#2c293d",
    "color2": "#5a6043",
    "color3": "#998c66",
    "color4": "#c9c19c",
    "color5": "#e0d9b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d2934",
    "color2": "#436053",
    "color3": "#66996a",
    "color4": "#9cc9a2",
    "color5": "#b8e0be",
    "mainColor": "green"
  },
  {
    "color1": "#3c3d29",
    "color2": "#606043",
    "color3": "#999966",
    "color4": "#c6c99c",
    "color5": "#dee0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#39293d",
    "color2": "#604b43",
    "color3": "#998d66",
    "color4": "#c9c29c",
    "color5": "#e0dab8",
    "mainColor": "yellow"
  },
  {
    "color1": "#293d36",
    "color2": "#436055",
    "color3": "#669985",
    "color4": "#9cc9ba",
    "color5": "#b8e0d3",
    "mainColor": "aqua"
  },
  {
    "color1": "#3d2937",
    "color2": "#605843",
    "color3": "#8d9966",
    "color4": "#bcc99c",
    "color5": "#d4e0b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d3729",
    "color2": "#434960",
    "color3": "#668899",
    "color4": "#9cb7c9",
    "color5": "#b8d0e0",
    "mainColor": "aqua"
  },
  {
    "color1": "#293d36",
    "color2": "#60434c",
    "color3": "#99668c",
    "color4": "#c99cbb",
    "color5": "#e0b8d3",
    "mainColor": "magenta"
  },
  {
    "color1": "#3d3629",
    "color2": "#605543",
    "color3": "#998566",
    "color4": "#c9ba9c",
    "color5": "#e0d3b8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d2937",
    "color2": "#604358",
    "color3": "#99668b",
    "color4": "#c99cba",
    "color5": "#e0b8d3",
    "mainColor": "magenta"
  },
  {
    "color1": "#3c3d29",
    "color2": "#464360",
    "color3": "#667799",
    "color4": "#9ca8c9",
    "color5": "#b8c2e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d292f",
    "color2": "#43605a",
    "color3": "#669977",
    "color4": "#9cc9ae",
    "color5": "#b8e0c8",
    "mainColor": "green"
  },
  {
    "color1": "#292b3d",
    "color2": "#434760",
    "color3": "#666d99",
    "color4": "#9c9fc9",
    "color5": "#b8bae0",
    "mainColor": "blue"
  },
  {
    "color1": "#293c3d",
    "color2": "#604643",
    "color3": "#996677",
    "color4": "#c99ca8",
    "color5": "#e0b8c2",
    "mainColor": "red"
  },
  {
    "color1": "#393d29",
    "color2": "#4b4360",
    "color3": "#666f99",
    "color4": "#9ca0c9",
    "color5": "#b8bce0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d2931",
    "color2": "#5f6043",
    "color3": "#7e9966",
    "color4": "#aec99c",
    "color5": "#c8e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#3d3c29",
    "color2": "#605c43",
    "color3": "#999266",
    "color4": "#c9c69c",
    "color5": "#e0deb8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d2937",
    "color2": "#43604e",
    "color3": "#6a9966",
    "color4": "#9cc99c",
    "color5": "#b8e0b8",
    "mainColor": "green"
  },
  {
    "color1": "#3d2932",
    "color2": "#436055",
    "color3": "#66996f",
    "color4": "#9cc9a6",
    "color5": "#b8e0c1",
    "mainColor": "green"
  },
  {
    "color1": "#292b3d",
    "color2": "#605f43",
    "color3": "#998066",
    "color4": "#c9b69c",
    "color5": "#e0cfb8",
    "mainColor": "yellow"
  },
  {
    "color1": "#3d3d29",
    "color2": "#444360",
    "color3": "#667b99",
    "color4": "#9cacc9",
    "color5": "#b8c6e0",
    "mainColor": "blue"
  },
  {
    "color1": "#29303d",
    "color2": "#605743",
    "color3": "#997366",
    "color4": "#c9aa9c",
    "color5": "#e0c5b8",
    "mainColor": "red"
  },
  {
    "color1": "#313d29",
    "color2": "#435f60",
    "color3": "#667e99",
    "color4": "#9caec9",
    "color5": "#b8c8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#293d2c",
    "color2": "#434e60",
    "color3": "#6c6699",
    "color4": "#a49cc9",
    "color5": "#bfb8e0",
    "mainColor": "blue"
  },
  {
    "color1": "#3d292a",
    "color2": "#556043",
    "color3": "#6c9966",
    "color4": "#9ec99c",
    "color5": "#bae0b8",
    "mainColor": "green"
  }
]

const ColorsDisplay = ({ category, currentPage, setCurrentPage }) => {
  // const [colorsData, setColorsData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('../../data/colors.json')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Ошибка при чтении файла!');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setColorsData(data))
  //     .catch(error => setError(error.message));
  // }, []);

  // if (error) {
  //   return <div>Ошибка: {error}</div>;
  // }


  const itemsPerPage = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let filteredItems = colorsData

  if(category){
    filteredItems = colorsData.filter(palette => palette.mainColor === category)
  }

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // useEffect(() => {
  //   navigator.permissions.query({ name: "clipboard-write" })   
  // }, [])
  
  
  function copyText(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <div className="page-container">
      <div id="colors-container">
        {currentItems.map((item, index) => (
          <div className="palette-container" key={index}>
            <div 
            className="box" 
            style={{ backgroundColor: item.color1 }}
            onClick={() => copyText(item.color1)}
            >
             <span style={{color: item.color5}}>{item.color1}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color2 }}
            onClick={() => copyText(item.color2)}
            >
             <span style={{color: item.color5}}>{item.color2}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color3 }}
            onClick={() => copyText(item.color3)}
            >
              <span style={{color: item.color1}}>{item.color3}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color4 }}
            onClick={() => copyText(item.color4)}
            >
              <span style={{color: item.color1}}>{item.color4}</span>
            </div>
            <div 
            className="box" 
            style={{ backgroundColor: item.color5 }}
            onClick={() => copyText(item.color5)}
            >
              <span style={{color: item.color1}}>{item.color5}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination
          totalItems={filteredItems.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ColorsDisplay;
