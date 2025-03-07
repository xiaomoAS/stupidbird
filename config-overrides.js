/*
 * @Autor: jiangzupei
 * @Description: 
 * @Date: 2025-03-06 16:14:05
 * @LastEditors: jiangzupei1 jiangzupei1@jd.com
 * @LastEditTime: 2025-03-07 18:36:29
 * @FilePath: /stupidbird/config-overrides.js
 */
const path = require('path')
const {
  override,
  addWebpackAlias,
  overrideDevServer,
  addWebpackModuleRule
} = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components')
    }),
    // 添加其他webpack配置...
  ),
  devServer: overrideDevServer(config => ({
    ...config,
    headers: {
      ...config.headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    allowedHosts: "all"
  }))
}
