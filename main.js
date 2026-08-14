var power = 0
var powerIncrement = 1
var U2Cost = 10
var U2CostScaling = 10
var U3Cost = 150
var U4Cost = 500
var superCost = 1000
var superPoint = 0
var superPointEffect = 1
function format(amount) {
    return amount.toFixed(0);
}
setInterval(function U1() {
    power += powerIncrement
}, 1000);
function subPower() {
    power--
}
function U2() {
    if (power < U2Cost) return
    power-=U2Cost
    powerIncrement+=1
    U2Cost*=U2CostScaling
}
function U3() {
    if (power < U3Cost) return
    power-=U3Cost
    powerIncrement*=2
    U3Cost*=10
}
function U4() {
    if (power < U4Cost) return
    power-=U4Cost
    U2CostScaling*=0.9
    U2Cost*=0.9
    U4Cost*=10
}
function superPointUpgrade() {
    if (power < superCost) return
    power-=superCost
    superPoint+=1
    superPointEffect+=superPoint
    powerIncrement*=superPointEffect
    powerIncrement*=2
    superCost*=10
}
function UI() {
    document.getElementById("power").textContent = "You are currently producing " + format(power) + " power per second";
    document.getElementById("U2Cost").textContent = "costs " + U2Cost + " power";
    document.getElementById("powerIncrement").textContent = "+ " + format(powerIncrement) + " power";
    document.getElementById("U3Cost").textContent = "costs " + U3Cost + " power";
    document.getElementById("U4Cost").textContent = "costs " + U4Cost + " power";
    document.getElementById("superCost").textContent = "costs " + superCost + " power";
    document.getElementById("superPoint").textContent = "you currently have " + superPoint + " SuperPoints, multiplying all Power production by " + superPointEffect;
}
setInterval(UI, 50)
setInterval(function updateMyGame() {
    power += powerIncrement
}, 1000);
