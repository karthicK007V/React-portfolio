import React from 'react';
import Navbar from './navbar';

import Cards from './card';

const Proj = () => {

  return (
    <div className='pro1'>
      <Navbar />
      <h1 className="pro  m-0" id="projects">Proje<span>cts</span></h1>
   
        <div className='pro-row  '>
          
         
       <Cards img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTGsBauUgDpzMWInjobjcyRSS5iP5x0nIyQ&usqp=CAU'
        name='NETFLIX-CLONE'
         des='Netflix-clone is  builts the front-end portion of websites and web applications using the  language  ReactJS,JavaScript,HTML & CSS' 
         codelink='https://github.com/karthicK007V/Frontend-Netflix'
          deplink="https://netflixss-clo.netlify.app/"/>

<Cards img='https://cdn.dribbble.com/users/925716/screenshots/4531553/weather_app_background_dribbble_size_prem_gurusamy.gif'
        name='Weather-App'
         des='Weather-App is  builts the front-end portion of websites and web applications using the  language  ReactJS,JavaScript,HTML & CSS' 
         codelink='https://github.com/karthicK007V/Frontend-weather'
          deplink='https://rea-weather-app.netlify.app/'/>

<Cards img='https://thumbs.dreamstime.com/b/apple-store-sindelfingen-germany-46310108.jpg'
        name='Iphone Store'
         des='Iphone Store App consists of developing both the front-end and the back-end of an application or web page using the language MongoDB,Express.js,ReactJs,NodeJS' 
         codelink='https://github.com/karthicK007V/Mern-project2-Frontend'
          deplink='https://iphone-store-clone.netlify.app/'/>

<Cards img='https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=170667a&w=is&k=20&c=fTrebHtSaNR54AmOfW-DJBsPt7EPCLpFHohA9V83d4Y='
        name='Food Order App'
         des='Food Order App consists of developing both the front-end and the back-end of an application or web page using the language MongoDB,Express.js,ReactJs,NodeJS' 
         codelink='"https://github.com/karthicK007V/Mern-project1-Frontend'
         deplink='https://food-orders-management.netlify.app/'/>




          </div>
        </div>


   
           


          

   
    );
}

export default Proj;
