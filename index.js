const donationTab = document.getElementById("donationTab")
const historyTab = document.getElementById("historyTab")

donationTab.addEventListener("click", function(){
    // donationTab.classList.remove('hidden')
    historyTab.classList.remove('bg-[#b4f461]')
    // donationTab.classList.add('bg-white')
    donationTab.classList.add('bg-[#b4f461]')
    donationTab.classList.remove('bg-white')
})

historyTab.addEventListener("click", function(){
    donationTab.classList.remove('bg-[#b4f461]')
    historyTab.classList.remove('bg-white')
    historyTab.classList.add('bg-[#b4f461]')
})