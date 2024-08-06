import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAPIData } from '../../redux/action/action'

const ShopApiData = () => {
           const {loading,apiStoreData,error} = useSelector(state=>state.api);
           const dispatch = useDispatch();
           console.log(apiStoreData)
    useEffect(()=>{
        dispatch(getAPIData())
    },[dispatch]);
    if(loading){
        return<p>...loading</p>
    }
    if (error) return <p>Error: Api data anable to call</p>;
  return (
    <div>
        <div className='mainStore'>
            <div className='storeElementCombiner'>
                 afdaf
            </div>
            <div className='storeCardComponentShop'>
                {
                   apiStoreData && apiStoreData.map((item,i)=>{
                    return<>
                    <div className='shopCard' key={i}>
                        <img src={item.image} alt="" />
                    </div>
                    </>
                   }) 
                }
            </div>
        </div>
    </div>
  )
}

export default ShopApiData
