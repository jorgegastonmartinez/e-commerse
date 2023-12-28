import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="CartIcon">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
                <p>14</p>
            </div>
  )
}

export default CartWidget;
