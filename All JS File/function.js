
// FUNCTION FOR SEARCH


function donorSearch(search) {
    // result VARIEBLE FOR SEARCH RESULT
    let = result = '';

    //  EI CODE HOLO CONSOLE TABLE E BLOOD RECIPIENTS JENO ARRAY NA SHOW KORE NAME SHOW KORE TAI
    blood_donor.forEach((item) => {
        item.blood_recipients = item.blood_recipients.join(', ');
   });

 
        
   // SEARCH E NIRDISTO VALUE DIYE SEARCH DEOWAR JONNO SWITCH CASE USE KORA HOYECHE, 
    switch (search) {

        // FILTER WITH ID
        case 'id':
            let search_id = parseInt(prompt('id (1-20):'));
            result = blood_donor.filter((item) => item.id == search_id );
            console.table(result);
            break;   

        // FILTER WITH ADDRESS
        case 'Address':
            let search_address = prompt('Address:');
            result = blood_donor.filter((item) => item.address === search_address );
            console.table(result);
            break;

        // FILTER WITH BLOOD GROUP
        case 'Blood Group':
            let search_blood = prompt('Blood Group:');
            result = blood_donor.filter((item) => item.bloodGroup == search_blood );
            console.table(result );
            break;
        // FILTER WITH MOBILE NUMBER
        case 'Mobile Number':
            let search_mobile = prompt('Mobile Number:');
            result = blood_donor.filter((item) => item.mobile == search_mobile );
            console.table(result );
            break;

        default:
            console.log('Invalid');
    
    }

    
   


    // console.log('Available Donors:');
    // result.forEach((item) => {
    //   let available = 120 - item.lastDonation;
  
    //   if (available >= 90 && available <= 120) {
    //     console.log(`${item.name} will be available within ${available} days.`);
    //   }
    // });









}


// let lastDonation = blood_donor.lastDonation;

//  lastDonation = blood_donor.forEach((item) => {
//      console.log(item.lastDonation );
// })




// if (lastDonation >=90 && lastDonation <=120) {

//     lastDonation.filter((item) => item.lastDonation == )
    
// } else {
    
// }



// function donorWillBeAvailable(lastDonation){
    
//     let available = 120 - lastDonation ;
    
//     if (lastDonation >= 90 &&  lastDonation <= 120) {

//         console.log( 'They will be available within ' + available + ' days');
//     } 
// }










