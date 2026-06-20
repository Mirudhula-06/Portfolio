import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,NgxTypedJsModule],
  templateUrl: './app.component.html',
})

export class HomeComponent {

  sendMessage(name: string, email: string, message: string): void {
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mirudhula.j06@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, '_blank', 'noopener');
  }

  // skills = [
  //   {
  //     title: 'Languages',
  //     items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL']
  //   },
  //   {
  //     title: 'Frontend',
  //     items: ['Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
  //   },
  //   {
  //     title: 'Backend',
  //     items: ['Spring Boot', 'REST APIs', 'Microservices', 'JWT', 'Swagger']
  //   },
  //   {
  //     title: 'Databases',
  //     items: ['MySQL', 'PostgreSQL', 'MongoDB']
  //   },
  //   {
  //     title: 'Tools',
  //     items: ['Git', 'GitHub', 'Postman', 'Docker', 'VS Code']
  //   },
  //   {
  //     title: 'AI / ML',
  //     items: ['YOLOv8', 'DeepSORT', 'RAG Basics', 'LLM Fundamentals']
  //   }
  // ];
skills = [
  {
    title: 'Frontend Development',
    icon: 'bi bi-window-code',
    level: 90,
    items: ['Angular', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: 'bi bi-hdd-network',
    level: 85,
    items: ['Java', 'Spring Boot', 'REST API', 'Microservices', 'JWT']
  },
  {
    title: 'Database',
    icon: 'bi bi-database',
    level: 80,
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL']
  },
  {
    title: 'AI / ML',
    icon: 'bi bi-robot',
    level: 75,
    items: ['Python', 'YOLOv8', 'DeepSORT', 'RAG', 'LLM']
  },
  {
    title: 'Tools',
    icon: 'bi bi-tools',
    level: 85,
    items: ['Git', 'GitHub', 'Postman', 'Docker', 'Swagger']
  },
  {
    title: 'UI Design',
    icon: 'bi bi-vector-pen',
    level: 78,
    items: ['Figma', 'Responsive UI', 'UX Basics', 'Animations']
  }
];
 projects = [
  {
    title: 'Guardian Vision',
    description: 'AI based child safety monitoring system using YOLOv8 and DeepSORT.',
    image: 'https://media.istockphoto.com/id/2196613675/photo/mock-up-cctv-footage-in-supermarket-people-shopping-in-a-grocery-store-multiple-camera-shows.jpg?s=2048x2048&w=is&k=20&c=rs6Fr3T2md4CKZqIxVatklRIMZ1VgnQ37V8php50hhQ=',
    tech: ['Python', 'YOLOv8', 'DeepSORT'],
    github: 'https://github.com/Nithya2705/Guardian-Vision-child-safety' // Paste this project's GitHub repository URL here
  },
  {
    title: 'Digital Gold Wallet',
    description: 'Full stack digital gold platform with wallet and payment modules.',
    image: 'https://media.istockphoto.com/id/2219056031/photo/gold-trading-gold-bars-with-stock-graph-chart-stock-business-and-finance-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZvbW177sarjupWoVs0l644AMmkZT6WY7onDjKaVcraY=',
    tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/bavanagaranR/digital-gold-wallet' // Paste this project's GitHub repository URL here
  },
  {
    title: 'Food Delivery Microservices',
    description: 'Microservices based food delivery system using Eureka and API Gateway.',
    image: 'https://media.istockphoto.com/id/1300476665/photo/high-angle-view-asian-chinese-womans-hand-on-mobile-app-for-online-food-delivery-during.webp?a=1&b=1&s=612x612&w=0&k=20&c=VXXr6i-b1x2C6Dyy8pvajVAV3t6-nXDFfLZZGB0r7TE=',
    tech: ['Spring Boot', 'Eureka', 'MySQL'],
    github: 'https://github.com/Mirudhula-06/Food-Delivery-Application' // Paste this project's GitHub repository URL here
  },
  {
    title: 'AI Based Attendance and Payroll System',
    description: 'AI enabled system for attendance tracking and automated payroll management.',
    image: 'https://media.istockphoto.com/id/2010266808/photo/finger-print-scan-male-employees-press-sensors-to-record-company-attendance-time-and-after.webp?a=1&b=1&s=612x612&w=0&k=20&c=GMC1zPeOSQ3Su35ZRGYb5okhwbOkuHHyPEhNBePx2zc=',
    tech: ['AI', 'Python', 'Database'],
    github: '' // Paste this project's GitHub repository URL here
  },
  {
    title: 'Railway Reservation System',
    description: 'Console-based Java application for managing railway reservations.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    tech: ['Java', 'OOP', 'Console Application'],
    github: 'https://github.com/Mirudhula-06/Railway-Reservation-System' // Paste this project's GitHub repository URL here
  },
  {
    title: 'AI-Based Pneumonia Detection System',
    description: 'AI-based system for detecting pneumonia from medical images.',
    image: 'https://images.unsplash.com/photo-1616012480717-fd9867059ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG5ldW1vbmlhfGVufDB8fDB8fHww',
    tech: ['Python', 'AI / ML', 'Image Analysis'],
    github: 'https://github.com/Mirudhula-06/AI-Based-Pneumonia-Detection' // Paste this project's GitHub repository URL here
  }
];
}
