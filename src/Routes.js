import PersonalisedProduct from "../src/pages/personalisedProductPage"
import PersonalisedCategory from "../src/pages/personalisedCategoryPage"
import Home from "../src/pages/home"
import Layout from "./Layout"

export const ParentRoute = [
    {
        component: Layout
    }
];

export const getRoutes = () => {
    return [
        {
            path: "/",
            exact: true,
            component: Home
        },
        {
            path: "/personalisedProduct",
            exact: true,
            component: PersonalisedProduct
        },
        {
            path: "/personalisedCategory",
            exact: true,
            component: PersonalisedCategory
        }
        // {
        //     // eslint-disable-next-line react/display-name
        //     render: () => (
        //       <RedirectToHomeComponent locale={locale}></RedirectToHomeComponent>
        //     ),
        //     exact: true
        //   }
    ]
};