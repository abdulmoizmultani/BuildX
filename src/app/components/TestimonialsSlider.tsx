import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-neutral-800 text-white rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors shadow-lg"
      aria-label="Next testimonial"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-neutral-800 text-white rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors shadow-lg"
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export function TestimonialsSlider() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5,
      text: 'BuildPro exceeded our expectations in every way. They transformed our outdated home into a modern masterpiece. The attention to detail and professionalism was outstanding.',
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      rating: 5,
      text: 'We hired BuildPro for our office expansion and couldn\'t be happier. They completed the project on time and within budget. Highly professional team!',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      rating: 5,
      text: 'As a developer, I\'ve worked with many contractors. BuildPro stands out for their expertise, reliability, and commitment to quality. They\'re my go-to team.',
    },
    {
      name: 'David Thompson',
      role: 'Homeowner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      rating: 5,
      text: 'From initial consultation to final walkthrough, BuildPro made our kitchen renovation stress-free. The craftsmanship is impeccable, and the team was wonderful to work with.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Restaurant Owner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      rating: 5,
      text: 'BuildPro completed our restaurant renovation in record time without compromising quality. Their ability to work around our schedule was impressive.',
    },
    {
      name: 'James Wilson',
      role: 'Architect',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      rating: 5,
      text: 'I regularly recommend BuildPro to my clients. Their construction expertise and ability to execute complex designs is second to none.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-neutral-500 uppercase tracking-wider text-sm mb-2">Testimonials</div>
          <h2 className="text-4xl md:text-5xl mb-4 text-neutral-900">
            What Our Clients Say
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with BuildPro.
          </p>
        </div>

        <div className="relative px-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-neutral-50 p-8 rounded-lg relative h-full">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-neutral-200" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-neutral-700 mb-6 relative z-10 min-h-[120px]">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-neutral-200"
                    />
                    <div>
                      <div className="text-neutral-900">{testimonial.name}</div>
                      <div className="text-neutral-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-neutral-900 mb-2">A+</div>
              <div className="text-neutral-600 text-sm">BBB Rating</div>
            </div>
            <div>
              <div className="text-3xl text-neutral-900 mb-2">500+</div>
              <div className="text-neutral-600 text-sm">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl text-neutral-900 mb-2">98%</div>
              <div className="text-neutral-600 text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl text-neutral-900 mb-2">25+</div>
              <div className="text-neutral-600 text-sm">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
