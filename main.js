var power = 0
var power_Generator_Effect = 1
var power_Generator_Base = 1
var power_Generator_Total_Effect = power_Generator_Base*=power_Generator_Effect
var Gen_Booster_Effect = 2
var Gen_Booster_Cost = 10
var Gen_Booster_CostScaling = 10
var Knockoff_Boost_Effect = 1.25
var Knockoff_Boost_Cost = 25
var Knockoff_Boost_CostScaling = 5
var HomeMade_Boost_Effect = 1
var HomeMade_Boost_Cost = 500
var HomeMade_Boost_CostScaling = 15
function Power_Generator() {
    power+=power_Generator_Total_Effect
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
function HomeMade_Boost() {
    if (power < HomeMade_Boost_Cost) return
    power-=HomeMade_Boost_Cost
    power_Generator_Base+=HomeMade_Boost_Effect
    HomeMade_Boost_Cost*=HomeMade_Boost_CostScaling
}
function UI() {
    document.getElementById("power").textContent = "You currently have " + power.toFixed(2) + " power.";
    document.getElementById("powerGeneratorEffect").textContent = "Gives " + power_Generator_Total_Effect.toFixed(2) + " power";
    document.getElementById("GenBoosterCost").textContent = "costs " + Gen_Booster_Cost + " power";
    document.getElementById("GenBoosterEffect").textContent = "x" + Gen_Booster_Effect + " effect of power generator";
    document.getElementById("KnockoffBoostCost").textContent = "costs " + Knockoff_Boost_Cost + " power";
    document.getElementById("KnockoffBoostEffect").textContent = "x" + Knockoff_Boost_Effect + " effect of power generator";
    document.getElementById("HomeMadeBoostCost").textContent = "costs " + HomeMade_Boost_Cost + " power";
    document.getElementById("HomeMadeBoostEffect").textContent = "+" + HomeMade_Boost_Effect + " the base effect of the power generator";
}
setInterval(UI, 50)