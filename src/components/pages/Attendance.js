import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import '../../App.css';
import axios from 'axios';

export default class Attendance extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

 

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/bef93f81-5b20-4e11-9bc8-eeff979c0470', this.state)
    .then(response => {
      console.log(response);
    })
  }
  
  render() {
    const { name, age, salary, hobby } = this.state;    
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}


// /* global gapi */

// import { Form, Text } from 'informed';
// import React from 'react';
// import { GoogleSpreadsheet } from "google-spreadsheet";

// const SPREADSHEET_ID='1WpZNyKLpnyf-UZCT48mSDQ0Ja6ytxlqUTxmSPS9jRIw';
// const CLIENT_ID ='544802302018-81o5kdejaa5fjghldbiic2tlpo81mjrc.apps.googleusercontent.com';
// const API_KEY='AIzaSyAE46tm7hdL2K2uPnP9v_rpE8BIoXqNv-I';
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

// export default class Attendance extends React.Component {

//     constructor(props) {
//       super(props);
//       this.onFormSubmit = this.onFormSubmit.bind(this); //to tie the form's callback to this class
//     }
  
//     componentDidMount(){ //called automatically by React
//       this.handleClientLoad(); 
//     }
  
//     handleClientLoad =()=> { //initialize the Google API
//       gapi.load('client:auth2', this.initClient);
//     }
  
//     initClient =()=> { //provide the authentication credentials you set up in the Google developer console
//       gapi.client.init({
//         'apiKey': API_KEY,
//         'clientId': CLIENT_ID,
//         'scope': SCOPE,
//         'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//       }).then(()=> {
//         gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
//         this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//       });
//     }
  
//     onFormSubmit(submissionValues) {
  
//       const params = {
//         // The ID of the spreadsheet to update.
//         spreadsheetId: SPREADSHEET_ID, 
//         // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
//         range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
//         // How the input data should be interpreted.
//         valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
//         // How the input data should be inserted.
//         insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
//       };
  
//       const valueRangeBody = {
//         'majorDimension': 'ROWS', //log each entry as a new row (vs column)
//         'values': [submissionValues] //convert the object's values to an array
//       };
  
//       let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
//       request.then(function (response) {
//         // TODO: Insert desired response behaviour on submission
//         console.log(response.result);
//       }, function (reason) {
//         console.error('error: ' + reason.result.error.message);
//       });
//     }
  
//     render() {
//       //TODO: add your form fields below that you want to submit to the sheet. This just has a name field
//       return (
//         <Form
//           onSubmit={this.onFormSubmit}
//         >
//           <label>
//             Name:
//             <Text field='name' />
//           </label>
//           <button type='submit'>
//             Submit
//           </button>
//         </Form>
//       )
//     }
//   }