import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './layout/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { CustomerKitchenWrite } from './pages/customer/CustomerKitchenWrite';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Reserve from './pages/chef/Reserve';
import { Review } from './pages/chef/Review';
import { ChefBoard } from './pages/chef/ChefBoard';
import { ChefPage } from './pages/chef/ChefPage';
import { CustomerBoard } from './pages/customer/CustomerBoard';
import { CustomerHistory } from './pages/customer/CustomerHistory';
import { ReviewPage } from './pages/customer/ReviewPage';
import { ChefList } from './pages/customer/ChefList';
import { ChefActivityWrite } from './pages/chef/ChefActivityWrite';
import { CustomerPage } from './pages/customer/CustomerPage';
import { CustomerMatch } from './pages/customer/CustomerMatch';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />} theme={theme}>
            <Route index element={<Home />} theme={theme}/>
            <Route path="/login" element={<Login />} theme={theme}/>
            <Route path="/signup" element={<Signup />} theme={theme}/>
            <Route path="/reserve" element={<Reserve />} theme={theme}/>
            <Route path="/review" element={<Review />} theme={theme}/>
            <Route path="/chefBoard" element={<ChefBoard />} theme={theme}/>
            <Route path="/chefPage" element={<ChefPage />} theme={theme}/>
              <Route path="/chefPage/edit" element={<ChefActivityWrite />} theme={theme}/>
            <Route path="/customerBoard" element={<CustomerBoard />} theme={theme}/>
            <Route path="/customerPage" element={<CustomerPage />} theme={theme}/>
              <Route path="/customerPage/edit" element={<CustomerKitchenWrite />} theme={theme}/>
            <Route path="/chefList" element={<ChefList />} theme={theme}/>
            <Route path="/customerHistory" element={<CustomerHistory />} theme={theme}/>
            <Route path="/reviewPage" element={<ReviewPage />} theme={theme}/>
            <Route path="/customerMatch" element={<CustomerMatch/>} theme={theme} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
