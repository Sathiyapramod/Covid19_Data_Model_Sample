const name1 = new URLSearchParams(location.search).get('Name');
// console.log(name1);

const displaydetails = async ()=>{
    try{
        fetch("https://data.covid19india.org/v4/min/data.min.json")
        .then((response)=>response.json())
        .then((data)=> {
            // console.log(data);

            let results = data;
            let resultnames = results[name1];
            console.log(resultnames);

            const keyarr = Object.keys(resultnames);

            
            const keyarr1 = Object.keys(resultnames.delta);
            // console.log(keyarr1);
            let displaycontent = ""
            const delta = keyarr1.map((key)=>{
                const value = resultnames.delta[key];
                return value;
            });
            // console.log(delta);
            const keyarr2 = Object.keys(resultnames.delta7);
            // console.log(keyarr2);

            const delta7 = keyarr2.map((key)=>{
                const value = resultnames.delta7[key];
                return value;
            });
            // console.log(delta7);

            const keyarr3 = Object.keys(resultnames.total);
            console.log(keyarr3);

            const total = keyarr3.map((key)=>{
                const value = resultnames.total[key];
                return value;
            });
            console.log(total);


            displaycontent = `
            <div class="fs-2 text-center fw-bold">StateCode: &nbsp ${name1}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 ms-3 bg-light text-dark">
            <div class="fw-bold fs-3">${keyarr[0]}</div>
            <div>${keyarr1[0]} : ${delta[0]}</div>
            <div>${keyarr1[1]} : ${delta[1]}</div>
            <div>${keyarr1[2]} : ${delta[2]}</div>
        </div>
        <div class="col col-sm-4 col-md-4 col-lg-4 m-1 bg-light text-dark">
            <div class="fw-bold fs-3">${keyarr[2]}</div>
            <div>${keyarr2[0]} : ${delta7[0]}</div>
            <div>${keyarr2[1]} : ${delta7[1]}</div>
            <div>${keyarr2[2]} : ${delta7[2]}</div>
            <div>${keyarr2[3]} : ${delta7[3]}</div>
            <div>${keyarr2[4]} : ${delta7[4]}</div>
        </div>
        <div class="col-3 col-sm-3 col-md-3 col-lg-3 me-4 mb-4 bg-light text-dark">
            <div class="fw-bold fs-3">Total</div>
            <div>${keyarr3[0]} : ${total[0]}</div>
            <div>${keyarr3[1]} : ${total[1]}</div>
            <div>${keyarr3[2]} : ${total[2]}</div>
            <div>${keyarr3[3]} : ${total[3]}</div>
            <div>${keyarr3[4]} : ${total[4]}</div>
            <div>${keyarr3[5]} : ${total[5]}</div>
        </div>`
            // console.log(displaycontent);
            document.getElementById("main").innerHTML = displaycontent;
        });
    }
    catch{
        console.log(err);
    }
}
displaydetails();