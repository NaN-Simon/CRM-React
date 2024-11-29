import React, { useEffect } from 'react'
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { mockDataTeam } from '@/data/mockData'

async function getData(): Promise<Payment[]> {
  // Fetch data from API will be here.
  return mockDataTeam
}

const Team = () => {
  const [data, setData] = React.useState<Payment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto p-3">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Team