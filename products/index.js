window.onload = function () {
    var products = ["sqlplus", 
                    "cstats", 
                    "dsa", 
                    "Cubie Cruiser", 
                    "Space Protector", 
                    "Personal Backup", 
                    "Urban Tennis", 
                    "Unity GDM"];
    var image = ["../images/sqlplus.png", 
                 "../images/cstats.png", 
                 "../images/dsa.png",
                 "../images/cubie-cruiser-icon-512.png", 
                 "../images/Untitled.png", 
                 "../images/backup.png",
                 "../images/urbanTennis.png", 
                 "../images/unity-manual-64.png"];
    var alt = ["sqlplus",
               "cstats",
               "dsa",
               "Cubie Cruiser",
               "Space Protector",
               "Personal Backup",
               "Urban Tennis",
               "Unity GDM"];
    var repo = ["../software/sqlplus/",
                "../software/cstats",
                "../software/dsa/", 
                "../software/games/cubiecruiser.html",
                "../software/games/spaceprotector.html", 
                "../software/personalbackup/",
                "../software/games/urbantennis.html", 
                "https://github.com/mijecu25/unity-manual"];
    
    // Get the table in the page
    var table = document.getElementById("product-table");

    // The current row
    currentRow = 0;

    // Loop through all the products
    for(i = 0; i < products.length; i++) {
        // Every 3 products, we add a new row
        if(i % 3 == 0) {
            var row = table.insertRow(currentRow);
            // Increase the number of rows
            currentRow++;
        }

        // Create a link element
        var a = document.createElement("a");
        // Set the link
        a.setAttribute("href", repo[i])
        // Set the name of the product
        a.innerHTML = products[i];

        // Create a span element
        var span = document.createElement("span");
        // Set the class of the span
        span.className = "product-name"
        // Add the link to the span
        span.appendChild(a);
 
        // Create an image element
        var img = document.createElement("img");
        // Set the class
        img.className = "product-image";
        // Set the image source
        img.setAttribute("src", image[i]);
        // Set the text for the image
        img.setAttribute("alt", alt[i]);

        // Create an h3 element
        var h3 = document.createElement("h3");
        // Add the image and the span element
        h3.appendChild(img);  
        h3.appendChild(span); 

        // Create a div element
        var div = document.createElement("div");
        // Set the class
        div.className = "product"
        // Add the h3 element
        div.appendChild(h3);

        // Insert the div at the specific cell
        row.insertCell(i % 3).appendChild(div);

    }
}