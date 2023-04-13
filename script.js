const table = document.querySelector("table");

const arr = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
const rowCount = Math.max(...arr);
const colCount = arr.length;

for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
  const row = table.insertRow(rowIndex);
  for (let colIndex = 0; colIndex < colCount; colIndex++) {
    const col = row.insertCell(colIndex);
    col.textContent = rowIndex + "," + colIndex;
  }
}

console.log(table.rows[0].cells[0]);

for (let index = 0; index < arr.length; index++) {
  for (let row = rowCount - 1; row >= rowCount - arr[index]; row--) {
    console.log(table.rows[row].cells[index]);
    table.rows[row].cells[index].innerText = "O";
    table.rows[row].cells[index].style.backgroundColor = "yellow";
  }
}
// console.log(allRows);
