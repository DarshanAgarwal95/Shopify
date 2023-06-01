document.addEventListener('DOMContentLoaded', function() {
  // Sample data
  const scorecard1Value = 123;
  const scorecard2Value = 456;
  const graphData = [10, 20, 30, 40, 50];
  const tableData = [
    { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
    { column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' }
  ];

  // Update scorecard values
  document.getElementById('scorecard1-value').textContent = scorecard1Value;
  document.getElementById('scorecard2-value').textContent = scorecard2Value;

  // Create graph
  const graphCanvas = document.getElementById('graph-canvas');
  const ctx = graphCanvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 100);
  ctx.stroke();

  // Create table
  const tableBody = document.querySelector('#data-table tbody');
  tableData.forEach((data) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.column1}</td>
      <td>${data.column2}</td>
      <td>${data.column3}</td>
    `;
    tableBody.appendChild(row);
  });
});