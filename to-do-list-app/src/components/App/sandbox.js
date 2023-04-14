let newItems = [1,2,3,4,5]
function swapElements(index){
    console.log(newItems[index])
    newItems = index <= 0 ? newItems : [...newItems.slice(0, index-1),newItems[index],newItems[index-1],...newItems.slice(index+1)]
}
swapElements(0)
console.log(newItems)
newItems = [1,2,3,4,5]
swapElements(1)
console.log(newItems)
newItems = [1,2,3,4,5]
swapElements(2)
console.log(newItems)
newItems = [1,2,3,4,5]
swapElements(3)
console.log(newItems)
newItems = [1,2,3,4,5]
swapElements(4)
console.log(newItems)
newItems = [1,2,3,4,5]
swapElements(5)
console.log(newItems)
newItems = [1,2,3,4,5]
swapElements(6)
console.log(newItems)
newItems = [1,2,3,4,5]