// Copyright (c) 2023 Lamees Hemdan rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"
const getFoxImage = async (URLAddress) => {
  try {
    const response = await fetch(URLAddress);
    const json = await response.json();
    document.getElementById("fox").innerHTML= "<img src=" + json.image + ">"
  }catch (err) {
    console.log(err);
  }
}

getFoxImage ("https://randomfox.ca/floof/")