import ItemModel from "../models/items";
import { Car } from '../interfaces/car.interface';


const getOrders = async (item:Car)  => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert;
};


export {getOrders};
