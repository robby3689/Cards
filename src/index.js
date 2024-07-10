
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = [
    {
        "id": 1,
        "title": "Weekly Newsletter",
        "description": "Get the latest articles and insights from industry experts every week. Enhance your skills and knowledge with our curated content."
    },
    {
        "id": 2,
        "title": "No Spam Guarantee",
        "description": "We value your privacy. Receive only relevant information and updates, without any spam or unnecessary emails."
    },
    {
        "id": 3,
        "title": "Exclusive Offers",
        "description": "Stay updated with exclusive offers, discounts, and promotions on our latest courses and services."
    },
    {
        "id": 4,
        "title": "Tech Updates",
        "description": "Stay informed with the latest tech news, trends, and innovations shaping the industry."
    },
    {
        "id": 5,
        "title": "Career Tips",
        "description": "Receive career advice, job opportunities, and tips to advance your career in the tech industry."
    },
    {
        "id": 6,
        "title": "Learning Resources",
        "description": "Discover new learning resources, tutorials, and guides to expand your knowledge and skills."
    },
    {
        "id": 7,
        "title": "Community Events",
        "description": "Stay connected with local and global tech community events, workshops, and conferences."
    },
    {
        "id": 8,
        "title": "Industry Insights",
        "description": "Gain valuable insights from industry leaders and experts on current trends and best practices."
    }
];

ReactDOM.render(
    <React.StrictMode>
        <App data={data} />
    </React.StrictMode>,
    document.getElementById('root')
);
