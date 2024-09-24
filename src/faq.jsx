import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './assets/css/faq.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const { ref, inView } = useInView({
        triggerOnce: false,  
        threshold: 0.1,  
    });
    
    const fadeInLeft = (index) => useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 1100 },
        delay: index * 200, 
        reset: true,       
    });
    

    const questions = [
        {
            question: "Do you enjoy any sports or physical activities?",
            answer: "After studying all day or working on projects, I always go out to play football. Sometimes, I ride my motorcycle to get some fresh air, and I hang out with my friends too."
        },
        {
            question: "What do you like to do in your free time?",
            answer: "During my free time or on weekends, I spend the whole day playing football. Sometimes, I ride my bike and hang out with my friends, enjoying night outs and parties when I have the time."
        },
        {
            question: "Do you enjoy traveling? If so, where have you been?",
            answer: "I haven't traveled out of the country yet, but I once visited Cebu and enjoyed the vibes at Cebu IT Park. Here in Iloilo, I love biking to far places, exploring famous waterfalls, beaches, and other tourist spots, all by bike."
        },
        {
            question: "What new skills or hobbies are you currently exploring?",
            answer: "I’m currently exploring Express, Node.js, and Figma for web design, just honing my skills."
        },
        {
            question: "What types of music do you enjoy listening to?",
            answer: "I love listening to OPM songs and artists like the BINI girl group, Hev Abi, and classic OPM songs. I enjoy listening while working, as it enhances my productivity."
        },
        {
            question: "How do you like to stay updated on trends in your interests?",
            answer: "To keep up with the latest trends in programming, I check job hunting sites to see the preferred skills employers are looking for, giving me ideas on what to study. I also follow social media accounts on LinkedIn, TikTok, and Facebook groups related to my interests."
        }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <animated.div  ref={ref} style={fadeInLeft(0)} className="faq-main-container">
            <h2>FAQ</h2>
            {questions.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                        {item.question} <span className="plus-sign">+</span>
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">{item.answer}</div>
                    )}
                </div>
            ))}
        </animated.div>
    );
}

export default FAQ;
