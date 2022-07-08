let box1 = document.getElementById("box_1")
let box2 = document.getElementById("box_2")
let box3 = document.getElementById("box_3")
let box4 = document.getElementById("box_4")
let box5 = document.getElementById("box_5")
let box1_container = document.getElementById("box1_container")
let box2_container = document.getElementById("box2_container")
let box3_container = document.getElementById("box3_container")
let box4_container = document.getElementById("box4_container")
let box5_container = document.getElementById("box5_container")
let AllBlind = document.querySelectorAll(".blind")
let Result_Container = document.getElementById("Result_Container")

box1.innerHTML = Math.floor(Math.random() * 10)
box2.innerHTML = Math.floor(Math.random() * 10)
box3.innerHTML = Math.floor(Math.random() * 10)
box4.innerHTML = Math.floor(Math.random() * 10)
box5.innerHTML = Math.floor(Math.random() * 10)


//console.log(AllBlind)
//AllBlind[0].style.display = "none"
let Remove_Blinds = () => {
    for (i = 0; i < 5; i++) {
        AllBlind[i].style.display = "none"
    }
}


let Check_Answer = (Ans) => {
    let result
    let verify_Ans = Ans % 2
    if (verify_Ans == 0) {
        if (Ans == 0) {
            result = `You Lose, ${Ans} is not an Even Number`
        } else {
            result = `You win, ${Ans} is an Even Number`
        }
    } else {
        result = `You Lose, ${Ans} is not an Even Number`
    }

    Result_Container.innerHTML = result
}


box1_container.addEventListener('click', (e) => {
    Check_Answer(e.path[1].childNodes[3].innerText)
    Remove_Blinds()

})


box2_container.addEventListener('click', (e) => {
    Check_Answer(e.path[1].childNodes[3].innerText)
    Remove_Blinds()
    console.log(e)
})

box3_container.addEventListener('click', (e) => {
    Check_Answer(e.path[1].childNodes[3].innerText)
    Remove_Blinds()
})

box4_container.addEventListener('click', (e) => {
    Check_Answer(e.path[1].childNodes[3].innerText)
    Remove_Blinds()
})

box5_container.addEventListener('click', (e) => {
    Check_Answer(e.path[1].childNodes[3].innerText)
    Remove_Blinds()
})