"use client"

import Image from "next/image"
import React, { useState } from 'react'
import FaqsImage from '@/public/FaqsImage.png'

const FAQs = ({ fontLora }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            question: "What is Guiderr.ai?",
            answer: "Guiderr.ai is an AI-powered travel guide app designed to help you explore destinations, discover hidden gems, and enhance your travel experience with personalized recommendations.",
        },
        {
            question: "How does Guiderr.ai work?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius suscipit ducimus omnis similique pariatur hic modi soluta? Voluptate, labore!",
        },
        {
            question: "Is Guiderr.ai available worldwide?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores a temporibus accusantium earum quos, sunt quam sed vero quae perferendis maxime quibusdam animi consectetur!",
        },
        {
            question: "Do I need an internet connection to use Guiderr.ai?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente fugiat sit?",
        },
    ];
    return (
        <section id="faqs" className="font-bold text-5xl relative overflow-hidden lg:overflow-visible mx-auto">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                <div className="flex flex-col text-start">
                    {/*acordion */}
                    <div>
                        <div className="max-w-2xl mx-auto p-4">
                            <h2 className={`${fontLora.className} font-extrabold text-4xl text-black mb-8 text-center lg:text-start`}>Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {items.map((item, index) => (
                                    <div key={index} className="border rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <span className={`text-lg font-bold ${fontLora.className}`}>{item.question}</span>
                                            <svg
                                                className={`w-6 h-6 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}
                                        >
                                            <div className="p-4 bg-white text-sm font-medium">
                                                <p className="text-black">{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <Image src={FaqsImage} alt="FAQs" className="w-full lg:h-full" />
                </div>
            </div>
        </section>
    )
}

export default FAQs