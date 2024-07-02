function Reviews() {
    const reviews = [
      { name: "John Doe", date: "January 2024", review: "Great experience!", rating: 5 },
      { name: "Jane Smith", date: "February 2024", review: "Loved it!", rating: 4 }
    ];
  
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">What Tripma users are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-gray-600">{review.date}</p>
              <p className="text-gray-800">{review.review}</p>
              <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Reviews;  