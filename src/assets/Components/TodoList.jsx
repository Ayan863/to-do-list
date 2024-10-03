import AddTask from "./AddTask";
const TodoList = () => {
  
  return (
    <section className='todo-list'>
      <h2>TODO LIST</h2>
      
      <div className="container">
      <AddTask />
      </div>
    </section>
  )
}

export default TodoList
