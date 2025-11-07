let focusCheckBox = document.querySelector(".toggle-checkbox");
let blockingSection = document.querySelector(".blocking-section");
let blSection = document.querySelector(".blocked-list-section");
let siteInput = document.querySelector("#siteInput");
let manualBlock = document.querySelector("#manual-block");
let listContainer = document.querySelector(".list-container");

//blocked-list-section
let visibilityFlag = false;
focusCheckBox.addEventListener("click", function onClick() {
    // console.log("button clicked");
    if (visibilityFlag == true) {
        blockingSection.style.display = 'none';
        blSection.style.display = 'none';
    } else {
        blockingSection.style.display = 'block';
        blSection.style.display = 'block';
    }
    visibilityFlag = !visibilityFlag;
})

manualBlock.addEventListener("click", function adTask() {
//    add task
    let task = siteInput.value
    if (task == "") {
        alert("empty site name ");
    }
    let li = document.createElement("li");
    // li.textContent = task;
    listContainer.appendChild(li)
    // class 
    li.classList.add("site-item");
// inner elements
    li.innerHTML =`<span class="site-name">${task}</span>
          <button class="delete-btn">✕</button>`;
    siteInput.value = "";
    
    //  remove task 
    li.addEventListener("click",function(){
        li.remove();
    })


    chrome.runtime.sendMessage({"siteName":task},function(){
        console.log("MEssage send to background");
    })
})
console.log("loaded popup",Date.now());