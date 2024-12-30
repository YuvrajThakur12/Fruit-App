let fruitgrid = document.getElementById("fruit-grid");

async function getfruit() {
    try {
        let res = await axios.get("http://127.0.0.1:8000/api/home/");
        let data = res.data;
        console.log(data);
        Display(data);
    } 
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

function Display(data) {
    fruitgrid.innerHTML = "";
    data.forEach(element => {
        fruitgrid.innerHTML += `
        <div class="fruitcard">
            <div class="fruit-img">
                <img src="http://127.0.0.1:8000${element.image}" alt="${element.name}">
            </div>
            <div class="fruit-info">    
                <h3>${element.name}</h3>
                <p>${element.category}</p>
                <p>${element.Effect}</p>
            </div>
        </div>
        `;
    });
    console.log(data);
}

getfruit();
