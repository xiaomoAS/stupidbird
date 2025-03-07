/*
 * @Autor: jiangzupei
 * @Description: 
 * @Date: 2025-02-17 10:50:32
 * @LastEditors: jiangzupei1 jiangzupei1@jd.com
 * @LastEditTime: 2025-03-07 18:11:10
 * @FilePath: /stupidbird/src/pages/Home/Home.tsx
 */
import React, { useEffect, useState } from 'react'
import api from '@/api'
import SideMenu from '../SideMenu/SideMenu'
import { MENU_MAP } from './constants'
import './style.scss'

export const Home = () => {
  const [data, setData] = useState(null)
  const [activeMenu, setMenu] = useState(null)

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

  const handleMenuSelect = (key: string) => {
    setMenu(key)
  }

  return (
    <div>
      <div className="home-box">
        <div className="home-box__header">
          <div>{ data }</div>
        </div>
        <div className="flex-box">
          <div className="side-menu">
            <SideMenu onMenuSelect={handleMenuSelect} />
          </div>
          <div className="main">
            <micro-app name='my-app' url={MENU_MAP[activeMenu]}></micro-app>
          </div>
        </div>
      </div>
    </div>
  )
}
