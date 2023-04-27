let foo = async () => {
    let url = await fetch("https://www.breakingbadapi.com/api/characters")
    let res = await url.json()
    console.log(res);
    try {
        let cont = document.createElement("div")
        cont.className = "container"
        res.forEach((e) => {
            let div = document.createElement("div")
            div.className = "box"
            div.innerHTML = `<div class="card col-4" style="width: 18rem;">
      <img src="${e.img}" class="card-img-top" alt="image not found">
      <div class="card-body">
        <p class="card-text"><b>name</b> : <span>${e.name}</span></p>
        <p class="card-text"><b>nick name</b> : <span>${e.nickname}</span></p>
        <p class="card-text"><b>occupation</b> : <span>${e.occupation[0]}</span></p>
      </div>
    </div>`
            cont.append(div)
            document.body.append(cont)
        });
    } catch (error) {
        console.log(error);
    }
}
foo()