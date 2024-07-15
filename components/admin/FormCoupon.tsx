'use client'

import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { addDays, format, isBefore } from 'date-fns'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { FaRegCalendar } from 'react-icons/fa'
import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'

export default function FormCoupon() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  })
  const [startTime, setStartTime] = useState<string>('05:00')
  const [endTime, setEndTime] = useState<string>('06:00')

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col">
        <Label>Insira o periodo de duração:</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={`w-[300px] justify-start text-left font-normal border-gray-300 border ${!date && 'text-muted-foreground'}`}
            >
              <FaRegCalendar className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Escolha uma data</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                disabled={(date) => isBefore(date, new Date())}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col">
        <Label>Horário que começa</Label>
        <Select
          defaultValue={startTime}
          onValueChange={(e) => {
            setStartTime(e)
          }}
          // open={open}
        >
          <SelectTrigger className="font-normal focus:ring-0 w-[135px] mr-2 border-gray-300">
            <SelectValue />
          </SelectTrigger>
          <div>
            <SelectContent>
              <ScrollArea className="h-[15rem]">
                {Array.from({ length: 96 }).map((_, i) => {
                  const hour = Math.floor(i / 4)
                    .toString()
                    .padStart(2, '0')
                  const minute = ((i % 4) * 15).toString().padStart(2, '0')
                  return (
                    <SelectItem key={i} value={`${hour}:${minute}`}>
                      {hour}:{minute}
                    </SelectItem>
                  )
                })}
              </ScrollArea>
            </SelectContent>
          </div>
        </Select>
      </div>
      <div className="flex flex-col">
        <Label>Horário que termina</Label>
        <Select
          defaultValue={endTime}
          onValueChange={(e) => {
            setEndTime(e)
          }}
          // open={open}
        >
          <SelectTrigger className="font-normal focus:ring-0 w-[135px] border-gray-300">
            <SelectValue />
          </SelectTrigger>
          <div>
            <SelectContent>
              <ScrollArea className="h-[15rem]">
                {Array.from({ length: 96 }).map((_, i) => {
                  const hour = Math.floor(i / 4)
                    .toString()
                    .padStart(2, '0')
                  const minute = ((i % 4) * 15).toString().padStart(2, '0')
                  return (
                    <SelectItem key={i} value={`${hour}:${minute}`}>
                      {hour}:{minute}
                    </SelectItem>
                  )
                })}
              </ScrollArea>
            </SelectContent>
          </div>
        </Select>
      </div>
    </div>
  )
}
