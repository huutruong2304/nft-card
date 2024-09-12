export default function Skeleton() {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(10)].map((movie, index) => (
        <div key={index} className="text-white shadow-md p-2 h-max rounded-xl cursor-pointer hover:scale-105 transition-all bg-gray-800">
          <div className="relative rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 animate-pulse">
            <div className="absolute left-2 top-2 px-3 py-1 rounded-md bg-gray-600 text-transparent">
              {/* Placeholder for tier */}
              <div className="w-16 h-4 bg-gray-500 rounded-md"></div>
            </div>
            <div className="absolute top-1 right-0 px-3 py-2">
              {/* Placeholder for HeartFilled icon */}
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              {/* Placeholder for image */}
              <div className="w-full h-72 bg-gray-700 animate-pulse"></div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex py-2 text-white">
              <div className="w-1/2">
                {/* Placeholder for name */}
                <div className="w-24 h-4 bg-gray-500 rounded-md animate-pulse"></div>
              </div>
              <div className="w-1/2 flex gap-2 justify-end items-center">
                <div className="w-6 h-4 bg-gray-500 rounded-md"></div>
                <div className="w-24 h-4 bg-gray-500 rounded-md animate-pulse"></div>
              </div>
            </div>

            <div className="w-full flex py-1 items-center">
              {/* Placeholder for Avatar */}
              <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
              <p className="m-0 ml-3 text-sm w-24 h-4 bg-gray-500 rounded-md animate-pulse"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
