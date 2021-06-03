import React from 'react';
import { useDynamic, IData } from '../../../hooks/dynamic';
import styles from './Product.module.scss';
import './dynamic.css';

export const data: IData[] = [
    {
        "displayName": "Brand",
        "dataType": "text",
        "fieldName": "brandName",
        "filedPosition": 1,
    },
    {
        "displayName": "Company Type",
        "dataType": "list",
        "fieldName": "companyType",
        "filedPosition":2,
        "data": [
            {
                "value": "1",
                "name": "Public"
            },
            {
                "value": "3",
                "name": "Private"
            },
            {
                "value": "5",
                "name": "None"
            }
        ]
    },
    {
        "displayName": "Shelf Life",
        "dataType": "list",
        "fieldName": "shelfLife",
        "filedPosition":2,
        "data": [
            {
                "value": "1",
                "name": "1 KG"
            },
            {
                "value": "2",
                "name": "2 KG"
            },
            {
                "value": "3",
                "name": "3 KG"
            },
            {
                "value": "4",
                "name": "4 KG"
            },
            {
                "value": "5",
                "name": "5 KG"
            },
            {
                "value": "6",
                "name": "6 KG"
            }
        ]
    },
    {
        "displayName": "Max.Retail Price(INR)",
        "dataType": "number",
        "fieldName": "mrp",
        "filedPosition": 3,
    },
    {
        "displayName": "Loyalty Point%",
        "dataType": "number",
        "fieldName": "loyaltyPoint",        
        "filedPosition":10,
    },
    {
        "displayName": "InStock",
        "dataType": "number",
        "fieldName": "inStock",
        "filedPosition":5,
    },
]


function AddProductPage() {
    const components = useDynamic({ data })
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <h1>Add New Product</h1>
            </div>
            <div className={styles['content']}>
                {components}
            </div>
        </div>
    )
}

export default AddProductPage
