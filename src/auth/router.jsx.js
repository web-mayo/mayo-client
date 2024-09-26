import { Route, Routes } from "react-router-dom";
import { theme } from "../theme/theme.js";
import { Layout } from "../layout/Layout.jsx";
import { Home } from "../pages/Home.jsx";
import { ThemeProvider } from "styled-components";
import { Review } from "../pages/chef/Review.jsx";
import { ChefBoard } from "../pages/chef/ChefBoard.jsx";
import { ChefPage } from "../pages/chef/ChefPage.jsx";
import { CustomerBoard } from "../pages/customer/CustomerBoard.jsx";
import { CustomerHistory } from "../pages/customer/CustomerHistory.jsx";
import { CustomerMatch } from "../pages/customer/CustomerMatch.jsx";
import { CustomerKitchenWrite } from "../pages/customer/CustomerKitchenWrite.jsx";
import { ReviewPage } from "../pages/customer/ReviewPage.jsx";
import { ChefList } from "../pages/customer/ChefList.jsx";
import { ChefActivityWrite } from "../pages/chef/ChefActivityWrite.jsx";
import { CustomerPage } from "../pages/customer/CustomerPage.jsx";
import { LoginCustomer } from "../pages/account/LoginCustomer.jsx";
import { LoginChef } from "../pages/account/LoginChef.jsx";
import { FindIdEmail } from "../pages/account/FindAccount/FindIdEmail.jsx";
import { FindIdNumber } from "../pages/account/FindAccount/FindIdNumber.jsx";
import { FindPwdEmail } from "../pages/account/FindAccount/FindPwdEmail.jsx";
import { FindPwdNumber } from "../pages/account/FindAccount/FindPwdNumber.jsx";
import { RecoverPwd } from "../pages/account/FindAccount/RecoverPwd.jsx";
import { SelectSignUp } from "../pages/account/SignUp/SelectSignUp.jsx";
import { SignUpChef } from "../pages/account/SignUp/SignUpChef.jsx";
import { SignUpCustomer } from "../pages/account/SignUp/SignUpCustomer.jsx";
import { ApiTest } from "../pages/ApiTest.jsx";
import Reserve from "../pages/chef/Reserve.jsx";
import { getToken } from "../token.jsx.js";

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
    path: "/findIdEmail",
    key: "/findIdEmail",
    element: <FindIdEmail />,
    theme: theme,
  },
  {
    path: "/findIdNumber",
    key: "/findIdNumber",
    element: <FindIdNumber />,
    theme: theme,
  },
  {
    path: "/findPwdEmail",
    key: "/findPwdEmail",
    element: <FindPwdEmail />,
    theme: theme,
  },
  {
    path: "/findPwdNumber",
    key: "/findPwdNumber",
    element: <FindPwdNumber />,
    theme: theme,
  },
  {
    path: "/recoverPwd",
    key: "/recoverPwd",
    element: <RecoverPwd />,
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
