let saveManEl = document.getElementById("save-man-el")
let saveWomanEl = document.getElementById("save-woman-el")
let saveChildEl = document.getElementById("save-children-el")
let countManEl = document.getElementById("count-el")
let countWomanEl = document.getElementById("count-el")
let countChildEl = document.getElementById("count-el")
let countM = 0
let countW = 0
let countC = 0


function man() {
    countM += 1
    countManEl.textContent = countM
}

function woman() {
    countW += 1
    countWomanEl.textContent = countW
}

function child() {
    countC += 1
    countChildEl.textContent = countC

}

function save() {
    let countMStr = countM + " - "
    let countWStr = countW + " - "
    let countCStr = countC + " - "
    saveManEl.textContent += countMStr
    saveWomanEl.textContent += countWStr
    saveChildEl.textContent += countCStr
    countManEl.textContent = 0
    countWomanEl.textContent = 0
    countChildEl.textContent = 0
    countM = 0
    countW = 0
    countC = 0
}
