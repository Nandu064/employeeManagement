import React from 'react'
// import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


function table(props) {
    // destructuring of props
    let {playerData,upadateHandler} = props
    

    const paginateData = playerData;
    // assigning column headings
    const paginateColumns = [
        { dataField: 'no', text: 'No',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'name', text: 'Name',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'age', text: 'Age',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'currentclub', text: 'Current Club',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'position', text: 'Position',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'debutyear', text: 'Debut Year',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'previousclub', text: 'Previous Club',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'goals', text: 'Goals',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'assists', text: 'Assists',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'freekickscored', text: 'Free Kicks Scored',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
      ];
      // Working with pagination
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: 'Next',
        prePageText: 'Prev',
        alwaysShowAllBtns: true,
        showTotal:true,
        // hideSizePerPage: true,
      });
      //Click on any row to get edit modal
      const rowEvent={
        onClick: (item, row, rowIndex) => {
            upadateHandler(playerData[rowIndex],rowIndex)
            console.log(playerData[rowIndex]);
          }
      }
    return (
        <BootstrapTable rowEvents={rowEvent}  keyField='id' data={paginateData} columns={paginateColumns} pagination={pagination}/>
    )
}

export default table
