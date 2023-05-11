import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';


const Assistance = () => {


  // const [showChatBot, setShowChatBot] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
    

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    const ChatHeader = () => (
      <div className="flex items-center justify-between bg-gray-700 text-white px-4 py-2">
        <div className="font-bold">SIMS Chatbot</div>
        <button className="text-white hover:text-gray-200" onClick={handleClose}>
          <XIcon className="h-5 w-5" />
        </button>
      </div>
    );


      const steps = [
        {
          id: 'greet',
          message: 'Hi, welcome to SIMS chatbot! What is your name?',
          trigger: 'name',
        },
        {
          id: 'name',
          user: true,
          trigger: 'hello',
        },
        {
          id: 'hello',
          message: 'Hi {previousValue}! How can I assist you today?',
          trigger: 'help',
        },
        {
          id: 'help',
          options: [
            { value: 'Business hours', label: 'Business hours', trigger: 'business hours' },
            { value: 'get-info', label: 'Get information', trigger: 'get-info' },
            { value: 'contact', label: 'contact', trigger: 'contact' },
          ],
        },
        {
          id: 'business hours',
          message: 'Our business hours are Monday-Friday, 9am-5pm',
          trigger: 'help',
        },
        {
          id: 'contact',
          message: 'simsupport@gmail.com',
          trigger: 'help',
        },
        {
          id: 'issue-description',
          user: true,
          trigger: 'issue-summary',
        },
        {
          id: 'issue-summary',
          message: 'Thank you for contacting us. For more queries feel free to reach out  simsupport@gmail.com',
          trigger: 'help',
        },
        // {
        //   id: 'view-issue-summary',
        //   component: (
        //     <div>
        //       <p>Issue description: "{({ steps }) => steps.issueDescription.value}"</p>
        //     </div>
        //   ),
        //   asMessage: true,
        //   trigger: 'done',
        // },
        {
          id: 'get-info',
          message: 'What information would you like to know?',
          trigger: 'info-type',
        },
        {
          id: 'info-type',
          options: [
            { value: 'Godown', label: 'Godown', trigger: 'godown' },
            { value: 'Employee', label: 'Employee', trigger: 'employee' },
            { value: 'other', label: 'other', trigger: 'other' },
          ],
        },
        {
          id: 'godown',
          message: 'what information would u like to know from godown',
          trigger: 'godown-info',
        },
        {
          id:'godown-info',
          options:[
            {value:'godownlocations', label:'Godown Locations', trigger:'godownlocations'},
            {value:'items', label:'Items', trigger:'items'},
          ]
           
        },
        {
          id:'godownlocations',
          message: 'chennai, Gurugrum, Noida , pune',
          trigger:'help'

        },
        {
          id:'items',
          message: 'laptop, headsets , speakers',
          trigger:'help'

        },
        // {
        //   id:'location-manager',
        //   message: 'chennai-sebastian, Gurugrum-Ashtosh, Noida-Vicky , pune-selva',
        //   trigger:'done'

        // },
        {
          id: 'employee',
          message: 'John',
          trigger: 'done',
        },
        {
          id: 'other',
          message: 'You can reach out us at simssupport@gmail.com',
          trigger: 'done',
        },
        // {
        //   id: 'other',
        //   message: 'Sorry, I am not programmed to handle that request. Please try something else.',
        //   trigger: 'help',
        // },
        {
          id: 'done',
          message: 'Is there anything else I can help you with?',
          trigger: 'ending',
        },
        // {
        //   id: 'end-chat',
        //   user:true,
        //   trigger: 'ending',
        // },
        {
          id: 'ending',
          options:[
            {value:'yes', label:'Yes', trigger:'yes'},
            {value:'no', label:'No', trigger:'no'},
          ],
          trigger:'done2'

        },
        {
          id:'yes',
          message:'how can i help you',
          trigger:'help'
        },

        {
          id:'no',
          message:'Have a good day ! Bye',
          
        }


      ];
    
     
    
    
    // return (
      // <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      //       {/* <ChatBot steps={steps}/> */}
      //       {/* <button onClick={toggleChatBot}>Click to chat</button>
      // {showChatBot && <ChatBot steps={steps} />} */}
      // <button onClick={toggleChatBot} style={{ background: '#1b73da', color: '#fff', padding: '10px', borderRadius: '50%', border: 'none', outline: 'none', cursor: 'pointer', boxShadow: '0px 3px 5px rgba(0,0,0,0.1)' }}>Chat</button>
      // {showChatBot && <ChatBot steps={steps} style={{ backgroundColor: '#f5f5f5', boxShadow: '0px 3px 5px rgba(0,0,0,0.1)' }} />}
            
      //   </div>
//       <div className="fixed bottom-8 right-8">
//       <button onClick={toggleChatBot} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none shadow-md">Chat</button>
//       {showChatBot && <ChatBot steps={steps} style={{ backgroundColor: '#f5f5f5', boxShadow: '0px 3px 5px rgba(0,0,0,0.1)' }} />}
//     </div>
        
//     );
// }



return (
  <div className="fixed right-0 bottom-0 mr-6 mb-6">
    {isOpen ? (
      <div className="rounded-lg shadow-lg bg-white w-80">
        <ChatBot
          headerComponent={<ChatHeader />}
          steps={steps}
        />
      </div>
    ) : (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
        onClick={handleOpen}
      >
        Open Chat
      </button>
    )}
  </div>
);
};


export default Assistance;



