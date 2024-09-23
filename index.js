const donationTab = document.getElementById("donationTab")
const historyTab = document.getElementById("historyTab")
const donateSection = document.getElementById("donateSection")

donationTab.addEventListener("click", function(){
    // donationTab.classList.remove('hidden')
    historyTab.classList.remove('bg-[#b4f461]')
    // donationTab.classList.add('bg-white')
    donationTab.classList.add('bg-[#b4f461]')
    donationTab.classList.remove('bg-white')
    donateSection.classList.remove('hidden')
})

historyTab.addEventListener("click", function(){
    donationTab.classList.remove('bg-[#b4f461]')
    historyTab.classList.remove('bg-white')
    historyTab.classList.add('bg-[#b4f461]')
    donateSection.classList.add('hidden')
})