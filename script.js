let mainContent = document.getElementById("main");
const PostOffice = async ()=>{
    let content = document.getElementById("submitButton");
    content.addEventListener("click", ev =>{
        let userdata = document.getElementById("pincode").value;
        // console.log(userdata);
        fetch(`https://api.postalpincode.in/postoffice/${userdata}`)
        .then((response)=>  response.json())
        .then(data => {
                console.log(data);
               let results = [];
               results = [...data];
               //  console.log((results));
  
               //making an array of keys of the object 
               const keyarr = Object.keys(results);
               
               const finalarr = keyarr.map((key)=>{

                    //creating a new array 
                    const pincode = results[key].PostOffice;
                    // console.log((pincode));
                //making an array of keys of the object
                    const keyarr1 = Object.keys(pincode);
                //Using map() to obtain the names 
                    const finalarr2 = keyarr1.map((key2)=> {
                        //Final Names of PostOffices 
                        // console.log(finalarr2);
                            
                        return `
                        <div class="card shadow p-3 d-flex flex-column justify-content-between">
                            <div class="card-header text-center" id="header"> ${pincode[key2].Name} </div>
                            <div class="card-body text-center">
                                <div> <a href="../DetailsPage/index.html?code=${pincode[key2].Pincode}&Name=${pincode[key2].Name}&BranchName=${pincode[key2].BranchType}&Division=${pincode[key2].Division
                                }"><button class="btn btn-secondary" id="details-button">Get Details</button></a></div>
                        </div></div>
                     `
                    })
                    // console.log(finalarr2);
                    
                    return finalarr2.join(" ");
               })
            //    console.log(finalarr);
               main.innerHTML = finalarr.join(" ");
               
               
        }).catch((err)=>{
            console.log(err);
            alert("Invalid city");
            
        })
    })
}
PostOffice();

