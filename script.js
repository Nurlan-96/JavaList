let first = Array.from(document.querySelectorAll("#list1>li")).map(item => item.textContent);
let second = Array.from(document.querySelectorAll("#list2>li")).map(item => item.textContent);
let arr = first.concat(second);
let newList = [...new Set(arr)];
console.log(newList);
let newlistElement = document.getElementById("newlist");

newlistElement.innerHTML = "";

newList.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    newlistElement.appendChild(li);
});