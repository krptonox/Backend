//Async is a keyword that is used to declare a function as asynchronous. It allows you to use the await keyword inside the function, which makes it easier to work with promises and asynchronous code.

// function fetchData() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve({name:"John"})
//         },2000)
//     })
// }

// fetchData()
// .then((data) => {
//     console.log(data)
// })




// async function getData(){
//     try{
//         const data = await fetchData();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// getData()

function fetchPostData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve({title:"Post Title", content:"Post Content"})
        },2000)
    })
}


function fetchCommentData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve({author:"John Doe", content:"This is a comment"})
        },2000)
    })
}


async function getBlogData(){
    try{
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log("Fetching post data...")
        // console.log([postData, commentData])
        console.log("Post Data:", postData);
        console.log("Comment Data:", commentData);
    }catch(error){
        console.error(error);
    }
}

getBlogData()