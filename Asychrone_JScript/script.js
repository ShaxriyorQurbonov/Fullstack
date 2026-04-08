// function fileUpload(callback) {
//     let isUpload = true;
//     setTimeout(() => {
//         if(isUpload){
//             callback("File uploaded successfully", null);
//         } else {
//             callback(null, "Error from server");
//         }
//     }, 2000);
// }

// fileUpload(function(message, error){
//     if(error){
//         console.log(error);
//         return
//     }
// })


// let vada = new Promise(function(resolve, reject){
//     let finished = true;
//     setTimeout(() => {
//         if(finished){
//             resolve("Vada bajarildi");
//         } else {
//             reject("Vadasida turmadi");
//         }
//     }, 1500);
// });

// vada
// .then ((succes) => {
//     console.log(succes);
// })
// .catch((error) => {
//     console.log(error);
// })


function uploadFile(file){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(file){
                resolve("File uploaded successfully");
            } else {
                reject("Error from server");
            }
        }, 2000);
    });
}

async function userFile(){
    try {
        let result = await uploadFile();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// userFile();

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Fetch completed"));


function render(){
    let productHtml = ' ';

    products.forEach((item) => {
        productHtml += `
        <div class="col-lg-3 col-md-4 col-6 my-2">
            <div class="card">
                div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.body}</p>
                    <hr>
                </div>
            </div>
        </div>`
})
    document.getElementById("products").innerHTML = productHtml;
    
}
render();