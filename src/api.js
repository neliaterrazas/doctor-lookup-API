export class DoctorData {
  constructor(issueType, nameSearch){
    this.issueType = issueType;
    this.nameSearch = nameSearch;
  }
  getData(){
    let Promise = require('es6-promise').Promise;

    return new Promise((resolve, reject)=> {

      const myRequest = new XMLHttpRequest();
      console.log("myRequest"+ myRequest.open);
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}/?query=${this.issueType}&name=${this.nameSearch}`;

      myRequest.onload = function(){
        if(this.status===200){
          resolve(myRequest.response)
          console.log(myRequest.response);

        }else {
          reject(console.log("error!"))
        }
      }
      myRequest.open("GET",url,true);
      myRequest.send();
    });
  }
}
