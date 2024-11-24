'use client'

import { useState, useEffect } from 'react'
import { Slider } from '../ui/Slider'
import { Button } from '../ui/Button'

const ControlPanel = ({ params, updateSimulation }) => {
  const [localParams, setLocalParams] = useState(params)

  useEffect(() => {
    setLocalParams(params)
  }, [params])

  const handleChange = (key, value) => {
    setLocalParams((prev) => ({ ...prev, [key]: value[0] }))
  }

  const handleUpdate = () => {
    updateSimulation(localParams)
  }

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Simulation Controls</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Number of Devices: {localParams.nodeCount}</label>
          <Slider
            value={[localParams.nodeCount]}
            onValueChange={(value) => handleChange('nodeCount', value)}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Number of Base Stations: {localParams.baseStationCount}</label>
          <Slider
            value={[localParams.baseStationCount]}
            onValueChange={(value) => handleChange('baseStationCount', value)}
            max={10}
            step={1}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Bandwidth (MHz): {localParams.bandwidth}</label>
          <Slider
            value={[localParams.bandwidth]}
            onValueChange={(value) => handleChange('bandwidth', value)}
            max={1000}
            step={10}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Latency (ms): {localParams.latency}</label>
          <Slider
            value={[localParams.latency]}
            onValueChange={(value) => handleChange('latency', value)}
            min={1}
            max={20}
            step={1}
            className="w-full"
          />
        </div>
        <Button onClick={handleUpdate} className="w-full">
          Update Simulation
        </Button>
      </div>
    </div>
  )
}

export default ControlPanel

