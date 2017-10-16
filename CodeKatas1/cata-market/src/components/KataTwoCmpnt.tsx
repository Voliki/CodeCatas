import * as React from 'react';

export interface IKataTwoCmpnt {

}

export class KataTwoCmpnt extends React.Component<IKataTwoCmpnt, any>{
    constructor(){
        super();
    }
    readForm: any;

    generateNumber(){
        return;
    }

    render(){
        return(
            <form className = 'container col-xl-5 col-lg-7 col-md-7'
            ref = {(form)=>{this.readForm = form}}>
                <span>
                    Kata 2
                </span>
            </form>
        )
    }
}