// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.


function fetchData(){
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("Data Fetched Successfully");
            res("Fetched Data")
        },1000)
    });
}
fetchData().then((response:any)=>{
    console.log(response);
    
})

