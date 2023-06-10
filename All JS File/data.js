// All Blood Donor Information

const blood_donor = [
    {
      id : 1,
      name: "Abdul",
      age: 25,
      address: 'Dhaka',
      mobile: '01711111111',
      bloodGroup: 'A+',
      lastDonation_Day: 110,
      lastDonationDate: "24/02/2023",
      blood_recipients: ['Jamal', 'Kamal']
  
    },
    {
      id : 2,
      name: "Rahim",
      age: 28,
      address: 'Rajshahi',
      mobile: '017231111111',
      bloodGroup: 'A+',
      lastDonation_Day: 150,
      lastDonationDate: "10/02/2023",
      blood_recipients: ['Sharmin', 'Sadia']
  
    },
    {
      id : 3,
      name: "Jannatul",
      age: 28,
      address: 'Chittagong',
      mobile: '01723456789',
      bloodGroup: 'O+',
      lastDonation_Day: 200,
      lastDonationDate: "26/11/2022",
      blood_recipients: ['Mohammad']
  
    },
    {
      id : 4,
      name: "Salman",
      age: 35,
      address: 'Rajshahi',
      mobile: '01723451881',
      bloodGroup: 'AB+',
      lastDonation_Day: 180,
      lastDonationDate: "16/12/2022",
      blood_recipients: ['Yasmin']
  
    },
    {
      id : 5,
      name: "Fatema",
      age: 35,
      address: 'Rajshahi',
      mobile: '01723451111',
      bloodGroup: 'B+',
      lastDonation_Day: 110,
      lastDonationDate: "24/02/2023",
      blood_recipients: ['Salma', 'Nasrin']
  
    },
    {
      id : 6,
      name: "Ahmed",
      age: 42,
      address: 'Khulna',
      mobile: '01723456222',
      bloodGroup: 'AB+',
      lastDonation_Day: 95,
      lastDonationDate: "08/03/2023",
      blood_recipients: ['Salma', 'Nasrin']
  
    },
    {
      id : 7,
      name: "Syed",
      age: 31,
      address: 'Khulna',
      mobile: '01723456722',
      bloodGroup: 'A-',
      lastDonation_Day: 115,
      lastDonationDate: "19/02/2023",
      blood_recipients: ['Umme', 'Khadiza', 'Farjana']
  
    },
    {
      id : 8,
      name: "Sheikh",
      age: 31,
      address: 'Sylhet',
      mobile: '01723456782',
      bloodGroup: 'B-',
      lastDonation_Day: 106,
      lastDonationDate: "20/02/2023",
      blood_recipients: ['Ahmed']
    },
    {
      id : 9,
      name: "Tanvir",
      age: 28,
      address: 'Sylhet',
      mobile: '01744456782',
      bloodGroup: 'AB-',
      lastDonation_Day: 192,
      lastDonationDate: "03/12/2022",
      blood_recipients: ['Masud', 'Imran']
    },
    {
      id : 10,
      name: "Nazma",
      age: 58,
      address: 'Rangpur',
      mobile: '01734456782',
      bloodGroup: 'O-',
      lastDonation_Day: 154,
      lastDonationDate: "06/02/2023",
      blood_recipients: ['Ali', 'Sumon', 'Sanjida']
    },
    {
      id : 11,
      name: "Lima",
      age: 43,
      address: 'Barishal',
      mobile: '01733453782',
      bloodGroup: 'O+',
      lastDonation_Day: 114,
      lastDonationDate: "20/02/2023",
      blood_recipients: ['Monira', 'Ariful']
    },
    {
      id : 12,
      name: "Kamrul",
      age: 37,
      address: 'Cumilla',
      mobile: '01735553782',
      bloodGroup: 'B+',
      lastDonation_Day: 136,
      lastDonationDate: "28/01/2023",
      blood_recipients: ['Mahmudul']
    },
    {
      id : 13,
      name: "Rakibul",
      age: 24,
      address: 'Cumilla',
      mobile: '01735653782',
      bloodGroup: 'AB+',
      lastDonation_Day: 205,
      lastDonationDate: "21/11/2022",
      blood_recipients: ['Shahin', 'Habiba', 'Sabbir', 'Afroza']
    },
    {
      id : 14,
      name: "Mizanur",
      age: 36,
      address: 'Mymensingh',
      mobile: '01735666752',
      bloodGroup: 'O-',
      lastDonation_Day: 195,
      lastDonationDate: "01/12/2022",
      blood_recipients: ['Runa']
    },
    {
      id : 15,
      name: "Parvez",
      age: 37,
      address: 'Rangpur',
      mobile: '01735668882',
      bloodGroup: 'A-',
      lastDonation_Day: 155,
      lastDonationDate: "05/02/2023",
      blood_recipients: ['Arafat', 'Saddam', 'Sayma']
    },
    {
      id : 16,
      name: "Masum",
      age: 22,
      address: 'Mymensingh',
      mobile: '01735666492',
      bloodGroup: 'B-',
      lastDonation_Day: 178,
      lastDonationDate: "20/12/2022",
      blood_recipients: ['Shakil']
    },
    {
      id : 17,
      name: "Liton",
      age: 42,
      address: 'Khulna',
      mobile: '01735646772',
      bloodGroup: 'AB-',
      lastDonation_Day: 135,
      lastDonationDate: "29/01/2023",
      blood_recipients: ['Marufa', 'Omar', 'Nurul', 'Anika']
    },
    {
      id : 18,
      name: "Sazzad",
      age: 47,
      address: 'Chittagong',
      mobile: '01735236772',
      bloodGroup: 'A+',
      lastDonation_Day: 131,
      lastDonationDate: "02/02/2023",
      blood_recipients: ['Rina', 'Shakil', 'Nahida', 'Rakib']
    },
    {
      id : 19,
      name: "MasZakiaum",
      age: 38,
      address: 'Dhaka',
      mobile: '01735236452',
      bloodGroup: 'O+',
      lastDonation_Day: 157,
      lastDonationDate: "03/02/2023",
      blood_recipients: ['Zakir', 'Amir']
    },
    {
      id : 20,
      name: "Anisur",
      age: 51,
      address: 'Dhaka',
      mobile: '01768236452',
      bloodGroup: 'O+',
      lastDonation_Day: 142,
      lastDonationDate: "18/02/2023",
      blood_recipients: ['Tuhin', 'Akash']
    },
  ];
  
  
  
  
  
  
  