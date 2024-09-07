import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './layout/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { CustomerKitchenWrite } from './pages/customer/mypage/CustomerKitchenWrite';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Reserve from './pages/chef/Reserve';
import { Review } from './pages/chef/Review';
import { ChefBoard } from './pages/chef/ChefBoard';
import { ChefPage } from './pages/chef/ChefPage';
import { Basic } from './pages/customer/mypage/informchange/Basic';
import { Email } from './pages/customer/mypage/informchange/Email';
import { Phone } from './pages/customer/mypage/informchange/Phone';
import { Certification } from './pages/customer/mypage/informchange/Certification';
import { CerDone } from './pages/customer/mypage/informchange/CerDone';
import { CustomerBoard } from './pages/customer/CustomerBoard';
import { HomeParty } from './pages/customer/customerboard/HomeParty';
import { ChefDetail } from './pages/customer/customerboard/ChefDetail';
import { UsageHistory } from './pages/customer/review/UsageHistory';
import { ReviewPage } from './pages/customer/review/ReviewPage';
import { ChefList } from './pages/customer/ChefList';
import { ChefActivityWrite } from './pages/chef/ChefActivityWrite';
import { CustomerPage } from './pages/customer/CustomerPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />} theme={theme}>
            <Route index element={<Home />} theme={theme}/>
            <Route path="/login" element={<Login />} theme={theme}/>
            <Route path="/signup" element={<Signup />} theme={theme}/>
            <Route path="/customerpage" element={<CustomerPage />} theme={theme}/>
              <Route path="/customerpage/edit" element={<CustomerKitchenWrite />} theme={theme}/>
            <Route path="/reserve" element={<Reserve />} theme={theme}/>
            <Route path="/review" element={<Review />} theme={theme}/>
            <Route path="/chefboard" element={<ChefBoard />} theme={theme}/>
            <Route path="/chefpage" element={<ChefPage />} theme={theme}/>
              <Route path="/chefpage/edit" element={<ChefActivityWrite />} theme={theme}/>

            <Route path="/certification" element={<Certification />} theme={theme}/>
            <Route path="/cerdone" element={<CerDone />} theme={theme}/>
            <Route path="/customerboard" element={<CustomerBoard />} theme={theme}/>

            <Route path="/homeparty" element={<HomeParty />} theme={theme}/>

            <Route path="/chefdetail" element={<ChefDetail />} theme={theme}/>

            <Route path="/usagehistory" element={<UsageHistory />} theme={theme}/>
            <Route path="/reviewpage" element={<ReviewPage />} theme={theme}/>
            <Route path="/cheflist" element={<ChefList />} theme={theme}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
