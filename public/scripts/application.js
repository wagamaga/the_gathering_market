document.body.addEventListener("click", async (event) =>{
    const cards = document.querySelectorAll(".card");

    cards.forEach(async (card) => {
    const deleteBtn = card.querySelector(".delete-button")
    if (deleteBtn == event.target) {
    
            event.preventDefault();
            let card_id = deleteBtn.parentElement.firstElementChild.href.split("/");
            card_id = card_id[card_id.length-1]
            const responseDelete = await fetch ("/profile/delete", {
                method:"delete",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({card_id})
            });
            const result =await responseDelete.text();
            document.body.innerHTML = result;
        }
    })

})

