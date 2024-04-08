import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice"
import { useDispatch } from "react-redux"
function DeleteItem({ pizzaId }) {
    const dispatch = useDispatch()
    return (
        <div>
            <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
        </div>
    )
}

export default DeleteItem
