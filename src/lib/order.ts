import * as _ from 'lodash';

export interface IOrderObject {
    data: Object;
    key: string[];
    direction: "asc" | "desc"
}

export const orderObject = (payload: IOrderObject) => {
    const { data, direction, key } = payload;
    return _.orderBy(data, key, direction)
}