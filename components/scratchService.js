"use strict";

function scratchService(){
    const service = this;
    service.userInput = "Bob Marley"

    service.changeToServiceInput = function(input){
        service.userInput = input;
    }
}
angular
.module('scratchApp')
.service("scratchService", scratchService);