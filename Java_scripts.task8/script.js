let div = document.createElement('div');
        div.id = 'content';
        const parag = document.createElement('h1')
        parag.textContent = 'Azmp202'
        parag.style.color = "white"
        parag.style.textAlign = "center"
        parag.style.fontSize = "1.5rem"

        div.append(parag)
        div.style.width = "300px"
        div.style.height = "200px"
        div.style.border = "1px solid red"
        div.style.backgroundColor = "green"
        div.style.borderRadius = "16px"

        div.style.color = 'red'
        document.body.appendChild(div);