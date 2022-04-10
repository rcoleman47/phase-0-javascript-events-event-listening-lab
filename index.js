const input = document.getElementById(`input`)
function addingEventListener() {
    const click = input.addEventListener('click', ()=> (`I was clicked`))
    return click
}

console.log(addingEventListener())

