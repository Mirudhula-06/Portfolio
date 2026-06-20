import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './certificates.component.html',
})
export class CertificatesComponent {
certificates = [

  {
    title: 'Agile Scrum',
    platform: 'Certification',
    description: 'Learned Agile methodology, Scrum lifecycle and project collaboration.',
    image: 'agile.png',
    link: 'AGILE SCRUM.pdf'
  },

  {
    title: 'AWS for Beginners',
    platform: 'Cloud Certification',
    description: 'Introduction to AWS cloud concepts and services.',
    image: 'aws.png',
    link: 'AWS_for_Beginners.pdf'
  },

  {
    title: 'ServiceNow Certificate',
    platform: 'ServiceNow',
    description: 'Completed ServiceNow introductory certification program.',
    image: 'servicenow.png',
    link: 'Certificate - ServiceNow.pdf'
  },

  {
    title: 'Data Science Certificate',
    platform: 'Data Science',
    description: 'Covered data analysis and basic machine learning concepts.',
    image: 'datascience.png',
    link: 'datascience certificate.pdf'
  },

  {
    title: 'Deloitte Job Simulation',
    platform: 'Deloitte',
    description: 'Completed Deloitte technology job simulation program.',
    image: 'deloitte.png',
    link: 'Deloitte Job simulation.pdf'
  },

  {
    title: 'Java Programming',
    platform: 'Java',
    description: 'Certification in Java programming fundamentals and OOP concepts.',
    image: 'java.jpg',
    link: 'java programming.jpeg'
  },

  {
    title: 'Infosys Java',
    platform: 'Infosys',
    description: 'Completed Infosys Java for Beginners training.',
    image: 'infosys-java.png',
    link: 'infosys-Java for beginners.pdf'
  },

  {
    title: 'Web Development',
    platform: 'Infosys',
    description: 'Completed training in website development fundamentals.',
    image: 'webdev.png',
    link: 'Infosys-website development.pdf'
  },

  {
    title: 'Cloud Computing',
    platform: 'Cloud',
    description: 'Introduction to cloud computing concepts and architecture.',
    image: 'cloud.png',
    link: 'introduction to cloud computing.pdf'
  },
    {
  title: 'Generative AI Productivity',
  platform: 'Udemy',
  description: 'Completed a 12.5-hour course on using Generative AI to enhance personal productivity, taught by Anton Voroniuk.',
  image: 'genai.png',
  link: 'gen-ai.pdf'
},
{
  title: 'Oracle AI Foundations',
  platform: 'Oracle',
  description: 'Achieved Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate, recognized by Oracle Corporation.',
  image: 'oracle-cloud.png',
  link: 'Oracle-cloud.pdf'
},
  {
    title: 'Oracle Certificate',
    platform: 'Oracle',
    description: 'Oracle certification covering database and cloud basics.',
    image: 'oracle.png',
    link: 'Oracle certificate.pdf'
  },

  {
    title: 'ML Foundation',
    platform: 'Machine Learning',
    description: 'Learned machine learning fundamentals and AI basics.',
    image: 'ml.png',
    link: 'ML FOUNDATION.pdf'
  },

  {
    title: 'Web Scraping',
    platform: 'Python',
    description: 'Built web scraping applications using Python.',
    image: 'webscraping.png',
    link: 'web scraping.pdf'
  },
  {
  title: 'DML Statements',
  platform: 'Great Learning Academy',
  description: 'Completed a free online course on Data Manipulation Language (DML) statements in February 2024.',
  image: 'dml.png',
  link: 'dml.pdf'
}


];
}