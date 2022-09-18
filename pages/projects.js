/*
Assumes this structure exists: 
<ul>
    <li>
        <a href="example.com">example</a>
        <div>and example</div>
    </li>
</ul>

creates div with class "link" with "a" as child
adds class "description" to div
*/

window.onload = function() {
    listItems = document.getElementsByTagName("li")
    console.log(listItems)

    for (i = 0; i < listItems.length; i++) {
        item = listItems[i].children

        div = document.createElement("div")
        div.setAttribute("class", "link")
    
        link = item[0]

        item[0].parentNode.insertAdjacentElement("afterbegin", div)
        div.insertAdjacentElement("afterbegin", link)
        
        
        item[1].setAttribute("class", "description")
    }
}