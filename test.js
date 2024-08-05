

async function getData() {

    console.log("EU ACREDITO")

    const url = "http://localhost:3333/alunos";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        console.log("TESTE")

        console.log(json)

        const dataDisplay = document.getElementById("dataDisplay");


        let x = 1
        for (const data of json) {
            const { id, nome, email, uuid } = data
            console.log("x=" + x + nome)
            console.log("x=" + x + id)
            console.log("x=" + x + email)
            console.log("x=" + x + uuid)
            x++
            console.log(data)

            const myArticle = document.createElement("div"); 
            myArticle.setAttribute('class', "classTest");


            // // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + nome;

            const ageElement = document.createElement("p");
            ageElement.textContent = "Age: " + id;

            const cityElement = document.createElement("p");
            cityElement.textContent = "City: " + email;

            const cityElement2 = document.createElement("p");
            cityElement2.textContent = "City: " + uuid;

            // // Append the elements to the "dataDisplay" div
            myArticle.appendChild(nameElement);
            myArticle.appendChild(ageElement);
            myArticle.appendChild(cityElement);
            myArticle.appendChild(cityElement2);

            dataDisplay.appendChild(myArticle);


        }







        // console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}


getData();

