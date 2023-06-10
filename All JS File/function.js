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
            break;   

        // FILTER WITH ADDRESS
        case 'Address':
            let search_address = prompt('Address:');
            result = blood_donor.filter((item) => item.address === search_address );
            break;

        // FILTER WITH BLOOD GROUP
        case 'Blood Group':
            let search_blood = prompt('Blood Group:');
            result = blood_donor.filter((item) => item.bloodGroup == search_blood );
            break;

        // FILTER WITH MOBILE NUMBER
        case 'Mobile Number':
            let search_mobile = prompt('Mobile Number:');
            result = blood_donor.filter((item) => item.mobile == search_mobile );
            break;

        default:
            console.log('No donors found.');
    
    }
    // ----------------------  End Search Filter Switch Case -------------------------------



    // Filter donors with lastDonation_Day more than 120 days
    const filteredResult = result.filter((item) => item.lastDonation_Day >= 120);
    console.table( filteredResult );

    //-------------------------- End Table lastDonation_Day more than 120 days -------------------------



    // Filter donors who will be available within 1 to 30 days
    const availableResult = result.filter((item) => item.lastDonation_Day <= 120 && item.lastDonation_Day >= 90);
    console.log('People who will be available within some days ');

    //Show result in console table who will be available within 1 to 30 days
    const availableResultFinal = availableResult.map((item) =>{
        const day_wait = 120 - item.lastDonation_Day;

        return {
            id: item.id,
            Name: item.name,
            age: item.age,
            bloodGroup: item.bloodGroup,
            mobile: item.mobile,
            address: item.address,
            'Available in (days)': day_wait,
        };
    });
    console.table( availableResultFinal );

//-------------------------- End Table who will be available within 1 to 30 days -------------------------



}











