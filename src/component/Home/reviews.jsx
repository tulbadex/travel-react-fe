import React from 'react';

function Reviews() {
  const reviews = [
    {
      name: "Yifei Chen",
      location: "Seoul, South Korea",
      date: "April 2019",
      review: "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me",
      rating: 5,
      img: "../../../../src/assets/img/reviews/yifei-chen.svg"
    },
    {
      name: "Kaori Yamaguchi",
      location: "Honolulu, Hawaii",
      date: "February 2017",
      review: "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommended to us by a long time friend, and I’m so glad we tried it out! The process was easy and",
      rating: 5,
      img: "../../../../src/assets/img/reviews/kaori-yamaguchi.svg"
    },
    {
      name: "Anthony Lewis",
      location: "Berlin, Germany",
      date: "April 2019",
      review: "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for",
      rating: 5,
      img: "../../../../src/assets/img/reviews/anthony-lewis.svg"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          What <span className="text-blue-500">Tripma</span> users are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow p-6">
              <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mx-auto md:mx-0 md:mr-4" />
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <p className="font-bold">{review.name}</p>
                <p className="text-gray-600">{review.location} | {review.date}</p>
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.57538 0.682938C8.77102 0.368281 9.22898 0.36828 9.42462 0.682937L11.908 4.67708C11.9768 4.78779 12.0862 4.86723 12.2127 4.89849L16.7788 6.02605C17.1385 6.11488 17.28 6.55042 17.0412 6.83372L14.01 10.4298C13.9259 10.5295 13.8842 10.658 13.8936 10.788L14.2322 15.4791C14.2588 15.8486 13.8884 16.1178 13.5451 15.9782L9.18834 14.2066C9.06758 14.1575 8.93242 14.1575 8.81166 14.2066L4.45488 15.9782C4.11165 16.1178 3.74115 15.8486 3.76783 15.4791L4.10644 10.788C4.11583 10.658 4.07406 10.5295 3.99004 10.4298L0.95879 6.83372C0.719989 6.55042 0.861505 6.11488 1.22122 6.02605L5.78727 4.89849C5.91383 4.86723 6.02318 4.78779 6.09202 4.67708L8.57538 0.682938Z" fill="url(#paint0_linear_2703_1830)"/>
                        <defs>
                            <linearGradient id="paint0_linear_2703_1830" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#605DEC"/>
                                <stop offset="1" stopColor="#2A26D9"/>
                            </linearGradient>
                        </defs>
                    </svg>

                  ))}
                </div>
                <p className="text-gray-600 mt-2">{review.review} <a href="#" className="text-blue-500">read more...</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
