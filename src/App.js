import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './layout/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { KitchenProfile } from './pages/customer/mypage/KitchenProfile';
import { CustomerKitchenWrite } from './pages/customer/mypage/CustomerKitchenWrite';
import { FileUpload } from './pages/customer/mypage/FileUpload';
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
import { Board } from './pages/customer/customerboard/Board';
import { BoardAft } from './pages/customer/customerboard/BoardAft';
import { HomeParty } from './pages/customer/customerboard/HomeParty';
import { RegistDone } from './pages/customer/customerboard/RegistDone';
import { ChefDetail } from './pages/customer/customerboard/ChefDetail';
import { RequestDone } from './pages/customer/customerboard/RequestDone';
import { UsageHistory } from './pages/customer/review/UsageHistory';
import { ReviewPage } from './pages/customer/review/ReviewPage';
import { ChefList } from './pages/customer/cheflist/ChefList';
import { ChefActivityWrite, ChefPageEdit } from './pages/chef/ChefActivityWrite';
import { CustomerPage } from './pages/customer/mypage/CustomerPage';

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
            <Route path="/kitchenprofile" element={<KitchenProfile />} theme={theme}/>
            <Route path="/fileupload" element={<FileUpload />} theme={theme}/>
            <Route path="/basic" element={<Basic />} theme={theme}/>
            <Route path="/Email" element={<Email />} theme={theme}/>
            <Route path="/Phone" element={<Phone />} theme={theme}/>
            <Route path="/certification" element={<Certification />} theme={theme}/>
            <Route path="/cerdone" element={<CerDone />} theme={theme}/>
            <Route path="/customerboard" element={<Board />} theme={theme}/>
            <Route path="/customerboardaft" element={<BoardAft />} theme={theme}/>
            <Route path="/homeparty" element={<HomeParty />} theme={theme}/>
            <Route path="/registdone" element={<RegistDone />} theme={theme}/>
            <Route path="/chefdetail" element={<ChefDetail />} theme={theme}/>
            <Route path="/requestdone" element={<RequestDone />} theme={theme}/>
            <Route path="/usagehistory" element={<UsageHistory />} theme={theme}/>
            <Route path="/reviewpage" element={<ReviewPage />} theme={theme}/>
            <Route path="/cheflist" element={<ChefList />} theme={theme}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
