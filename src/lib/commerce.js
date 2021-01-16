import Commerce from '@chec/commerce.js'
const commerce = new Commerce(process.env.REACT_APP_COMMERCE_JS_PUBLIC_KEY,true);
export default commerce;