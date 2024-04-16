import React from 'react'
import { ToC } from '../components/ToC'

export const Document: React.FC = () => (
  <main className="flex-1 flex py-12 px-10 gap-8">
    <aside className="hidden lg:block sticky top-0">
      <span className="text-rotion-300 font-semibold uppercase  text-xs ">Table of Contents</span>

      <ToC.Root>
        <ToC.Link>Back-End</ToC.Link>
        <ToC.Section>
          <ToC.Link>DB</ToC.Link>
          <ToC.Link>Auth</ToC.Link>
        </ToC.Section>
        <ToC.Link>Front-End</ToC.Link>
        <ToC.Section>
          <ToC.Link>Visualization</ToC.Link>
          <ToC.Link>Styles</ToC.Link>
        </ToC.Section>
      </ToC.Root>
    </aside>

    <section className="flex-1 flex flex-col items-center">hjdiuhwaqeufdh</section>
  </main>
)
