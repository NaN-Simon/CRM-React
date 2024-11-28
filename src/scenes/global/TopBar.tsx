import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { SidebarTrigger } from "@/components/ui/sidebar"
const Topbar = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className='flex justify-between p-3'>

      {/* SEARCH BAR */}
      <div
        className='flex items-center bg-picton-blue-900 rounded'
      >
        <div className='pr-2'>
        <SidebarTrigger />
        </div>
        <Input
          className=''
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          className=''
          type='button'
          onClick={() => alert(inputValue)}
        >
          <span className="material-icons material-symbols-outlined">
            search
          </span>
        </Button>
      </div>

      {/* OPTIONS */}
      <div className='flex gap-1'>
        <ThemeSwitcher />
        <Button className='p-2 text-foreground rounded-xl' onClick={() => alert('button')}>
          <span className="material-icons material-symbols-outlined">
            notifications
          </span>
        </Button>
        <Button className='p-2 text-foreground rounded-xl' onClick={() => alert('button')}>
          <span className="material-icons material-symbols-outlined">
            settings
          </span>
        </Button>
        <Button className='p-2 text-foreground rounded-xl' onClick={() => alert('button')}>
          <span className="material-icons material-symbols-outlined">
            pin_drop
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Topbar