import * as React from 'react';

export interface IPriceCmpnt{
    sum?:number;

    count?: (num:any)=>void;
}

export class PriceCmpnt extends React.Component<IPriceCmpnt, any>{
    constructor(){
        super();
    }

    readForm: any;

    readingData(){
        let form = this.readForm;
        let countObject = {};
        let price = form['price'].value.trim() === null ? Number(form['price'].value = 0 ): Number(form['price'].value.trim());
        let count = form['count'].value.trim() === null ? Number(form['price'].value = 0) : Number(form['count'].value.trim());
        let quantityPurchased = form['quantityPurchased'].value.trim() === null ? Number(form['price'].value = 0) : Number(form['quantityPurchased'].value.trim());

        countObject = {
            price: price,
            count: count,
            quantityPurchased: quantityPurchased 
        };

        return countObject;
    }

    render(){
       return (
        <form className = 'container col-xl-5 col-lg-7 col-md-7'
            ref = {(form)=>{this.readForm = form}}
        >
            <div className='row '>
                <label className='col-7'>Цена </label>
                <input 
                    name = 'price'
                    className = 'col-3'
                    type = 'text'
                />
            </ div>
            <div className='row '>
                <label className='col-7 '>Количество товара </label>
                <input
                    name = 'count'
                    className = 'col-3'
                    type = 'text'
                />
            </ div>
            <div className='row '>
                <label className='col-7 '>Кол-во покупаемого товара </label>
                <input
                    name = 'quantityPurchased'
                    className = 'col-3'
                    type = 'text'
                />
            </ div>
            <div className='row justify-content-center '>
                <input
                    className = 'col-3'
                    type = 'button'
                    value = 'Посчитать'
                    onClick ={()=>{
                       this.props.count(this.readingData())
                    }}
                />
            </ div>
            <div className='row '>
                <label className='col-7 '>Стоимость </label>
                <label className='col-3 '>{this.props.sum || 0} </label>
            </ div>
        </ form> 
       )
    }
}