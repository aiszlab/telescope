'use client'

import { Table } from 'musae'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const DATA_SOURCE: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 11
  }
]

const Basic = () => {
  return (
    <Table
      dataSource={DATA_SOURCE}
      columns={(helper) => {
        return [
          helper.accessor('firstName', {
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id
          }),
          helper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => <span>Last Name</span>,
            footer: (info) => info.column.id
          }),
          helper.accessor('age', {
            header: () => 'Age',
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id
          }),
          helper.accessor('visits', {
            header: () => <span>Visits</span>,
            footer: (info) => info.column.id
          }),
          helper.accessor('status', {
            header: 'Status',
            footer: (info) => info.column.id
          }),
          helper.accessor('progress', {
            header: 'Profile Progress',
            footer: (info) => info.column.id
          })
        ]
      }}
    />
  )
}

export default Basic
