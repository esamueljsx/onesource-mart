import AppSection from '../components/SectionComponents/AppSection'
import ImageCarousel from '../components/ui/ImageCarousel'
import type { CarouselImage } from '../components/ui/ImageCarousel'
import BouncyAttractor from '../components/ui/BouncyAttractor'

// --- Data for Carousel and Categories (Full Supermarket Content) ---
const carouselImages: CarouselImage[] = [
    {
        id: 1,
        src: '/images/carousel/groceries.webp', 
        alt: 'Fresh produce and groceries',
        caption: "Fresh Groceries: Everything you need for the week ahead.",
    },
    {
        id: 2,
        src: '/images/carousel/clothing.avif',
        alt: 'Stylish casual wear and clothing',
        caption: "New Arrivals in Apparel: Affordable style for the whole family.",
    },
    {
        id: 3,
        src: '/images/carousel/electronics.jpg', 
        alt: 'Home electronics and gadgets',
        caption: "Smart Tech Deals: Upgrade your home entertainment system.",
    },
]

interface Category {
    id: number;
    title: string;
    icon: string; 
    bgColor: string;
}

const featuredCategories: Category[] = [
    { id: 1, title: "Fresh Groceries", icon: "🛒", bgColor: "bg-green-100" },
    { id: 2, title: "Apparel & Shoes", icon: "👚", bgColor: "bg-pink-100" },
    { id: 3, title: "Home & Kitchen", icon: "🏡", bgColor: "bg-yellow-100" },
    { id: 4, title: "Electronics", icon: "💻", bgColor: "bg-blue-100" },
    { id: 5, title: "Health & Beauty", icon: "🛁", bgColor: "bg-purple-100" },
];

// --- Sub-Components ---

const HeroSection = () => (
    // Content is now a direct child of the centered AppSection div
    <div className='flex flex-col lg:flex-row gap-12 items-center justify-between min-h-[calc(100vh-80px)] pt-20' id="home">
        <div className='flex flex-col justify-center shrink-0 lg:w-1/2 items-center lg:items-start text-center lg:text-left'>
            <h1 className='font-extrabold text-6xl md:text-8xl lg:text-9xl leading-tight mb-4 text-gray-900'>
                Shop <span className='text-red-600'>Smart</span>.
                <br />
                Find <span className='text-red-600'>Everything</span>.
            </h1>
            <p className='text-xl md:text-2xl text-gray-700 max-w-lg mb-8'>
                From fresh produce to the latest electronics, find everything you need in one easy place. Quality and value guaranteed.
            </p>
            
            <a href="#products">
                <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105'>
                    <BouncyAttractor text="Explore Departments" customStyle="text-xl"/>
                </button>
            </a>
        </div>

        <div className='lg:w-1/2 w-full'>
            <ImageCarousel images={carouselImages} className='max-w-full' />
        </div>
    </div>
);

const CategoriesSection = () => (
    <AppSection id="products" className='bg-gray-50'>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Shop Our Wide Range of Departments</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {featuredCategories.map(cat => (
                <div key={cat.id} className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 transition-transform group-hover:scale-110 ${cat.bgColor}`}>
                        {cat.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600">{cat.title}</h3>
                </div>
            ))}
        </div>
    </AppSection>
);

const FeaturesSection = () => (
    <AppSection id="about" className='bg-white'>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose OneMart?</h2>
        <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm">
                <span className="text-5xl mb-4 text-red-600">⚡</span>
                <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your order delivered quickly, whether it's groceries or a new gadget.</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm">
                <span className="text-5xl mb-4 text-red-600">⭐</span>
                <h3 className="text-2xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">Highest quality standards across all departments, from fresh food to durable goods.</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm">
                <span className="text-5xl mb-4 text-red-600">💸</span>
                <h3 className="text-2xl font-semibold mb-2">Great Prices</h3>
                <p className="text-gray-600">Competitive everyday pricing on everything you need for your home and lifestyle.</p>
            </div>
        </div>
    </AppSection>
);

// --- Main App Component ---

function Home() {
    return (
        <div className='flex items-center justify-center w-screen'>
            <div className="flex flex-col min-h-screen bg-white text-gray-900 max-w-390 rounded-[4rem] overflow-hidden">
                
                {/* The main content area should be full width to allow sections to stretch */}
                <main className='w-full pt-20'> 
                    <AppSection id="hero" className='min-h-[calc(100vh-80px)] pt-20'>
                        <HeroSection />
                    </AppSection>
                    
                    <CategoriesSection />
                    
                    <FeaturesSection />

                    <AppSection id="promos" className='bg-red-50'>
                        <div className='text-center py-10 md:py-20'>
                            <h2 className='text-4xl font-bold mb-4 text-red-800'>Weekly Deals & Exclusive Offers!</h2>
                            <p className='text-xl text-gray-700 mb-8'>Sign up for our newsletter and get 10% off your first order on any department.</p>
                            <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition duration-300'>
                                <BouncyAttractor text="Sign Up Now" customStyle="text-xl"/>
                            </button>
                        </div>
                    </AppSection>
                </main>
            </div>
        </div>
    )
}

export default Home;