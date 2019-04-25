"use strict";

function scratchComponentController(scratchService, $q, $scope){
    const ctrl = this;
    ctrl.userInput = "bob the builder"

    ctrl.changeToServiceInput = function(input){
        $scratchService.changeToServiceInput(input);
    };

    ctrl.changeName = function(newName){
        console.log(newName);
        ctrl.userInput = newName;
    }
};

angular
.module("scratchApp")
.component("scratchComponent", {
    template: `
        <h1>Hello {{$ctrl.userInput}} - defined by controller</h1>
        <h1>Hello {{userInput}} - scoped variable</h1>
        <input type="text" ng-model="userInput"></input>
        <button ng-click="$ctrl.changeName(userInput)">changes ctrl.userInput</button>
        <scratch-child></scratch-child>
        `,
    controller: scratchComponentController
});