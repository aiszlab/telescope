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

const App = () => {
  return (
    <Table
      bordered
      dataSource={DATA_SOURCE}
      columns={[
        {
          key: 'firstName',
          title: 'firstName'
        },
        {
          key: 'lastName',
          title: () => <span>Last Name</span>
        },
        {
          key: 'age',
          render: (value) => {
            return `${value}+`
          },
          title: 'age'
        }
      ]}
    />
  )
}

export default App
