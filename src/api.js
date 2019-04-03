export class DoctorData {
  getName(nameSearch, condition){
    return new Promise(function(resolve,reject){
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${nameSearch}&query=${condition}&location=37.773%2C-122.413%2C10&user_location=37.773%2C-122.413&skip=0&limit=5&user_key=${process.env.exports.apiKey}`;
      request.onload = function(){
        if(this.status===200){
          resolve(request.response)
        }else {
          reject(Error("error!"));
        }
      }
      request.open("GET",url,true);
      request.send();
    });
  }
}
