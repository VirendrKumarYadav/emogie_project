// display List by library emogis js
const autoSearch = (e) => {
    console.log(e.target.value);
    displayList(e.target.value)
       
}

let displayList = (searchdata) => {
    let tbody_list = document.getElementById("tbody_list");

    const emogisFilterList = emojiList.filter(data => {
        let fl_data = data.category;
        fl_data = fl_data + fl_data;
        return fl_data.indexOf(searchdata) >= -1


    })



    emojiList.forEach((e) => {
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_description = document.createElement("td");

        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases.join(", ");
        new_description.innerText = e.description;

        new_emoji.classList.add("emoji");
        new_aliases.classList.add("aliases");
        new_description.classList.add("desc");

        new_row.appendChild(new_emoji)
        new_row.appendChild(new_aliases)
        new_row.appendChild(new_description)

        tbody_list.appendChild(new_row);
    });
}


const input = document.getElementById("input_box").addEventListener('keyup', autoSearch);
window.onload = displayList();