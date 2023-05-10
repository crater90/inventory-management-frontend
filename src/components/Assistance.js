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
            { value: 'holiday', label: 'Holiday', trigger: 'holiday' },
            { value: 'get-info', label: 'Get information', trigger: 'get-info' },
            { value: 'other', label: 'Other', trigger: 'other' },
          ],
        },
        {
          id: 'holiday',
          message: 'closed on sunday',
          trigger: 'issue-summary',
        },
        {
          id: 'issue-description',
          user: true,
          trigger: 'issue-summary',
        },
        {
          id: 'issue-summary',
          message: 'Thank you for contacting us. If u have any more queries feel free to reach out at simssupport@gmail.com',
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
            { value: 'hours', label: 'Business hours', trigger: 'business-hours' },
            { value: 'location', label: 'Location', trigger: 'location' },
            { value: 'contact', label: 'Contact information', trigger: 'contact' },
          ],
        },
        {
          id: 'business-hours',
          message: 'Our business hours are Monday-Friday, 9am-5pm.',
          trigger: 'done',
        },
        {
          id: 'location',
          message: 'We are located at 123 Main St, Anytown, USA.',
          trigger: 'done',
        },
        {
          id: 'contact',
          message: 'You can reach us at simssupport@gmail.com',
          trigger: 'done',
        },
        {
          id: 'other',
          message: 'Sorry, I am not programmed to handle that request. Please try something else.',
          trigger: 'help',
        },
        {
          id: 'done',
          message: 'Is there anything else I can help you with?',
          trigger: 'help',
        },

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



