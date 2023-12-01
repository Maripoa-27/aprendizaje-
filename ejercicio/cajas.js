botonAccion = document.querySelector("#action")

botonAccion.addEventListener('click', () => {
        const img = document.createElement("img")
        img.src = "R.gif"
        document.body.append(img);
        
            () => {fetch('https://jsonplaceholder.typicode.com/photos')
                .then(data => data.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
                .finally(document.body.removeChild(img))}
        
})