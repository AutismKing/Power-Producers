var power = 1
var p = power.toFixed(1);
var powerIncrement = 1
var pi = powerIncrement.toFixed(1);
var multCost = 10
var multCostScaling = 10
var expCost = 250
var mcsCost = 500
var superCost = 1000
var superPoint = 0
var superPointEffect = superPoint+=1
function addPower() {
    power+=powerIncrement
}
function subPower() {
    power--
}
function multPower() {
    if (power < multCost) return
    power-=multCost
    powerIncrement*=2
    multCost*=multCostScaling
}
function exponentPower() {
    if (power < expCost) return
    power-=expCost
    powerIncrement**=1.5
    expCost*=10
}
function mcScaling() {
    if (power < mcsCost) return
    power-=mcsCost
    multCostScaling*=0.9
    multCost*=0.9
    mcsCost*=10
}
function superPointUpgrade() {
    if (power < superCost) return
    power-=superCost
    superPoint+=1
    powerIncrement*=superPointEffect
    powerIncrement*=2
    superCost*=10
}
function UI() {
    document.getElementById("power").textContent = "You are currently producing " + p + " power per second";
    document.getElementById("multCost").textContent = "costs " + multCost + " power";
    document.getElementById("powerIncrement").textContent = "+ " + pi + " power";
    document.getElementById("expCost").textContent = "costs " + expCost + " power";
    document.getElementById("mcsCost").textContent = "costs " + mcsCost + " power";
    document.getElementById("superCost").textContent = "costs " + superCost + " power";
    document.getElementById("superPoint").textContent = "you currently have " + superPoint + " SuperPoints, multiplying all Power production by " + superPointEffect + " ";
}
setInterval(UI, 50)