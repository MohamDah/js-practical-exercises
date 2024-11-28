function attachBuyEvents() {
    const buttons = document.querySelectorAll("#products button");
    for (let button of buttons){
        button.addEventListener("click", (e) => {
            const article = e.target.parentElement
            const table = document.querySelector("#cart")
            const oldRow = table.querySelector("tr.entry-" + article.getAttribute("data-id"))
            if (oldRow){
                const oldQuan = oldRow.querySelector(".quantityCell")
                oldQuan.textContent = article.querySelector(".quantity").value
                const oldTotal = oldRow.querySelector(".totalCell") 
                oldTotal.textContent = +oldQuan.textContent * +article.querySelector(".price").textContent
            } else {

                
                const row = document.createElement("tr")
                row.classList.add("entry-" + article.getAttribute("data-id"))
                
                const id = document.createElement("td")
                id.textContent = article.getAttribute("data-id")
                id.classList.add("idCell")
                row.appendChild(id)
                
                const product = document.createElement("td")
                product.textContent = article.querySelector("h2").textContent
                row.appendChild(product)
                
                const quantity = document.createElement("td")
                quantity.textContent = article.querySelector(".quantity").value
                quantity.classList.add("quantityCell")
                
                row.appendChild(quantity)
                
                const price = document.createElement("td")
                price.textContent = article.querySelector(".price").textContent
                row.appendChild(price)
                
                const total = document.createElement("td")
                total.textContent = +quantity.textContent * +price.textContent
                total.classList.add("totalCell")
                row.appendChild(total)
                
                const del = document.createElement("td")
                del.textContent = "❌"
                del.style.cursor = "pointer"
                del.addEventListener("click", () => {
                    row.remove(); 
                    table.querySelector("#allTotal").textContent = Array.from(table.querySelectorAll(".totalCell")).reduce((a, i) => a + +i.textContent, 0)
                })
                row.appendChild(del)
                table.querySelector("thead").insertAdjacentElement("afterend", row)
            }

            table.querySelector("#allTotal").textContent = Array.from(table.querySelectorAll(".totalCell")).reduce((a, i) => a + +i.textContent, 0)
        })
    }
}

attachBuyEvents()