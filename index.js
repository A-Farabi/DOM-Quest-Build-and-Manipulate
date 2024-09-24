const donationTab = document.getElementById("donationTab")
const historyTab = document.getElementById("historyTab")
const donateSection = document.getElementById("donateSection")
const historySection = document.getElementById("historySection")
const historyCardContent = document.getElementById("historyCardContent")
const btn1Input = document.getElementById("btn1Input");
// console.log(btn1Input);

donationTab.addEventListener("click", function(){
    // donationTab.classList.remove('hidden')
    historyTab.classList.remove('bg-[#b4f461]')
    // donationTab.classList.add('bg-white')
    donationTab.classList.add('bg-[#b4f461]')
    donationTab.classList.remove('bg-white')
    donateSection.classList.remove('hidden')
    historySection.classList.add('hidden')
})

historyTab.addEventListener("click", function(){
    donationTab.classList.remove('bg-[#b4f461]')
    historyTab.classList.remove('bg-white')
    historyTab.classList.add('bg-[#b4f461]')
    donateSection.classList.add('hidden')
    historySection.classList.remove('hidden')
})

// reusable function here

function getValueFromId(params) {
    const value = document.getElementById(params).value;
    return value
}



// button 1

const donateBtn1 = document.getElementById("donateBtn1")

donateBtn1.addEventListener("click", function(){

    const btn1Input = Number(getValueFromId("btn1Input"))
    console.log(btn1Input);

    const balance = Number(document.getElementById("balance").innerText)
    console.log(balance);

    const btnOutput1 = Number(document.getElementById("btnOutput1").innerText)
    console.log(btnOutput1);

    // Validation checking

    if (balance < btn1Input || isNaN(Number(btn1Input)) || btn1Input <= 0 || btn1Input === "") {

        return alert("Invalid Input")
    }

    const balanceDeduct1 = balance - btn1Input
    document.getElementById("balance").innerText = balanceDeduct1;

    const btnOutputAddition = btnOutput1 + btn1Input
    document.getElementById("btnOutput1").innerText = btnOutputAddition

    const div = document.createElement("div")
    div.innerHTML = `
    <div class="p-5">
        <h3 class="text-lg font-semibold">${btn1Input} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</h3>
        <p>Date: ${new Date().toString()}</p>
    </div>
    `

    const historyCardContainer = document.getElementById("historyCardContainer")
    historyCardContainer.insertBefore(div, historyCardContainer.firstChild)

    // Show the modal after successful donation
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
})

// button 2

const donateBtn2 = document.getElementById("donateBtn2")

donateBtn2.addEventListener("click", function(){

    const btn2Input = Number(getValueFromId("btn2Input"))
    console.log(btn2Input);

    const balance = Number(document.getElementById("balance").innerText)
    console.log(balance);

    const btnOutput2 = Number(document.getElementById("btnOutput2").innerText)
    console.log(btnOutput2);

    // validation cheking

    if (balance < btn2Input || isNaN(Number(btn2Input)) || btn2Input <= 0 || btn2Input === "") {
        return alert("Invalid Input")
    }

    const balanceDeduct2 = balance - btn2Input
    document.getElementById("balance").innerText = balanceDeduct2;

    const btnOutputAddition = btnOutput2 + btn2Input
    document.getElementById("btnOutput2").innerText = btnOutputAddition

    const div = document.createElement("div")
    div.innerHTML = `
    <div class="p-5">
        <h3 class="text-lg font-semibold">${btn2Input} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
        <p>Date: ${new Date().toString()}</p>
    </div>
    `

    const historyCardContainer = document.getElementById("historyCardContainer")
    historyCardContainer.insertBefore(div, historyCardContainer.firstChild)

    // Show the modal after successful donation
    const modal = document.getElementById("my_modal_5");
    modal.showModal();

})


// button 3


const donateBtn3 = document.getElementById("donateBtn3")

donateBtn3.addEventListener("click", function(){

    const btn3Input = Number(getValueFromId("btn3Input"))
    console.log(btn3Input);

    const balance = Number(document.getElementById("balance").innerText)
    console.log(balance);

    const btnOutput3 = Number(document.getElementById("btnOutput3").innerText)
    console.log(btnOutput3);

    // validation checking

    if (balance < btn3Input || isNaN(Number(btn3Input)) || btn3Input <= 0 || btn3Input === "") {
        return alert("Invalid Input")
    }

    const balanceDeduct3 = balance - btn3Input
    document.getElementById("balance").innerText = balanceDeduct3;

    const btnOutputAddition = btnOutput3 + btn3Input
    document.getElementById("btnOutput3").innerText = btnOutputAddition

    const div = document.createElement("div")
    div.innerHTML = `
    <div class="p-5">
            <h3 class="text-lg font-semibold">${btn3Input} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
         <p>Date: ${new Date().toString()}</p>
    </div>
    `

    const historyCardContainer = document.getElementById("historyCardContainer")
    historyCardContainer.insertBefore(div, historyCardContainer.firstChild)

    // Show the modal after successful donation
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
    
})