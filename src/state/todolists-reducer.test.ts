import {
  AddTodolistAC,
  ChangeTodolistFilterAC,
  ChangeTodolistTitleAC,
  RemoveTodolistAC,
  todolistsReducer,
} from './todolists-reducers'
import { v1 } from 'uuid'
import { FilterTypeValue, todolistTypeArr } from '../App'

// 1 test
test('correct todolist should be removed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  const startState: Array<todolistTypeArr> = [
    { id: todolistId1, title: 'What to learn', filter: 'All' },
    { id: todolistId2, title: 'What to buy', filter: 'All' },
  ]

  const endState = todolistsReducer(startState, RemoveTodolistAC(todolistId1))

  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistId2)
})

// 2 test
test('correct todolist should be added', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newTodolistTitle = 'New Todolist'

  const startState: Array<todolistTypeArr> = [
    { id: todolistId1, title: 'What to learn', filter: 'All' },
    { id: todolistId2, title: 'What to buy', filter: 'All' },
  ]

  const endState = todolistsReducer(startState, AddTodolistAC(newTodolistTitle))

  expect(endState.length).toBe(3)
  expect(endState[2].title).toBe(newTodolistTitle)
})

// 3 test
test('correct filter of todolist should be changed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newFilter: FilterTypeValue = 'Completed'

  const startState: Array<todolistTypeArr> = [
    { id: todolistId1, title: 'What to learn', filter: 'All' },
    { id: todolistId2, title: 'What to buy', filter: 'All' },
  ]

  const endState = todolistsReducer(
    startState,
    ChangeTodolistFilterAC(todolistId2, newFilter)
  )

  expect(endState[0].filter).toBe('All')
  expect(endState[1].filter).toBe(newFilter)
})

// 4 test
test('correct todolist should change its name', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newTodolistTitle = 'New Todolist'

  const startState: Array<todolistTypeArr> = [
    { id: todolistId1, title: 'What to learn', filter: 'All' },
    { id: todolistId2, title: 'What to buy', filter: 'All' },
  ]

  const endState = todolistsReducer(
    startState,
    ChangeTodolistTitleAC(todolistId2, newTodolistTitle)
  )

  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe(newTodolistTitle)
})
