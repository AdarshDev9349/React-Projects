import React from 'react';
import {useState} from 'react';
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
            <div>
                <div
                    style={{
                        backgroundColor: "black",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "5px",
                        border: "1px solid gray",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    onClick={() => setIsOpen(!isOpen)} // can toggle the section
                >
                    <h2 style={{ color: 'blue' }}>{data.title}</h2>
                    <p
                        style={{
                            color: "white",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            width: "30px",
                            height: "30px",
                            fontSize: "30px",
                            textAlign: "center"
                        }}
                    >
                        {isOpen ? "-" : "+"}
                    </p>
                </div>
                {isOpen && (
                    <p style={{ padding: "0 20px" }}>{data.content}</p>
                )}
            </div>
        );
    };

    return (
        <div>
            {accordionData.map((data) => (
                <AccordionComponent data={data} />
            ))}
        </div>
    );
};

export default Accordion;
