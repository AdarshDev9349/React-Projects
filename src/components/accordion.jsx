import React, { useState } from 'react';

const Accordion = () => {
  const accordionData = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage the state of your application efficiently."
    },
    {
      title: "Why use React?",
      content: "React is flexible, efficient, and declarative. It uses a virtual DOM to improve performance and allows for building complex applications with ease."
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components. Components can be either class-based or function-based, and they help divide the UI into independent, reusable pieces."
    },
    {
      title: "What are React Hooks?",
      content: "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, and useContext."
    },
    {
      title: "What is JSX?",
      content: "JSX stands for JavaScript XML. It allows you to write HTML-like syntax in your JavaScript files. JSX gets compiled to React.createElement() calls behind the scenes."
    },
    {
      title: "What is a Virtual DOM?",
      content: "The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to detect changes and update only the parts of the UI that changed, improving performance."
    },
    {
      title: "What is the difference between props and state?",
      content: "Props are read-only and passed from parent to child, while state is managed within the component. State can be updated using the setState function or useState hook."
    },
    {
      title: "What is lifting state up?",
      content: "Lifting state up is the process of moving shared state to a common ancestor component to allow sibling components to access and update the state."
    }
  ];

  const AccordionComponent = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ margin: "10px 0" }}>
        <div
          style={{
            backgroundColor: "black",
            padding: "15px 20px",
            borderRadius: "8px",
            border: "1px solid gray",
            boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "background-color 0.3s",
          }}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#111"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "black"}
        >
          <h2 style={{ color: 'orange', margin: 0, fontSize: "18px" }}>{data.title}</h2>
          <div
            style={{
              color: "white",
              backgroundColor: "#222",
              width: "30px",
              height: "30px",
              fontSize: "22px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease"
            }}
          >
            {isOpen ? "−" : "+"}
          </div>
        </div>
        <div
          style={{
            maxHeight: isOpen ? "500px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
            backgroundColor: "#1a1a1a",
            padding: isOpen ? "10px 20px" : "0 20px",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            color: "#ccc",
            fontSize: "15px",
            lineHeight: "1.5"
          }}
        >
          {isOpen && <p>{data.content}</p>}
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      {accordionData.map((data, index) => (
        <AccordionComponent key={index} data={data} />
      ))}
    </div>
  );
};

export default Accordion;
