// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

function fetchWithError(){
    return new Promise((resolve:any,reject:any)=>{
        const a = false;
        if(a !== false){
            resolve("Data Fetched Successfully!")
        }else{
            reject("Data fetch failed!")
        } setTimeout(()=>{

        },1000
    )
    })
}
fetchWithError().then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})




