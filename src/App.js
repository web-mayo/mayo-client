import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './layout/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { UserPage } from './pages/customer/mypage/UserPage';
import { UserPageAft } from './pages/customer/mypage/UserPageAft';
import { KitchenProfile } from './pages/customer/mypage/KitchenProfile';
import { ProfileChange } from './pages/customer/mypage/ProfileChange';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />} theme={theme}>
            <Route index element={<Home />} theme={theme}/>
            <Route path="/login" element={<Login />} theme={theme}/>
            <Route path="/signup" element={<Signup />} theme={theme}/>
            <Route path="/userpage" element={<UserPage />} theme={theme}/>
            <Route path="/reserve" element={<Reserve />} theme={theme}/>
            <Route path="/review" element={<Review />} theme={theme}/>
            <Route path="/chefboard" element={<ChefBoard />} theme={theme}/>
            <Route path="/chefpage" element={<ChefPage />} theme={theme}/>
            <Route path="/userpageaft" element={<UserPageAft />} theme={theme}/>
            <Route path="/kitchenprofile" element={<KitchenProfile />} theme={theme}/>
            <Route path="/fileupload" element={<FileUpload />} theme={theme}/>
            <Route path="/profilechange" element={<ProfileChange />} theme={theme}/>
            <Route path="/basic" element={<Basic />} theme={theme}/>
            <Route path="/Email" element={<Email />} theme={theme}/>
            <Route path="/Phone" element={<Phone />} theme={theme}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
