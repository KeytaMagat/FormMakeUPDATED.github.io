const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    const el = document.createElement('div')
    el.className = 'form-group my-2'

    const inputel = document.createElement('input')
    inputel.className = 'form-control mt-2'
    inputel.placeholder = placeholder
    inputel.title = placeholder
  
    const deletebtnel = document.createElement('button')
    deletebtnel.textContent = 'Delete'
    deletebtnel.className = 'form-control btn btn-danger btn-sm delete-btn mt-2'
    deletebtnel.addEventListener('click', () => { el.remove() })

    el.style.display = 'flex'
    el.append(inputel, deletebtnel)

    document.querySelector("#elements").appendChild(el) 
}

const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    const el = document.createElement('div')
    el.className = 'my-2'

    const inputel = document.createElement('input')
    inputel.className = 'mt-2'
    inputel.placeholder = placeholder
    inputel.type = 'radio'

    const labelel = document.createElement('label');
    labelel.textContent = label;

    const deletebtnel = document.createElement('button')
    deletebtnel.textContent = 'Delete'
    deletebtnel.className = 'btn btn-danger btn-sm delete-btn m-4'
    deletebtnel.addEventListener('click', () => { el.remove() })

    el.style.display = 'flex'
    el.style.justifyContent = 'center'
    el.append(inputel, labelel, deletebtnel)

    document.querySelector("#elements").appendChild(el) 
}

const appendButton = (label = "No label", placeholder = "No placeholder") => {
    const el = document.createElement('div')
    el.className = 'my-2'

    const inputel = document.createElement('input')
    inputel.className = 'mt-2'
    inputel.placeholder = placeholder
    inputel.type = 'button'
    inputel.value = label
  
    const deletebtnel = document.createElement('button')
    deletebtnel.textContent = 'Delete'
    deletebtnel.className = 'btn btn-danger btn-sm delete-btn m-3'
    deletebtnel.addEventListener('click', () => { el.remove() })

    el.style.display = 'flex'
    el.append(inputel, deletebtnel)

    document.querySelector("#elements").appendChild(el) 
}