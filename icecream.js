function calculateTotal() {
    const iceCreamForm = document.querySelector('#ice-cream-form');
    const resultDiv = document.querySelector('#result');
    let flavorCost1=document.getElementsByName("flavor1");
    let shapesCost=document.getElementsByName("shapes1")
    let totalCost = 0;

    iceCreamForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        const selectedFlavors = []; // Array to store the selected flavors
        const selectedShapes = [];
        

        // Loop through all the checkboxes and add the selected flavors to the array
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="flavor"]:checked');
        for (let i = 0; i < checkboxes.length; i++) {
            selectedFlavors.push(checkboxes[i].value);
            flavorCost1 += 25;
        }

        const checkboxes1 = document.querySelectorAll('input[type="checkbox"][name="shapes"]:checked');
        for (let i = 0; i < checkboxes1.length; i++) {
            selectedShapes.push(checkboxes1[i].value);
            shapesCost += 10 
           totalCost +=shapesCost + flavorCost1
        }



        // Display the selected flavors in the result div
        resultDiv.textContent = 'You selected: ' + selectedFlavors.join(', ') + ' - ' + selectedShapes.join(', ');
        document.getElementById("totalCost").value= totalCost.toFixed(2);
        total.textContent = 'Total Amount: ' + '' + "RS." + totalCost ;
    });
}


  




