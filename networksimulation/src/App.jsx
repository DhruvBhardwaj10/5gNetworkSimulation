'use client'

import { useState } from 'react'
import NetworkSimulation from './components/NetworkSimulation'
import ControlPanel from './components/ControlPanel'
import PerformanceMetrics from './components/PerformanceMetrices'
import InfoPanel from './components/InfoPanel'

export default function Home() {
  const [simulationParams, setSimulationParams] = useState({
    nodeCount: 50,
    baseStationCount: 5,
    bandwidth: 100,
    latency: 1,
  })

  const [performanceMetrics, setPerformanceMetrics] = useState({
    throughput: 15.75,
    connectedDevices: 42,
    networkLoad: 68.3,
  })

  const updateSimulation = (newParams) => {
    setSimulationParams(newParams)
    // In a real simulation, this would trigger recalculations
    // For now, we'll just update some mock performance metrics
    setPerformanceMetrics({
      throughput: Math.random() * 20,
      connectedDevices: Math.floor(Math.random() * newParams.nodeCount),
      networkLoad: Math.random() * 100,
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        5G Network Simulation
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <NetworkSimulation params={simulationParams} />
        </div>
        <div className="space-y-8">
          <ControlPanel params={simulationParams} updateSimulation={updateSimulation} />
          <PerformanceMetrics metrics={performanceMetrics} />
          <InfoPanel />
        </div>
      </div>
    </main>
  )
}

