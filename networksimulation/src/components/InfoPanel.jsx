const InfoPanel = () => {
    return (
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-pink-400">5G Network Concepts</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <span className="font-medium text-gray-200">Enhanced Mobile Broadband (eMBB):</span>
              <p className="text-gray-400">Provides high data rates and increased capacity.</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <span className="font-medium text-gray-200">Ultra-Reliable Low-Latency Communication (URLLC):</span>
              <p className="text-gray-400">Enables mission-critical applications requiring very low latency.</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <span className="font-medium text-gray-200">Massive Machine-Type Communications (mMTC):</span>
              <p className="text-gray-400">Supports a very large number of connected devices.</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <span className="font-medium text-gray-200">Network Slicing:</span>
              <p className="text-gray
  -400">Allows multiple virtual networks to be created on top of a common shared physical infrastructure.</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <span className="font-medium text-gray-200">Beamforming:</span>
              <p className="text-gray-400">Focuses a wireless signal towards a specific receiving device, rather than broadcasting to a wide area.</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
  
  export default InfoPanel
  
  