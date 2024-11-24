'use client'

import { useEffect, useRef, useState } from 'react'
import ForceGraph2D from 'react-force-graph-2d'

const NetworkSimulation = ({ params }) => {
  const fgRef = useRef()
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })

  useEffect(() => {
    const fg = fgRef.current

    if (fg) {
      fg.d3Force('charge').strength(-300)
      fg.d3Force('link').distance(50)
      fg.d3Force('center').strength(0.3)
    }

    generateGraphData()
  }, [params])

  const generateGraphData = () => {
    const nodes = []
    const links = []

    // Create base stations
    for (let i = 0; i < params.baseStationCount; i++) {
      nodes.push({
        id: `bs-${i}`,
        name: `Base Station ${i + 1}`,
        val: 20,
        color: '#ff6b6b',
      })
    }

    // Create devices and connect to nearest base station
    for (let i = 0; i < params.nodeCount; i++) {
      const nodeId = `device-${i}`
      nodes.push({
        id: nodeId,
        name: `Device ${i + 1}`,
        val: 5,
        color: '#4ecdc4',
      })

      // Connect to a random base station
      const baseStationId = `bs-${Math.floor(Math.random() * params.baseStationCount)}`
      links.push({
        source: nodeId,
        target: baseStationId,
      })
    }

    setGraphData({ nodes, links })
  }

  return (
    <div className="h-[600px] w-full bg-gray-900 rounded-xl overflow-hidden">
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="name"
        nodeRelSize={6}
        linkWidth={1}
        linkColor={() => '#718096'}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name
          const fontSize = 12/globalScale
          ctx.font = `${fontSize}px Sans-Serif`
          const textWidth = ctx.measureText(label).width
          const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2)

          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions)

          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillStyle = node.color
          ctx.fillText(label, node.x, node.y)

          node.__bckgDimensions = bckgDimensions // to re-use in nodePointerAreaPaint
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color
          const bckgDimensions = node.__bckgDimensions
          bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions)
        }}
      />
    </div>
  )
}

export default NetworkSimulation

