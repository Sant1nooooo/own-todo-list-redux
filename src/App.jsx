import Header from "./components/header/Header";
import TodoList from "./components/list/TodoList";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-300'>
      <div className="w-[700px] bg-white  rounded px-[10px] py-[10px]">
        <div className="flex items-center justify-center text-[40px] font-thin">
          <h1>TODO LIST</h1>
        </div>
        <Header/>
        <TodoList/>
        <Footer/>
      </div>
    </div>
  )
}