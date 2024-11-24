const PerformanceMetrics = ({ metrics }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Performance Metrics</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Throughput:</span>
            <span className="text-2xl font-bold text-green-400">{metrics.throughput.toFixed(2)} Gbps</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Connected Devices:</span>
            <span className="text-2xl font-bold text-blue-400">{metrics.connectedDevices}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Network Load:</span>
            <span className="text-2xl font-bold text-yellow-400">{metrics.networkLoad.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default PerformanceMetrics
  
  