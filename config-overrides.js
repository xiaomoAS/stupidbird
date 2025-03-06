/*
 * @Autor: jiangzupei
 * @Description: 
 * @Date: 2025-03-06 16:14:05
 * @LastEditors: jiangzupei1 jiangzupei1@jd.com
 * @LastEditTime: 2025-03-06 17:25:50
 * @FilePath: /stupidbird/config-overrides.ts
 */
// config-overrides.js (项目根目录)
const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components')
    // 添加其他需要的别名
  })
)
