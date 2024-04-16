import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { CaretDoubleRight, Code, TrashSimple } from 'phosphor-react'
import React from 'react'
import { isTrafficLightLeft, isTrafficLightRight } from '../../utils/system'
import * as Breadcrumbs from './Breadcrumbs'

interface HeaderProps {
  isSidebarOpen: boolean
}

export const Header: React.FC<HeaderProps> = ({ isSidebarOpen }) => {
  return (
    <div
      className={clsx(
        'border-b border-rotion-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag',
        {
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-240px)]': isSidebarOpen
        }
      )}
    >
      <div
        className={clsx('inline-flex region-no-drag', {
          'ml-20': isTrafficLightLeft && !isSidebarOpen
        })}
      >
        <Collapsible.Trigger
          className={clsx('h-5 w-5 text-rotion-200 hover:text-rotion-50', {
            hidden: isSidebarOpen,
            block: !isSidebarOpen
          })}
        >
          <CaretDoubleRight className="h-4 w-4" />
        </Collapsible.Trigger>
      </div>

      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item>
            <Code weight="bold" className="h-4 w-4 text-pink-500" />
            Estrutura técnica
          </Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.HiddenItems />
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item isActive>Untitled</Breadcrumbs.Item>
        </Breadcrumbs.Root>

        <div className="inline-flex region-no-drag">
          <button
            className={clsx(
              'inline-flex items-center gap-1 text-rotion-100 text-sm hover:text-rotion-50',
              {
                'mr-20': isTrafficLightRight
              }
            )}
          >
            <TrashSimple className="h-4 w-4" />
            Apagar
          </button>
        </div>
      </>
    </div>
  )
}
