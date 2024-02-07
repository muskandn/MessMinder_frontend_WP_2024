// App.js
import React from 'react';
import Box from './components/box';
const App:React.FC = () => {
  

  // link of all the pics have been added 
  //need to change it and use path after downloading
  return (
    <>
    
    <div className="flex flex-col h-screen">    
      
      <div className="h-20 shadow-md text-2xl font-bold">Navbar</div>
      <div className="flex flex-1 mt-10">
        <div className="flex-1 flex flex-col lg:ml-40 md:ml-20 mr-5">
          <Box
            
            imageSrc="https://img.freepik.com/free-vector/confirmed-attendance-concept-illustration_114360-7745.jpg?w=826&t=st=1707333243~exp=1707333843~hmac=af1612616dbf3c155f1e669010f3e970a230f1176c184f65a7cef86989556607"
            heading="Attendance"
            paragraph="Efficiently manage attendance records with intuitive tracking features, enabling seamless monitoring of workforce or student attendance."
            buttonName='View Attendance'
          />
          <Box
            
            imageSrc="https://img.freepik.com/free-vector/feedback-concept-illustration_114360-5044.jpg?w=826&t=st=1707333381~exp=1707333981~hmac=42f2929792ac4341ecb95d47c19af5cdd3757f4b599f7fc0bb73c1213ddbe68f"
            heading="Rating"
            paragraph="Provide valuable feedback by rating services or products, enhancing user engagement and aiding in quality improvement efforts."
            buttonName='Give Rating'
          />
          
        </div>
        <div className="flex-1 flex flex-col lg:mr-40 md:mr-20 ml-5">
          <Box
            
            imageSrc="https://img.freepik.com/free-vector/woman-choosing-dates-calendar-appointment-booking_23-2148552956.jpg?w=826&t=st=1707279999~exp=1707280599~hmac=6d788cf24e68979d07ecd23b57f54d8aed2024b20b804a8dcbc6eb8773ddcacd"
            heading="Menu"
            paragraph="Explore an extensive array of culinary offerings with a user-friendly menu interface, facilitating easy navigation and selection of dishes."
            buttonName='View Menu'
          />
          <Box
            
            imageSrc="https://img.freepik.com/free-vector/flat-design-person-making-complain_23-2148958465.jpg?w=826&t=st=1707280066~exp=1707280666~hmac=6e15790745c5ecdd22c2a1aedc8a5f9d8f2b9189d7cc2ae8f83224eb0bd5e692"
            heading="Complaint Box"
            paragraph="Lodge complaints swiftly and conveniently through a dedicated platform, ensuring prompt resolution and fostering customer satisfaction and loyalty."
            buttonName='Complaint'
          />
        </div>
      </div>
    </div>
    </>
   
  );
};

export default App;
