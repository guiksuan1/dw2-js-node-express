const products = ["Computador", "Notebook", "Celular", "Tablet"]
document.write(`<p>${products}</p>`)
document.write(typeof(products))
document.write(`<p>${products[1]}</p>`)
document.write(`<p>Exibindo um elemnto do Array atráves do índice </p>`)
document.write(`<p>${products[3]}</p>`)

document.write(`<p>Percorrendo </p>`)
products.forEach(function (produto) {
    document.write(`<p>${produto}</p>`)
})