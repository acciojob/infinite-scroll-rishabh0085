//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");

  // Add initial list items
  addMoreItems();

  // Detect when user reaches the bottom of the list
  list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addMoreItems();
    }
  });

  // Function to add more list items
  function addMoreItems() {
    const itemsToAdd = 2;
    for (let i = 0; i < itemsToAdd; i++) {
      const li = document.createElement("li");
      li.textContent = "List item " + (list.childElementCount + 1);
      list.appendChild(li);
    }
  }
});

