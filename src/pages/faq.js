import React from 'react';
import data from '../data/faqData.json';
import FAQBox from '../components/faq-box';
import './faq.css';

class FAQ extends React.Component {
    render() {
        return (
            <div className="faq">
                <h1>FAQ</h1>
                {data.map((v) => (
                    <FAQBox key={v.question} question={v.question} answer={v.answer} />
                ))}
            </div>
        );
    }
}

export default FAQ;
