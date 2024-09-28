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
import { ChefFindIdCompleted } from "./pages/chef/ChefFindIdCompleted.jsx";
import { CustomerFindIdCompleted } from "./pages/customer/CustomerFindIdCompleted.jsx";

// 로그인 했을 때 경로
export const LoggedInRouterList = [
  {
    path: "/customerPage/",
    key: "/customerPage/",
    element: <CustomerPage />,
    theme: theme,
  },
  {
    path: "/chefPage",
    key: "/chefPage",
    element: <ChefPage />,
    theme: theme,
  },
  {
    path: "/customerPage/edit",
    key: "/customerPage/edit",
    element: <CustomerKitchenWrite />,
    theme: theme,
  },
  {
    path: "/reserve",
    key: "/reserve",
    element: <Reserve />,
    theme: theme,
  },
  {
    path: "/review",
    key: "/review",
    element: <Review />,
    theme: theme,
  },
  {
    path: "/customerBoard",
    key: "/customerBoard",
    element: <CustomerBoard />,
    theme: theme,
  },
  {
    path: "/customerHistory",
    key: "/customerHistory",
    element: <CustomerHistory />,
    theme: theme,
  },
  {
    path: "/reviewPage",
    key: "/reviewPage",
    element: <ReviewPage />,
    theme: theme,
  },
  {
    path: "/customerMatch",
    key: "/customerMatch",
    element: <CustomerMatch />,
    theme: theme,
  },
];

// 로그아웃 했을 때 사용 경로
export const LoggedOutRouterList = [
  {
    path: "/login",
    key: "/login",
    element: <LoginCustomer />,
    theme: theme,
  },
  {
    path: "/loginChef",
    key: "/loginChef",
    element: <LoginChef />,
    theme: theme,
  },
  {
    path: "/findIdEmailCustomer",
    key: "/findIdEmailCustomer",
    element: <CustomerFindIdEmail />,
    theme: theme,
  },
  {
    path: "/findIdNumberCustomer",
    key: "/findIdNumberCustomer",
    element: <CustomerFindIdNumber />,
    theme: theme,
  },
  {
    path: "/findPwdEmailCustomer",
    key: "/findPwdEmailCustomer",
    element: <CustomerFindPwdEmail />,
    theme: theme,
  },
  {
    path: "/findPwdNumberCustomer",
    key: "/findPwdNumberCustomer",
    element: <CustomerFindPwdNumber />,
    theme: theme,
  },
  {
    path: "/recoverPwdCustomer",
    key: "/recoverPwdCustomer",
    element: <CustomerRecoverPwd />,
    theme: theme,
  },
  {
    path: "/findIdEmailChef",
    key: "/findIdEmailChef",
    element: <ChefFindIdEmail />,
    theme: theme,
  },
  {
    path: "/findIdNumberChef",
    key: "/findIdNumberChef",
    element: <ChefFindIdNumber />,
    theme: theme,
  },
  {
    path: "/findIdCompletedChef",
    key: "/findIdCompletedChef",
    element: <ChefFindIdCompleted />,
    theme: theme,
  },
  {
    path: "/findIdCompletedCustomer",
    key: "/findIdCompletedCustomer",
    element: <CustomerFindIdCompleted />,
    theme: theme,
  },
  {
    path: "/findPwdEmailChef",
    key: "/findPwdEmailChef",
    element: <ChefFindPwdEmail />,
    theme: theme,
  },
  {
    path: "/findPwdNumberChef",
    key: "/findPwdNumberChef",
    element: <ChefFindPwdNumber />,
    theme: theme,
  },
  {
    path: "/recoverPwdChef",
    key: "/recoverPwdChef",
    element: <ChefRecoverPwd />,
    theme: theme,
  },
  {
    path: "/selectSignUp",
    key: "/selectSignUp",
    element: <SelectSignUp />,
    theme: theme,
  },
  {
    path: "/signUpChef",
    key: "/signUpChef",
    element: <SignUpChef />,
    theme: theme,
  },
  {
    path: "/signUpCustomer",
    key: "/signUpCustomer",
    element: <SignUpCustomer />,
    theme: theme,
  },
];

// 기존에 있었던 route 저장
{
  /* <Route path="/login" element={<LoginCustomer />} theme={theme} />
<Route path="/loginChef" element={<LoginChef />} theme={theme} />
<Route path="/findIdEmail" element={<FindIdEmail />} theme={theme} />
<Route
  path="/findIdNumber"
  element={<FindIdNumber />}
  theme={theme}
/>
<Route
  path="/findPwdEmail"
  element={<FindPwdEmail />}
  theme={theme}
/>
<Route
  path="/findPwdNumber"
  element={<FindPwdNumber />}
  theme={theme}
/>
<Route path="/recoverPwd" element={<RecoverPwd />} theme={theme} />
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
</Route> */
}
