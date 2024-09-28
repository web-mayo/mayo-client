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
import { LoginCustomer } from "./pages/customer/LoginCustomer";
import { LoginChef } from "./pages/chef/LoginChef";
import { SelectSignUp } from "./pages/SelectSignUp";
import { SignUpChef } from "./pages/chef/SignUpChef";
import { SignUpCustomer } from "./pages/customer/SignUpCustomer";
import { ChefFindIdEmail } from "./pages/chef/ChefFindIdEmail.jsx";
import { ChefFindIdNumber } from "./pages/chef/ChefFindIdNumber.jsx";
import { ChefFindPwdEmail } from "./pages/chef/ChefFindPwdEmail.jsx";
import { ChefFindPwdNumber } from "./pages/chef/ChefFindPwdNumber.jsx";
import { ChefRecoverPwd } from "./pages/chef/ChefRecoverPwd.jsx";
import { CustomerFindIdEmail } from "./pages/customer/CustomerFindIdEmail.jsx";
import { CustomerFindIdNumber } from "./pages/customer/CustomerFindIdNumber.jsx";
import { CustomerFindPwdEmail } from "./pages/customer/CustomerFindPwdEmail.jsx";
import { CustomerFindPwdNumber } from "./pages/customer/CustomerFindPwdNumber.jsx";
import { CustomerRecoverPwd } from "./pages/customer/CustomerRecoverPwd.jsx";
import { ApiTest } from "./pages/ApiTest";
import { getToken } from "./token.jsx";
import { LoggedOutRouterList, LoggedInRouterList } from "./router.jsx.js";
import { CustomerFindIdCompleted } from "./pages/customer/CustomerFindIdCompleted.jsx";
import { ChefFindIdCompleted } from "./pages/chef/ChefFindIdCompleted.jsx";
function App() {
  const token = getToken();
  const isLoggined = Boolean(token);
  return (
    <ThemeProvider theme={theme}>
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
          {/* 로그인 시 라우터 */}
          {/* {isLoggined &&
            LoggedInRouterList.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))} */}
          {/* 로그인 아닐 시 라우터 */}
          {/* {!isLoggined &&
            LoggedOutRouterList.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))} */}

          <Route path="/login" element={<LoginCustomer />} theme={theme} />
          <Route path="/loginChef" element={<LoginChef />} theme={theme} />
          <Route
            path="/findIdEmailChef"
            element={<ChefFindIdEmail />}
            theme={theme}
          />
          <Route
            path="/findIdNumberChef"
            element={<ChefFindIdNumber />}
            theme={theme}
          />
          <Route
            path="/findPwdEmailChef"
            element={<ChefFindPwdEmail />}
            theme={theme}
          />
          <Route
            path="/findPwdNumberChef"
            element={<ChefFindPwdNumber />}
            theme={theme}
          />
          <Route
            path="/recoverPwdChef"
            element={<ChefRecoverPwd />}
            theme={theme}
          />
          <Route
            path="/recoverPwdCustomer"
            element={<CustomerRecoverPwd />}
            theme={theme}
          />
          <Route
            path="/findIdEmailCustomer"
            element={<CustomerFindIdEmail />}
            theme={theme}
          />
          <Route
            path="/findIdNumberCustomer"
            element={<CustomerFindIdNumber />}
            theme={theme}
          />
          <Route
            path="/findIdCompletedCustomer"
            element={<CustomerFindIdCompleted />}
            theme={theme}
          />
          <Route
            path="/findIdCompletedChef"
            element={<ChefFindIdCompleted />}
            theme={theme}
          />
          <Route
            path="/findPwdEmailCustomer"
            element={<CustomerFindPwdEmail />}
            theme={theme}
          />
          <Route
            path="/findPwdNumberCustomer"
            element={<CustomerFindPwdNumber />}
            theme={theme}
          />
          <Route
            path="/recoverPwdCustomer"
            element={<CustomerRecoverPwd />}
            theme={theme}
          />
          <Route
            path="/selectSignUp"
            element={<SelectSignUp />}
            theme={theme}
          />
          <Route path="/signUpChef" element={<SignUpChef />} theme={theme} />
          <Route
            path="/signUpCustomer"
            element={<SignUpCustomer />}
            theme={theme}
          />
          <Route
            path="/customerpage"
            element={<CustomerPage />}
            theme={theme}
          />
          <Route
            path="/customerpage/edit"
            element={<CustomerKitchenWrite />}
            theme={theme}
          />
          <Route path="/reserve" element={<Reserve />} theme={theme} />
          <Route path="/chefpage" element={<ChefPage />} theme={theme} />
          <Route
            path="/chefpage/edit"
            element={<ChefActivityWrite />}
            theme={theme}
          />
          <Route
            path="/customerboard"
            element={<CustomerBoard />}
            theme={theme}
          />
          <Route
            path="/customerhistory"
            element={<CustomerHistory />}
            theme={theme}
          />
          <Route path="/reviewpage" element={<ReviewPage />} theme={theme} />
          <Route
            path="/customerMatch"
            element={<CustomerMatch />}
            theme={theme}
          />

          {/* 잘못 진입하면 홈으로  */}
          {/* <Route
            path="/*"
            element={<Navigate to="/" replace />}
            theme={theme}
          /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
