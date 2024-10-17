import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
import DashboardWrapper from "../components/DashboardWrapper";
import './Dashboard.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

//To register the charts
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Dashboard() {
    ////chart function

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [12000, 19000, 3000, 5000, 20000, 30000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      const doughnutData = {
        labels: ['Mobile', 'Desktop', 'Tablet'],
        datasets: [
          {
            label: 'Traffic by Device',
            data: [60, 30, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
    
      const barOptions = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

  return (
    <DashboardWrapper>
      <div className="header">
                <div className="card">
                    <h3>BUDGET</h3>
                    <p>$24,000</p>
                    <span className="indicator down">-12% Since last month</span>
                </div>
                <div className="card">
                    <h3>TOTAL CUSTOMERS</h3>
                    <p>1,600</p>
                    <span className="indicator up">+16% Since last month</span>
                </div>
                <div className="card">
                    <h3>TASKS PROGRESS</h3>
                    <p>75.5%</p>
                </div>
                <div className="card">
                    <h3>TOTAL PROFIT</h3>
                    <p>$23,200</p>
                </div>
            </div>

            <div className="content">
                <div className="sales">
                    <h4>Latest Sales</h4>
                    <div className="sales-graph">
                        <Bar data={barData} options={barOptions} />
                    </div>
                </div>

                <div className="traffic">
                    <h4>Traffic by Device</h4>
                    <div className="traffic-graph">
                        <Doughnut data={doughnutData} />
                    </div>
                </div>
                
                <div className="table">
                    <h4>Nutrition Table</h4>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
    </DashboardWrapper>
  );
}
export default Dashboard;
