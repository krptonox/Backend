function fetchData(url) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
               let sucess = true;
               if(sucess){
                resolve("Data fetched successfully");
               }
               else{
                reject("Error in fetching data");
               }
        },3000)
    })
}

fetchData()
.then((data) => {
    console.log(data);
    return "Processing data"
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});