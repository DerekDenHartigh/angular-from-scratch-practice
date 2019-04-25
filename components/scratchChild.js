"use strict";

function scratchChildController($scope, scratchService){
    const ctrl = this;

}

angular
.module('scratchApp')
.component('scratchChild', {
    template: `
        <h2 ng-class="red">data from parent to child:{{$ctrl.userInput}}</h2>
        <h2 ng-class="red">data from parent to child:{{ctrl.userInput}}</h2>
        <h2 ng-class="red">data from parent to child:{{userInput}}</h2>

        <h2 ng-class="blue">service userInput: {{scratchService.userInput}}</h2>
        <h2 ng-class="blue">service userInput: {{service.userInput}}</h2>
        <button ng-click="changeToServiceInput({input: scratchService.userInput})
    `,
    controller: scratchChildController,
    bindings: {
        userInput: "<",
        changeToServiceInput: "&"
    }
});