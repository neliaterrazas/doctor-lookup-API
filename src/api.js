export class DoctorData {
  constructor(){

  }
  getData(){
    return new Promise((resolve, reject)=> {
      const myRequest = new xmlhttprequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${exports.apiKey}`;
      myRequest.onload = function(){
        if(this.status===200){
          resolve(myRequest.response)
        }else {
          reject(console.log("error!"))
        }
      }
      myRequest.open("GET",url,true);
      myRequest.send();
    })
  }
}
