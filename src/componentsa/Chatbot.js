import React, { useState } from "react";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions = [
    {
      id: 1,
      question: "Why can't I see Add item option?",
      answer:
        "If you have the super admin role or the admin role then only you can add your items",
    },
    {
      id: 2,
      question:
        "How do I update the quantity of an existing item in my inventory?",
      answer: "You can use the edit option that is present in every table",
    },
    {
      id: 3,
      question:
        "How do I create a new employee account and assign them permissions?",
      answer:
        "Only Super Admins can edit or assign permissions using the Add and Edit option in the employees table",
    },
    {
      id: 4,
      question: "Can I view a list of all items currently in stock?",
      answer:
        "We have provided a seperate table for Stock which is directly connected to the inwards, outwards and returns table",
    },
  ];

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question.id);
    setSelectedAnswer(question.answer);
  };

  const handleBackClick = () => {
    if (selectedQuestion) {
      setSelectedQuestion(null);
      setSelectedAnswer("");
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4">
      <div className="relative">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Chat with us
        </button>
        {isOpen && (
          <div className="absolute z-10 right-0 bottom-0 bg-white rounded-lg shadow-lg w-64 p-4">
            {selectedQuestion ? (
              <>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 mb-2"
                  onClick={handleBackClick}
                >
                  Back
                </button>
                <h3 className="font-bold text-lg mb-2">{selectedQuestion}</h3>
                <p>{selectedAnswer}</p>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 mb-2"
                  onClick={handleBackClick}
                >
                  Close
                </button>
                <h3 className="font-bold text-lg mb-2">Select a question</h3>
                <div className="overflow-y-scroll h-32">
                  {questions.map((question) => (
                    <div key={question.id}>
                      <button
                        type="button"
                        className="text-left w-full py-2 hover:text-blue-500"
                        onClick={() => handleQuestionClick(question)}
                      >
                        {question.question}
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
