function buildTable() {
    let table = document.getElementById("gen-table");
    let cols = document.getElementById("cols").value;
    let rows = document.getElementById("rows").value;
    let rowIndex, cellIndex, titleString;

    if (cols == '' || rows == '') {
        alert('Введите все данные!');
        return;
    }
    if (!Number.isInteger(+cols) || !Number.isInteger(+rows)) {
        alert('Данные должны быть целыми числами!');
        return;
    } 

    while (table.hasChildNodes()) {
        table.removeChild(table.childNodes[0]);
    }

    for (k=0; k<+rows; k++) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (i=0;i<+cols;i++) {
            let td = document.createElement('td');
            tr.append(td);
        }
    }
    
    for (i=0;i<table.rows.length;i++) {
        for(k=0;k<table.rows[i].cells.length;k++) {
            table.rows[i].cells[k].onmouseover = function() {
                rowIndex = this.parentElement.rowIndex+1;
                cellIndex = this.cellIndex+1;
                titleString = `${rowIndex} / ${cellIndex}`;
                this.setAttribute('title', titleString);
            }
        }
    }
}