import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { UserListRoute } from './routes/UserListRoute'
import { AddUserRoute } from './routes/AddUserRoute'
import { EditUserRoute } from './routes/EditUserRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<UserListRoute />} />
          <Route path='add' element={<AddUserRoute />} />
          <Route path='edit/:id' element={<EditUserRoute />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App
