export class DoctorCard {
  constructor(name, address, phone, website, accepting){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.accepting = accepting;
  }
   organizeData(){
    return '<div class=newDoctor>'+
           '<p class=\'name\'> Doctors name: ' + this.name + '</p>'+
           '<p class=\'address\'> Address: ' + this.address + '</p>'+
           '<p class=\'address\'> Phone Number: ' + this.phone + '</p>'+
           '<p class=\'website\'> Website: ' + this.website + '</p>'+
           '<p class=\'accepting\'> Are they accepting new patients?: ' + this.accepting + '</p>'+
       '</div>';
  }


}
