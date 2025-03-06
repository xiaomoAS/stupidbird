/*
 * @Autor: jiangzupei
 * @Description: 
 * @Date: 2025-03-06 15:42:14
 * @LastEditors: jiangzupei1 jiangzupei1@jd.com
 * @LastEditTime: 2025-03-06 15:47:08
 * @FilePath: /stupidbird/src/api/index.ts
 */
import axios from 'axios';

const server = axios.create({
  timeout: 60000, // 设置请求超时设置
});

export default server;