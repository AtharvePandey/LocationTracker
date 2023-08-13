document.addEventListener("DOMContentLoaded", ()=>{ //don't start excecuting the code until the entire html file has been loaded in...
    const query = document.getElementById("userInput"); //points query to the userInput
    const submit = document.getElementById("submitButton"); 
    submit.addEventListener('click', ()=>{ //once the submit button is clicked
        let ipAddress = query.value; //user-submitted ip...
        fetch('https://ipapi.co/'+ipAddress+'/json/').then(retVal => {
            retVal.json().then(data => { //the api returns all the info/geocordinates of the ip address provided
                let div = document.createElement('div'); //made a new HTML element
                let ip = data.ip;
                let city = data.city;
                let state = data.region;
                let country = data.country_name
                let lat = data.latitude;
                let long = data.longitude; 

                //Populated div with data from fetch response:

                div.innerHTML = `IP: ${ip}<br>
                                 City: ${city}<br>
                                 State: ${state}<br>
                                 Country: ${country}<br>
                                 Latitude: ${lat}<br>
                                 Longitude: ${long}<br>
                                `;

                //CSS styles below: 
                
                div.style.padding = '10px';
                div.style.background = 'Black';
                div.style.border = '1px solid red';
                div.style.borderRadius = '5px';
                div.style.color = 'White'; 

                //Adding the divContainer to the body of the html Document
                //This is so that the box with info shows up after button has been
                //clicked...way easier than having to link a new page...
                document.body.appendChild(div); 

            });
        });
    });
}); 