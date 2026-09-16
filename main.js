var power = 0
var power_Generator_Effect = 1
var pg = power_Generator_Effect.toFixed(0);
var p = power.toFixed(0);
var Gen_Booster_Effect = 2
var Gen_Booster_Cost = 10
var Gen_Booster_CostScaling = 10
var Knockoff_Boost_Effect = 1.25
var Knockoff_Boost_Cost = 25
var Knockoff_Boost_CostScaling = 5
function Power_Generator() {
    power+=power_Generator_Effect
}
function subPower() {
    power--
}
function Gen_Booster() {
    if (power < Gen_Booster_Cost) return
    power-=Gen_Booster_Cost
    power_Generator_Effect*=Gen_Booster_Effect
    Gen_Booster_Cost*=Gen_Booster_CostScaling
}
function Knockoff_Boost() {
    if (power < Knockoff_Boost_Cost) return
    power-=Knockoff_Boost_Cost
    power_Generator_Effect*=Knockoff_Boost_Effect
    Knockoff_Boost_Cost*=Knockoff_Boost_CostScaling
}
function UI() {
    document.getElementById("power").textContent = "You currently have " + p + " power.";
    document.getElementById("powerGeneratorEffect").textContent = "Gives " + pg + " power";
    document.getElementById("GenBoosterCost").textContent = "costs " + Gen_Booster_Cost + " power";
    document.getElementById("GenBoosterEffect").textContent = "x " + Gen_Booster_Effect + " effect of power generator";
    document.getElementById("KnockoffBoostCost").textContent = "costs " + Knockoff_Boost_Cost + " power";
    document.getElementById("KnockoffBoostEffect").textContent = "x " + Knockoff_Boost_Effect + " effect of power generator";
}
setInterval(UI, 50)