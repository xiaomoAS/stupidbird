/*
 * @Autor: jiangzupei
 * @Description: 
 * @Date: 2025-02-17 10:50:32
 * @LastEditors: jiangzupei1 jiangzupei1@jd.com
 * @LastEditTime: 2025-03-06 17:32:45
 * @FilePath: /stupidbird/src/pages/Home.tsx
 */
import React, { useEffect, useState } from 'react'
import api from '@/api'
import './style.scss'

export const Home = () => {
  const [data, setData] = useState(null)

  const initData = async () => {
    try {
      const res = await api.post('//47.93.184.12/apis/hello')
      
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div>
      <div className="home-box">Home</div>
      <div>{ data }</div>
      {/* <micro-app name='my-app' url='https://trade-order-jdm.jd.com/orderList/waitOut'></micro-app> */}
    </div>
  )
}
