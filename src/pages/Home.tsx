/*
 * @Autor: jiangzupei
 * @Description: 
 * @Date: 2025-02-17 10:50:32
 * @LastEditors: jiangzupei1 jiangzupei1@jd.com
 * @LastEditTime: 2025-03-04 15:15:34
 * @FilePath: /stupidbird/src/pages/Home.tsx
 */
import React from 'react'
import './style.scss'

export const Home = () => {
  return (
    <div>
      <div className="home-box">Home</div>
      <micro-app name='my-app' url='http://localhost:3000/'></micro-app>
    </div>
  )
}
