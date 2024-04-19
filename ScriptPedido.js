function showLargeImage(imageSrc) {
    var existingLargeImage = document.getElementById('large-image-container');
    if (existingLargeImage) {
        document.body.removeChild(existingLargeImage);
    }

    var largeImageDiv = document.createElement('div');
    largeImageDiv.id = 'large-image-container';
    largeImageDiv.style.position = 'fixed';
    largeImageDiv.style.top = '0';
    largeImageDiv.style.left = '0';
    largeImageDiv.style.width = '100%';
    largeImageDiv.style.height = '100%';
    largeImageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    largeImageDiv.style.display = 'flex';
    largeImageDiv.style.justifyContent = 'center';
    largeImageDiv.style.alignItems = 'center';
    largeImageDiv.style.zIndex = '9999';

    var largeImage = document.createElement('img');
    largeImage.src = imageSrc;
    largeImage.style.maxWidth = '90%';
    largeImage.style.maxHeight = '90%';

    largeImageDiv.appendChild(largeImage);

    document.body.appendChild(largeImageDiv);

    largeImageDiv.addEventListener('click', function (event) {
        if (event.target === largeImageDiv) {
            document.body.removeChild(largeImageDiv);
        }
    });
}

function changeSuit(imageSrc, suitName, suitPiece, suitDescription) {
    document.getElementById('suit-image').src = imageSrc;
    document.getElementById('suit-name').innerText = suitName;
    document.getElementById('suit-description').innerText = suitDescription;

    document.getElementById('suit-image').addEventListener('click', function () {
        showLargeImage(imageSrc);
    });
}
function showTalla(checkbox) {
    var parentElement = checkbox.parentNode.parentNode;
    var nextSibling = parentElement.nextSibling;

    while (nextSibling && nextSibling.tagName !== 'TR') {
        nextSibling = nextSibling.nextSibling;
    }

    if (checkbox.checked) {
        var newRow = parentElement.parentNode.insertRow(parentElement.rowIndex + 1);

        var textCell = newRow.insertCell(0);
        textCell.innerText = 'Elija la talla:';

        var selectCell = newRow.insertCell(1);
        selectCell.innerHTML = '<select name="talla" id="talla">' +
            '<option value="30">30</option>' +
            '<option value="32">32</option>' +
            '<option value="34">34</option>' +
            '<option value="36">36</option>' +
            '<option value="38">38</option>' +
            '<option value="40">40</option>' +
            '<option value="42">42</option>' +
            '<option value="44">44</option>' +
            '<option value="46">46</option>' +
            '<option value="48">48</option>' +
            '<option value="50">50</option>' +
            '<option value="52">52</option>' +
            '<option value="54">54</option>' +
            '<option value="56">56</option>' +
            '<option value="58">58</option>' +
            '<option value="60">60</option>' +
            '</select>';
    } else {
        if (nextSibling && nextSibling.tagName === 'TR') {
            parentElement.parentNode.removeChild(nextSibling);
        }
    }
}

function exclusivo(numero) {
    var otroNumero = (numero === 1) ? 2 : 1;
    var otroCheckbox = document.getElementById('checkbox' + otroNumero);
    var checkboxSeleccionado = document.getElementById('checkbox' + numero);
    if (checkboxSeleccionado.checked) {
        otroCheckbox.checked = false;
    }
}

function programarRenta() {
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');

    if (!checkbox1.checked && !checkbox2.checked) {
        alert("Favor de seleccionar al menos una opción de ubicación.");
        return;
    }

    var datosCheckbox = [];

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    var checkboxesSeleccionados = 0;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked && checkbox !== checkbox1 && checkbox !== checkbox2) {
            checkboxesSeleccionados++;
            var checkboxId = checkbox.id;

            var parentRow = checkbox.parentNode.parentNode;
            var nextRow = parentRow.nextElementSibling;

            if (nextRow && nextRow.querySelector('select[name="talla"]')) {
                var talla = nextRow.querySelector('select[name="talla"]').value;
                datosCheckbox.push({ id: checkboxId, talla: talla });
            }
        }
    });

    if (checkboxesSeleccionados === 0) {
        alert("Favor de llenar al menos una casilla adicional.");
        return;
    }
    enviarDatosNota(datosCheckbox);
}

function enviarDatosNota(datos) {
    console.log("Datos a enviar a ScriptNota:", datos);
    //Proximamente enviara los datos al html de Nota ;)
}



function calcularPrecio() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    var checkboxesSeleccionados = 0;
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkboxesSeleccionados++;
        }
    });

    var precioElement = document.getElementById('Precio');
    var precio = checkboxesSeleccionados >= 2 ? 1200 : 600;
    precioElement.innerText = "Monto a pagar: " + precio;
}

function handleCheckboxChange() {
    calcularPrecio();
}

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
});
