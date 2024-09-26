import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Reserve from "./pages/chef/Reserve";
import { Review } from "./pages/chef/Review";
import { ChefBoard } from "./pages/chef/ChefBoard";
import { ChefPage } from "./pages/chef/ChefPage";
import { CustomerBoard } from "./pages/customer/CustomerBoard";
import { CustomerHistory } from "./pages/customer/CustomerHistory";
import { CustomerMatch } from "./pages/customer/CustomerMatch";
import { CustomerKitchenWrite } from "./pages/customer/CustomerKitchenWrite";
import { ReviewPage } from "./pages/customer/ReviewPage";
import { ChefList } from "./pages/customer/ChefList";
import { ChefActivityWrite } from "./pages/chef/ChefActivityWrite";
import { CustomerPage } from "./pages/customer/CustomerPage";
import { LoginCustomer } from "./pages/account/LoginCustomer";
import { LoginChef } from "./pages/account/LoginChef";
import { FindIdEmail } from "./pages/account/FindAccount/FindIdEmail";
import { FindIdNumber } from "./pages/account/FindAccount/FindIdNumber";
import { FindPwdEmail } from "./pages/account/FindAccount/FindPwdEmail";
import { FindPwdNumber } from "./pages/account/FindAccount/FindPwdNumber";
import { RecoverPwd } from "./pages/account/FindAccount/RecoverPwd";
import { SelectSignUp } from "./pages/account/SignUp/SelectSignUp";
import { SignUpChef } from "./pages/account/SignUp/SignUpChef";
import { SignUpCustomer } from "./pages/account/SignUp/SignUpCustomer";
import { ApiTest } from "./pages/ApiTest";
import { getToken } from "./token.jsx";
import { LoggedOutRouterList, LoggedInRouterList } from "./auth/router.jsx.js";
import { AuthCheck } from "./auth/AuthCheck.jsx";
import { useRecoilValue } from "recoil";
import { isLoginRecoil } from "./recoil/userState.js";
function App() {
  const isLogin = useRecoilValue(isLoginRecoil);
  return (
    <ThemeProvider theme={theme}>
      <AuthCheck>
        <Routes>
          {/* 공통 라우터  */}
          <Route path="/" element={<Layout />} theme={theme}>
            <Route index element={<Home />} theme={theme} />
            <Route path="/chefList" element={<ChefList />} theme={theme} />
            {/* api 테스트 - 삭제가능 */}
            <Route path="/apiTest" element={<ApiTest />} theme={theme} />
            <Route path="/review" element={<Review />} theme={theme} />
            <Route path="/chefBoard" element={<ChefBoard />} theme={theme} />
            <Route
              path="/customerPage"
              element={<CustomerPage />}
              theme={theme}
            />
            {isLogin &&
              LoggedInRouterList.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              ))}
            {!isLogin &&
              LoggedOutRouterList.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              ))}
            {/* 잘못 진입하면 홈으로  */}
            <Route
              path="/*"
              element={<Navigate to="/" replace />}
              theme={theme}
            />
          </Route>
        </Routes>
    </AuthCheck>
  </ThemeProvider>
  );
}

export default App;
