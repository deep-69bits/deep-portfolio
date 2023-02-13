import React, { useEffect, useState } from "react"
import './App.css';
import { AnimatePresence, motion } from 'framer-motion'
import TypewriterComponent from 'typewriter-effect'
import './particles.json'


function App() {
  const [loading, setLoading] = useState(true)
  const delay = 2.1;
  useEffect(
    () => {
      setLoading(false);
      setTimeout(() => {
        setLoading(true)
      }, delay * 1000);
    },
    []
  );
  
   const projects=[
     {
       name:"Medical Export",
       desc:"A proejct based on inquiry of products.The project is based on sanity and nextjs the features of the project are. It is divided it categories and subcategories.",
       code: "github.com/deep-69bits/Medical_Export",
       live: "https://medical-export-9v8o.vercel.app/",
       img:"https://ik.imagekit.io/cmef8hxb6/d1_TE_aoT7fZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676305381541"
     },
     {
      name:"Surya ",
      desc:"The one of the freelance i made with my friends the project is based on nextjs.",
      live: "https://surya-project.vercel.app/",
      img:"https://ik.imagekit.io/cmef8hxb6/s22_IX3rxBzAk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676305658395"
     },
     {
      name:"Mona & hubot",
      desc:"The website is clone of the website mona and hubot this was my first freelancing project based on remix ",
      live: "http://mona-hubot.vercel.app/",
      code: "https://github.com/deep-69bits/MONA-HUBOT",
      img:"https://ik.imagekit.io/cmef8hxb6/s2_vszlsExUY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676305772949"
     },
     {
      name:"FACULTY-RECRUITMENT-PORTAL",
      desc:"Through this project, we attempt to make a faculty recruitment portal for our college,IIIT Lucknow.This portal will be well equipped with all the necessary details and terms and conditions. It will be made sure that everyone visiting the portal has a smooth experience. ",
      live: "https://faculty-recruitment-portal.vercel.app/",
      code: "https://github.com/deep-69bits/FACULTY-RECRUITMENT-PORTAL",
      img:"https://ik.imagekit.io/cmef8hxb6/s5_7687Tz2kV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676321380273"
     },
     {
      name:"GOClasses",
      desc:"Go Classes is a much-needed one-stop solution for all your educational needs inspite of having multiple applications for individual work there was no centralized application to work on all the things a student ever needs for that we have come up with an idea of GO classes. ",
      code: "https://github.com/deep-69bits/GOClasses",
      img:"https://ik.imagekit.io/cmef8hxb6/s7_5e5Rg7pxa5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676321931977"
     },

   ]

   
  return loading ?(
    <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }}> 
    <motion.div className="w-full bg-cover "
    initial={{ y: -600 }} animate={{ y: 0 }} transition={{ delay: 0 }}
   >
   <div className="context bg-black">
        <h1 className="lg:text-8xl sm:text-6xl text-center m-auto text-white font-bold">Deepak Chattwani</h1>
         <div className="mx-auto lg:w-[10%] sm:w-[30%] mt-20 flex ">
          <a  className="cursor-pointer mx-3" href="github.com/deep-69bits"><img className="justify-center cursor-pointer  rounded-full w-[40px]" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /></a>
          <a  className="cursor-pointer mx-3" href="https://www.linkedin.com/in/deepak-chattwani-340bb8227/"><img className="justify-center cursor-pointer  rounded-full w-[40px]" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" alt="" /></a>
         </div>
    </div>
  

      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    
    <div className="w-full h-screen bg-white my-10">
       <div className="lg:w-[60%] m-auto text-center bg-white sm:w-full px-5">
        <h1 className="text-4xl font-bold ">About Me</h1>
        <img className="rounded-full w-[200px] m-auto my-10" src="https://ik.imagekit.io/cmef8hxb6/iamges/deep_kUuozQ8Z5R?ik-sdk-version=javascript-1.4.3&updatedAt=1668596521659" alt="" />
        <p className="text-[1rem] font-normal my-8">As a web developer and student, I have a unique set of skills and experiences that set me apart in the technology industry. I have a passion for both coding and learning, which allows me to constantly improve my skills and stay up-to-date with the latest developments in web development. I enjoy problem-solving and finding creative solutions to technical challenges, and I take pride in delivering high-quality, user-friendly websites and web applications.Being a student has also helped me to develop strong critical thinking and communication skills, which are valuable assets in the field of web development. I am always eager to learn and explore new technologies, and I believe that my combination of technical expertise and academic background gives me a well-rounded perspective that will serve me well in my future career.</p>
       </div>

       <div className="lg:w-[75%] my-16 m-auto  text-center bg-white sm:w-full px-5 grid grid-flow-row lg:grid-cols-5 sm:grid-cols-1 "> 
         <div className="mx-4 my-10">
          <h1 className="text-2xl ">Languages</h1>
           <div className="grid grid-flow-row lg:grid-cols-2 sm:grid-cols-4  my-3">
            <div className="m-1 inline-block "><img className="w-[80px]  m-auto" src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" /></div>
            <div className="m-1 inline-block"><img className="m-auto w-[80px] " src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="" /></div>
            <div className="m-1 inline-block"><img className=" m-auto w-[80px] " src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" /></div>
            <div className="m-1 inline-block"><img className="m-auto w-[80px] " src="https://cdn-icons-png.flaticon.com/512/3665/3665923.png" alt="" /></div>
           </div>
         </div>
         <div className="mx-4 my-10">
          <h1 className="text-2xl ">Front-End</h1>
           <div className="grid grid-flow-row lg:grid-cols-2 sm:grid-cols-4  my-3">
            <div className="m-1 inline-block "><img className="m-auto w-[80px]" src="https://cdn-icons-png.flaticon.com/512/875/875209.png" alt="" /></div>
            <div className="m-1 inline-block"><img className=" m-auto w-[80px]" src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" /></div>
            <div className="m-1 inline-block"><img className=" m-auto w-[70px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="" /></div>
            <div className="m-1 inline-block"><img className="m-auto  w-[80px]" src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png" alt="" /></div>
           </div>
         </div>
         <div className="mx-4 my-10">
          <h1 className="text-2xl ">Back-End</h1>
           <div className="grid grid-flow-row lg:grid-cols-2 sm:grid-cols-4  my-3">
            <div className="m-1 inline-block"><img className="m-auto  w-[100px]  mt-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="" /></div>
            <div className="m-1 inline-block"><img className=" m-auto w-[100px]  mt-3" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" /></div>
            
           </div>
         </div>
         <div className="mx-4 my-10">
          <h1 className="text-2xl ">DataBases & Managment</h1>
           <div className="grid grid-flow-row lg:grid-cols-2 sm:grid-cols-4  my-3">
            <div className="m-1 inline-block"><img className="m-auto  w-[80px]" src="data:image/png;base64,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" alt="" /></div>
            <div className="m-1 inline-block"><img className="m-auto  w-[90px]" src="data:image/jpeg;base64,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" alt="" /></div>
            <div className="m-1 inline-block"><img className="m-auto  w-[90px]" src="data:image/png;base64,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" alt="" /></div>
           </div>
         </div>
         <div className="mx-4 my-10">
          <h1 className="text-2xl ">Tools</h1>
           <div className="grid grid-flow-row lg:grid-cols-2 sm:grid-cols-4  my-3">
           <div className="m-1 inline-block"><img className="m-auto  w-[90px]" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /></div>
           <div className="m-1 inline-block"><img className="m-auto w-[80px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="" /></div>
           <div className="m-1 inline-block"><img className="m-auto  w-[90px] mt-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png" alt="" /></div>
            <div className="m-1 inline-block"><img className="m-auto  w-[90px] mt-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png" alt="" /></div>
           </div>
         </div>
       </div>
       
       <div className="lg:w-[80%] m-auto text-center bg-white sm:w-full px-5 mt-10">
       <h1 className="text-4xl font-bold ">Recent Projects</h1>
         <div className="my-8 grid grid-flow-row lg:grid-cols-3 sm:grid-cols-1  ">
         {
          projects.map((item,index)=>{
            return(
              <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl my-4 dark mx-auto">
              <a href={item?.code || ""} >
                  <img class="rounded-t-lg h-[200px] w-full"  src={item.img} alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">{item.name}</h5>
                  </a>
                  <p class="mb-3 font-normal text-black">{item.desc}</p>
                  {
                    item.live?
                    <a href={item.live} class=" m-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0099ff] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Live
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    :""
                  }
                  {
                    item.code?
                    <a href={item.code} class="m-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0099ff] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Code
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    :""
                  }
              </div>
          </div>
            );
          })
         }
         </div>
       </div>
       <footer>
       <div className="w-full h-16 bg-black text-center text-white text-xl">
       <p className="pt-5">
       &#169; Deepak Chattwani, 2023
       </p>
       </div>
      </footer>
    </div>
  </motion.div>
    </motion.div>
  ):(
    <div>
    <motion.div initial={{ scale: 0 }} exit={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1, scale: 2 }} className="h-[100vh] w-full  bg-black ">
        
        <motion.div initial={{ scale: 0 }} exit={{ scale: 2 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.1 }} >
          <h1 className="text-4xl text-[#0099ff] font-bold  pt-[20%] text-center">
          <TypewriterComponent 
          deleteSpeed={200}
          onInit={(typewriter) =>{
            typewriter.typeString("Deep")
            .pauseFor(3)
            .deleteAll()
            .start();
          }} ></TypewriterComponent>
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
