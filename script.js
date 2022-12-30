let covidData = ()=>{
    fetch("https://data.covid19india.org/v4/min/data.min.json")
    .then(response => response.json())
    .then((data)=>{

        //storing the details in a JSON 
        let result = data;
        console.log(result);

        //creating an array of keys of the object
        const keyarr = Object.keys(result);
        // console.log(keyarr);
        
        const arrdata = keyarr.map((key)=>{
            return  `
            <div class="card rounded-5 d-flex flex-column align-content-center m-3 shadow">
            <div class="card-header fw-bold  text-center">
                StateCode: ${key}
            </div>
            <div class="card-body d-flex">
                <div class=""> Population: ${result[key].meta.population} </div>
                <div class=""><a href="./detailedPage/index.html?Name=${key}"><button class="btn btn-primary rounded-4 shadow" id="btn">Click Here</button></a></div>
            </div>
        </div>`
        });
        document.getElementById("main").innerHTML = arrdata.join(" ");
    });
}
covidData();