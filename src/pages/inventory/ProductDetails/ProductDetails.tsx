import React from 'react';
import TextBox from '../../../components/text-box/text-box';
import Select from '../../../components/Select/Select';
const data = require('../../../mockdata/data');

function ProductDetails() {
  console.log(data);

  let generateFields = ()=>{

    let fields = "";

    return(
    data.data.map((item:any)=>{
      
      if(item.dataType == "text")
      {
        return <div><TextBox label={item.displayName} id={item.displayName} name={item.fieldName} type={item.dataType} placeholder={item.displayName}/></div>;
      }
      else if(item.dataType == "list")
      {
        // alert(JSON.stringify(item.data));
        return <div><Select label={item.displayName} name={item.fieldName} placeholder={item.displayName} options={item.data}/></div>;
      }
      else if(item.dataType == "number")
      {
        // alert(JSON.stringify(item.data));
        return <div><TextBox label={item.displayName} id={item.displayName} name={item.fieldName} type={item.dataType} placeholder={item.displayName}/></div>;
      }

    }));

  }

  return (
    <div>
      <span>{"Product details has to be here"}</span>
      {generateFields()}
    </div>
  );
}

export default ProductDetails;
