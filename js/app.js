const tabItems=document.querySelectorAll(".tab-item");

const tabContentItems=document.querySelectorAll(".tab-content-item");

//select tab content item
function selectItem(e){
  removeBorder();
  removeShow();
this.classList.add("tab-border")
// grab content item from the dom
const tabContentItem=document.querySelector(`#${this.id}-content`)
// add show class to the id
tabContentItem.classList.add("show")
}

const removeBorder=()=>{
  tabItems.forEach((item)=>{
    item.classList.remove("tab-border")
  })
}

const removeShow=()=>{
  tabContentItems.forEach((item)=>{
    item.classList.remove("show")
  })
}

// listen for tab click
tabItems.forEach((item)=>{
  item.addEventListener("click",selectItem)
})

