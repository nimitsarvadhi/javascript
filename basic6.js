//Promises and async and await and Math library
function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let interspeed = Math.floor(Math.random() * 10 + 1);
        if(interspeed > 4){
            resolve("Data successfully printed");
        }
        else{
            reject("Data not Saved");
        }
    });
}
let request = savetoDB("Apna college");
request.then(()=>{
    console.log("Data Saved");
})
.catch(()=>{
    console.log("Data Not Saved");
})
async function demo() {
    try {
        await savetoDB(21);
        await savetoDB(22);
        console.log("All data saved successfully");
    } catch (err) {
        console.error("Save failed:", err.message || err);
    }
}

demo();
