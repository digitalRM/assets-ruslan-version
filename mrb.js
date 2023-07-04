async function fetchText() {
    let res = await fetch("https://raw.githubusercontent.com/DerekZZhu/Assets/main/mukrobbible.json")
    return await res.json()
}

async function renderText(title, chapter) {
    let info = await fetchText()
    let data = info[title][chapter]
    let html = ""
    console.log(data);
    data.forEach((passage, i) => {
        console.log(passage);
        let segment = `<p><span class="number">${i+1}</span>
                    ${passage}
                    </p>`
        html += segment
    })

    let container = document.querySelector(".passages")
    container.innerHTML = html;
}

var chapter = 1
renderText("Genesis", 1)
document.getElementById("button").addEventListener(() => {
    if (chapter == 1) {
        renderText("Genesis", 2)
        document.getElementById("button").innerHTML = `<i class="fa-solid fa-arrow-left"></i>`
    } else {
        renderText("Genesis", 1)
    }
})

