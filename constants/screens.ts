import AddProduct from '../screens/AddProduct'
import ProductDetails from '../screens/ProductDetails'
import Products from '../screens/Products'
import * as routes from './routes'

export type RootStackParamList = {
    [route: string]: any
    ProductDetails: { id: string };
  }

  export const screensConfig = () => {
    const pages = [
      {
        name: routes.Products,
        Component: Products,
        options: {
          headerShown: true,
          headerTitle: 'Shop Store'
        },
      },
      {
        name: routes.ProductDetails,
        Component: ProductDetails,
        options: {
          headerShown: true,
          headerTitle: ' '
        },
      },
      {
        name: routes.AddProduct,
        Component: AddProduct,
        options: {
          headerShown: true,
          headerTitle: 'Add Product'
        },
      },
    ]
  
    return pages.map((item) => ({
      ...item,
      options: {
        ...(item.options || {}),
      },
    }))
  }  