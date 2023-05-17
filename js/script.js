// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-Dominic-Madeira/sw.js", {
    scope: "/ICS2O-Unit-1-08-Dominic-Madeira/",
  })
}

function myButtonClicked() {
  alert("Calculation Failed!!")
}
