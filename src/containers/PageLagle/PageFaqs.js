import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function PageFaqs() {

  const questions = [
    {
      question: "Q1. Lorem Ipsum is simply dummy text?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "Q2. Lorem Ipsum is simply dummy text?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "Q3. Lorem Ipsum is simply dummy text?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "Q4. Lorem Ipsum is simply dummy text?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "Q5. Lorem Ipsum is simply dummy text?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "Q6. Lorem Ipsum is simply dummy text?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      question: "Q7. Lorem Ipsum is simply dummy text?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Frequently asked questions | Adstar</title>
      </Helmet>

      <div className="breadcrumb-outer">
          <div className="container-lg">   
              <div className="breadcrumb-bx">
                  <Link className="breadcrumb-link" to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                  <Link className="breadcrumb-link breadcrumb-active">Faqs</Link>
              </div>
          </div>
      </div>

      <section className="pt-3 pb-5">
        <div className="container-lg lagle-container">
          <div className="page-heading">FAQs</div>
          <div className="page-sub-heading">Frequently asked questions</div>

          {/* <div className="faqs-accordion mt-4">
            {questions.map((item, index) => (
              <div className="acc-item" key={index}>
                <div
                  className={`acc-heding ${ openIndex === index ? "" : "active"}`}
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.question}
                  <span className="down-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                    </svg>
                  </span>
                </div>

                <div
                  className={`acc-data ${openIndex === index ? "" : "active"}`}
                >
                  <div className="faqs-data">{item.answer}</div>
                </div>
              </div>
            ))}
          </div> */}

          <div id="faqsaccordion" className="faqs-accordion mt-4"> {/*  data-bs-parent="#faqsaccordion" */}
              {questions.map((item, index) => (
              <div className="acc-item" key={index}>
                  <div className="acc-heding collapsed" id={`heading${index}`} data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                    {item.question}
                    <span className="down-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                      </svg>
                    </span>
                  </div>

                  <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`}>
                      <div className="faqs-data">
                        {item.answer}
                      </div>
                  </div>
              </div>
              ))}
            </div>

        </div>
      </section>

    </div>
  );
};
