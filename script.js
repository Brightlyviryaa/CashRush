var money = 0;
var income = 1;
var clickBtn = document.getElementById("clickBtn");
var moneyDisplay = document.getElementById("money");
var storeBtn = document.getElementById("storeBtn");
var store = document.getElementById("store");
var upgradeBtn = document.getElementById("upgradeBtn");
var incomeBtn = document.getElementById("incomeBtn");
var closeBtn = document.getElementById("closeBtn");
var upgradeCostDisplay = document.getElementById("upgradeCost");
var incomeCostDisplay = document.getElementById("incomeCost");
var passiveIncomeDisplay = document.getElementById("passiveIncome");
var upgradeCost = 200;
var PassiveCost = 100;
var passiveIncome = 0;

// fungsi untuk mengupdate tampilan uang
function updateMoneyDisplay() {
  moneyDisplay.innerHTML = "Money: " + money;
}

// fungsi untuk mengupdate tampilan biaya upgrade level
function updateUpgradeCostDisplay() {
  upgradeCostDisplay.innerHTML = "Upgrade level cost: " + upgradeCost;
}

// fungsi untuk mengupdate tampilan biaya upgrade pendapatan pasif
function updateIncomeCostDisplay() {
  incomeCostDisplay.innerHTML = "Upgrade income cost: " + PassiveCost;
}

// fungsi untuk mengupdate tampilan pendapatan pasif
function updatePassiveIncomeDisplay() {
  passiveIncomeDisplay.innerHTML = "Passive income: " + passiveIncome;
}

// fungsi untuk memperbarui uang dan tampilannya
function addMoney(amount) {
  money += amount;
  updateMoneyDisplay();
}

// event listener untuk tombol mouse up
clickBtn.addEventListener("mouseup", function() {
  addMoney(income);
});

// event listener untuk tombol toko
storeBtn.addEventListener("click", function(event) {
  store.classList.remove("hide");
  event.stopPropagation();
});

// event listener untuk tombol upgrade level
upgradeBtn.addEventListener("click", function(event) {
  if(money >= upgradeCost) {
    money -= upgradeCost;
    upgradeCost *= 2;
    income += 1;
    updateMoneyDisplay();
    updateUpgradeCostDisplay();
  }
  event.stopPropagation();
});

// event listener untuk tombol upgrade pendapatan pasif
incomeBtn.addEventListener("click", function(event) {
  if(money >= PassiveCost) {
    money -= PassiveCost;
    PassiveCost *= 2;
    passiveIncome += 1;
    updateMoneyDisplay();
    updateIncomeCostDisplay();
    updatePassiveIncomeDisplay();
  }
  event.stopPropagation();
});

// event listener untuk tombol close pada toko
closeBtn.addEventListener("click", function(event) {
  store.classList.add("hide");
  event.stopPropagation();
});

// fungsi untuk memperbarui pendapatan pasif setiap detik
function updatePassiveIncome() {
  money += passiveIncome;
  updateMoneyDisplay();
}

// set interval untuk memperbarui pendapatan pasif setiap detik
setInterval(updatePassiveIncome, 1000);

// memperbarui tampilan awal
updateMoneyDisplay();
updateUpgradeCostDisplay();
updateIncomeCostDisplay();
updatePassiveIncomeDisplay();
