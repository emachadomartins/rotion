import * as Collapsible from '@radix-ui/react-collapsible'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { TrafficLight } from '../../components/TrafficLight'
import { systemTrafficLightPosition } from '../../utils/system'

export const Default: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [trafficLightPosition, setTrafficLightPosition] = useState<'left' | 'right'>(
    systemTrafficLightPosition
  )

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="h-screen w-screen text-rotion-100 flex"
    >
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header trafficLightPosition={trafficLightPosition} isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
      <TrafficLight onChangePosition={setTrafficLightPosition} position={trafficLightPosition} />
    </Collapsible.Root>
  )
}
