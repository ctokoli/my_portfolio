const TimelineComponents = () => {
    return ( 
        <div>
            <div className="max-w-2xl mx-auto">

{/* Timeline Container */}
<div className="relative wrap overflow-hidden p-10 h-full">

    {/* Timeline Dots */}
    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>

    {/* Timeline Items */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Event 1</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900">Description of event 1.</p>
            <p className="text-xs text-gray-600">Date: January 1, 2022</p>
        </div>
    </div>

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
        </div>
        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Event 2</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900">Description of event 2.</p>
            <p className="text-xs text-gray-600">Date: February 15, 2022</p>
        </div>
    </div>

    {/* Add more timeline items as needed */}

</div>
</div>
        </div>
     );
}
 
export default TimelineComponents;