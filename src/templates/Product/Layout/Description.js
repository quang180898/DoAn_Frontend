import React, { useEffect, useState } from 'react';
import CardWrap from 'components/common/Card/CardWarp';
import { useSelector } from 'react-redux';

const Description = () => {

    const [state, setState] = useState()

    const store = useSelector(state => state.bookReducer)
    const { detailBook } = store

    useEffect(() => {
        if(detailBook) {
            if(detailBook.success) {
                setState(detailBook.detail)
            }
        }
    }, [detailBook])

    return (
        <CardWrap isHeight title="MÔ TẢ SẢN PHẨM">
            <div className="desc-product"> {state && state.description} </div>
        </CardWrap>
    )
}

export default Description;