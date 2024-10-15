import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .required('Product name is required')
      .min(3, 'Product name must be at least 3 characters')
      .max(50, 'Product name must be no more than 50 characters'),
  
    productPrice: Yup.number()
      .typeError('Price must be a number')
      .required('Product price is required')
      .positive('Price must be greater than 0')
      .integer('Price must be an integer'),
  
    productDescription: Yup.string()
      .required('Product description is required')
      .min(10, 'Description must be at least 10 characters')
      .max(300, 'Description must be no more than 300 characters')
  });