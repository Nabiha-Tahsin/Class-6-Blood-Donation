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
        case 'All Donor':
            result = blood_donor;
            break;  

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
            result = blood_donor; 

    }
    // ----------------------  End Search Filter Switch Case -------------------------------



        // Filter donors with lastDonation_Day more than 120 days
        console.log('\n People who are available:');
            const filteredResult = result.filter((item) => item.lastDonation_Day >= 120);

            console.table( filteredResult );
        //-------------------------- End Table lastDonation_Day more than 120 days -------------------------



        // Filter donors who will be available within 1 to 30 days
        const availableResult = result.filter((item) => item.lastDonation_Day <= 120 && item.lastDonation_Day >= 90);
            console.log('\n\n\n People who will be available within some days: ');

        //Show result in console table who will be available within 1 to 30 days
        const availableResultFinal = availableResult.map((item) =>{

            const day_wait = 120 - item.lastDonation_Day;

            return {
                'Will be available after': day_wait + ' Days',
                id: item.id,
                Name: item.name,
                age: item.age,
                bloodGroup: item.bloodGroup,
                mobile: item.mobile,
                address: item.address,
            };
        });
        console.table( availableResultFinal );

//-------------------------- End Table who will be available within 1 to 30 days -------------------------



        //Show result in console table who will be available within 1 to 30 days
        console.log('\n\n\n Donors History ');

        const search_history = result.map((item) =>{

            return {
                id: item.id,
                Name: item.name,
                bloodGroup: item.bloodGroup,
                'Last donation (Days)': item.lastDonation_Day + ' Days before',
                'Last donation (Date)': item.lastDonationDate ,
                'Blood Recipients': item.blood_recipients ,
                mobile: item.mobile,
            };
        });
        console.table( search_history );

//-------------------------- End Table who will be available within 1 to 30 days -------------------------

}











