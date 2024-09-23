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
import { LoggedOutRouterList, LoggedInRouterList } from "./router.jsx.js";
function App() {
  const token = getToken();
  const isLoggined = Boolean(token);
  return (
    <ThemeProvider theme={theme}>
      <Routes basename={process.env.PUBLIC_URL}>
        {/* 공통 라우터  */}
        <Route path="/" element={<Layout />} theme={theme}>
          <Route index element={<Home />} theme={theme} />
          <Route path="/cheflist" element={<ChefList />} theme={theme} />
          {/* api 테스트 - 삭제가능 */}
          <Route path="/apiTest" element={<ApiTest />} theme={theme} />
          <Route path="/review" element={<Review />} theme={theme} />
          <Route path="/chefboard" element={<ChefBoard />} theme={theme} />
          <Route
            path="/customerpage"
            element={<CustomerPage />}
            theme={theme}
          />
          {isLoggined &&
            LoggedInRouterList.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))}
          {!isLoggined &&
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
    </ThemeProvider>
  );
}

export default App;
