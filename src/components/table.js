import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from 'html2canvas';

const countries = [{id: 1,country: "Rwanda", region: "EAC"}, {id: 2, country: "Kenya", region: "EAC"}, {id: 3, country: "Nigeria", region: "NA"}]
const xxx = [{id: 1, country: "Rwanda", covered: false, president: "Kagame", score: 1, priority: "Middle", responsible: "Minister of health", timeline: "Start of this month"}, {id: 2, country: "Kenya", covered: true, president: "Kenyatta", score: 1, priority: "Low", responsible: "Minister of Lab", timeline: "End of this month"}, {id: 3, country: "Nigeria", covered: true, president: "Buhali",score: 1, priority: "High", responsible: "Minister of Justice", timeline: "Middle of this month"}]
const yyy = [{id: 1, country: "Rwanda", covered: true, president: "Kagame", score: 899, priority: "High", responsible: "Minister of life", timeline: "whole month"}, {id: 2, country: "Kenya", covered: false, president: "Kenyatta", score: 77272, priority: "Middle", responsible: "Minister of presidency", timeline: "End of this month"}, {id: 3, country: "Nigeria", covered: true, president: "Buhali",score: 828282, priority: "Low", responsible: "Minister of minig", timeline: "Middle of this month"}]

const TableComponent = () => {

    const [xtab, setXpolicy] = React.useState({})
    const [ytab, setYpolicy] = React.useState({})


    const printDocument = (county) => {  
        const input = document.getElementById('pdfdiv');  
        html2canvas(input)  
          .then((canvas) => {  
            const imgWidth = 150;  
            const pageHeight = 290;  
            const imgHeight = canvas.height * imgWidth / canvas.width;  
            const heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            const position = 0;  
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
            pdf.save(`${county} report.pdf`);  
          });  
      }  

    const handleDownload = async (country) => {
        if(xxx, yyy){
            xxx.forEach(atab => {
                if(atab.country === country){
                    setXpolicy(atab)
                }
            })
            yyy.forEach(btab => {
                if(btab.country === country){
                    setYpolicy(btab)
                }
            })
        }
        await printDocument(country)

    }
    return(
        <div className="container">
            <div></div>
            <div>
                <h4 class="text-center text-wrap bd-highlight text-uppercase">List of countries and data.</h4>
                {countries.length === 0 ? <Badge class="text-center text-wrap bd-highlight primary" pill variant="primary">You currently have no countries.</Badge> :
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Country</th>
                            <th>Region</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map(country=>(
                            <tr key={country.id}>
                                <td>{country.id}</td>
                                <td>{country.country}</td>
                                <td>{country.region}</td>
                                <td><Button onClick={(e)=>handleDownload(country.country)}>Download <Badge variant="light">PDF</Badge></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>}
                <Table striped bordered hover size="sm" id="pdfdiv">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>President</th>
                        <th>Score</th>
                        <th>Priority</th>
                        <th>Responsibility</th>
                        <th>Timeline</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="7" className="text-center font-weight-bold">XXX Policy</td>
                    </tr>
                        <tr key={xtab.id}>
                            <td>{xtab.id}</td>
                            <td>{xtab.country}</td>
                            <td>{xtab.president}</td>
                            <td>{xtab.score}</td>
                            <td>{xtab.priority}</td>
                            <td>{xtab.responsible}</td>
                            <td>{xtab.timeline}</td>
                        </tr>
                    <tr>
                        <td colspan="7" className="text-center font-weight-bold">YYY Policy</td>
                    </tr>
                        <tr>
                            <td>{ytab.id}</td>
                            <td>{ytab.country}</td>
                            <td>{ytab.president}</td>
                            <td>{ytab.score}</td>
                            <td>{ytab.priority}</td>
                            <td>{ytab.responsible}</td>
                            <td>{ytab.timeline}</td>
                        </tr>
                </tbody>
                </Table>
            </div>
            <div></div>
        </div>
    )
}

export default TableComponent