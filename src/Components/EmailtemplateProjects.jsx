import React from 'react'
import emailProject1 from "../assets/emailTemplates/emailTemplateproj1.png"
import emailProject2 from "../assets/emailTemplates/emailTemplateproj2.png"
import emailProject3 from "../assets/emailTemplates/emailTemplateproj3.png"
import emailProject4 from "../assets/emailTemplates/emailTemplateproj4.png"
import emailProject5 from "../assets/emailTemplates/emailTemplateproj5.png"
import { CiLocationArrow1 } from "react-icons/ci";


const emailTemplatedata = [
    {
        "projectImage": emailProject1,
        "tools": "Figma, HTML, CSS.",
        "link": "https://webuiexpert.com/emailshowcase/emailmarketingtemp1.html"
       },
       {
        "projectImage": emailProject2,
        "tools": "Figma, HTML, CSS.",
        "link": "https://webuiexpert.com/emailshowcase/emailmarketingtemp7/email.html"
       },
       {
        "projectImage": emailProject3,
        "tools": "Figma, HTML, CSS.",
        "link": "https://webuiexpert.com/emailshowcase/emailmarketingtemp4.html"
       },
       {
        "projectImage": emailProject4,
        "tools": "Figma, HTML, CSS.",
        "link": "https://webuiexpert.com/emailshowcase/emailmarketingtemp5.html"
       },
       {
        "projectImage": emailProject5,
        "tools": "Figma, HTML, CSS.",
        "link": "https://webuiexpert.com/emailshowcase/emailmarketingtemp8/email.html"
       },
    ]

function EmailtemplateProjects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          
          {
            emailTemplatedata.map((wPItem, index) => (
              <div key={index} className="flex flex-col items-start bg-white rounded">
              <img className="border p-1  rounded-lg flex-shrink w-full h-68 object-cover  object-center mb-4" src={wPItem.projectImage} alt="" />
              <h2 className="title-font text-left font-medium lg:text-lg text-sm text-gray-900">{wPItem.tools}</h2>
              <a className="visitSite flex underline hover:no-underline items-center gap-3" href={wPItem.link}><p className="font-bold text-black transition-all duration-500">visit website</p> <CiLocationArrow1 className="arrowsvg rotate-[45deg]" /> </a>
              </div>
            ))
          }
          
        
        </div>
      </div>
    </section>
  )
}

export default EmailtemplateProjects