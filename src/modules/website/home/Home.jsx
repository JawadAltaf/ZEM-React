import Navbar from '../../../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='full-width banner-hero bg-orange-100 banner-1'>
                <div className='px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[100px] max-w-[1320px] lg:flex lg:items-center'>
                    <h1>hello world!</h1>
                </div>
            </div>

        </>
    )
}

export default Home