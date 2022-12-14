import React, { useState, useEffect } from 'react';  
import Dropdown, { IDropdownOptionData } from '../components/Dropdown';
export type DataType = "list" | "text" | "number";
export interface IListData {
    name: string;
    value: string | number;
}

export type IData =
| { dataType: "list", 
    displayName: string;
    fieldName: string;
    filedPosition: number;
    data: IListData[]
}
| {
    dataType: "text",
    displayName: string;
    fieldName: string; 
    filedPosition: number;
}
| {
    dataType: "number",
    displayName: string;
    fieldName: string; 
    filedPosition: number;
}

export interface IUseComponentTreeProps {
    data: IData[]
}

export const useDynamic = (props: IUseComponentTreeProps): JSX.Element[] | undefined => {
    const { data } = props;
    const [component, setComponent] = useState<JSX.Element[]>();

    useEffect(() => {
        const tree = data.map(el => {
            switch(el.dataType) {
                case 'list': 
                    const option: IDropdownOptionData[] = el.data.map(({ name: label, value }) => { return { label, value } });
                    return (
                    <div className="form-group">
                        <label>{el.displayName}</label>
                        <Dropdown name={el.fieldName} options={option} />
                    </div>
                )
                case 'number':
                    return (
                    <div className="form-group">
                        <label>{el.displayName}</label>
                        <input type="number" name={el.fieldName} />
                    </div>
                )
                case 'text':
                    return (
                        <div className="form-group">
                            <label>{el.displayName}</label>
                            <input type="text" name={el.fieldName} />
                        </div>
                    )
            } 
        });

        setComponent(tree);
    }, [data]);

    return component;
}