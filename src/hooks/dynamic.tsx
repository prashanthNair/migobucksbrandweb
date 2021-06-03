import React, { useState, useEffect } from 'react';
import Dropdown, { IDropdownOptionData } from '../components/Dropdown';
import Button from '../components/Button';

export enum IDataType {
    TEXT = "text",
    LIST = "list",
    NUMBER = "number",
    ARRAY = "array"
}

export interface IListData {
    name: string;
    value: string | number;
}

export type IData =
| { dataType: IDataType.LIST, 
    displayName: string;
    fieldName: string;
    filedPosition: number;
    data: IListData[]
}
| {
    dataType: IDataType.TEXT,
    displayName: string;
    fieldName: string; 
    filedPosition: number;
}
| {
    dataType: IDataType.NUMBER,
    displayName: string;
    fieldName: string; 
    filedPosition: number;
}

export interface IUseComponentTreeProps {
    data: IData[]
}

export const useDynamic = (props: IUseComponentTreeProps): JSX.Element | undefined => {
    const { data } = props;
    const [component, setComponent] = useState<JSX.Element>();

    useEffect(() => {
        const tree = data.map(el => {
            switch(el.dataType) {
                case IDataType.LIST: 
                    const option: IDropdownOptionData[] = el.data.map(({ name: label, value }) => { return { label, value } });
                    return (
                    <div className="form-group">
                        <label>{el.displayName}</label>
                        <Dropdown name={el.fieldName} options={option} />
                    </div>
                )
                case IDataType.NUMBER:
                    return (
                    <div className="form-group">
                        <label>{el.displayName}</label>
                        <input type="number" name={el.fieldName} />
                    </div>
                )
                case IDataType.TEXT:
                    return (
                        <div className="form-group">
                            <label>{el.displayName}</label>
                            <input type="text" name={el.fieldName} />
                        </div>
                    )
            } 
        });

        const formJsx = (
        <form className="add-product-form">
            { tree }
            <Button label="Submit" type="submit" variant="primary" />
        </form>
        )
        setComponent(formJsx);
    }, [data]);

    return component;
}