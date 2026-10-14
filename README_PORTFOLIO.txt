陈烈鹏 · 三维工作室 / 本地审阅版

入口：index.html 是三维房间；blog.html 打开同一工作台的博客文件夹；journal.html 保留之前的博客。
运行：双击“启动本地预览.cmd”，浏览器打开 http://127.0.0.1:8771/ 。关闭命令窗口会停止服务。
不要用 file:// 直接打开三维模块。已包含构建产物，无需安装依赖即可预览。

维护：npm install 后 npm run build；npm test 运行布局与规则测试。
新房间源文件：portfolio/room.js、room.css、desktop.js。
完整无人车公开源快照：portfolio/apps/vehicle；城市公开适配：portfolio/apps/city。
构建输出：projects/vehicle、projects/city、projects/pharmacy。
原始来源哈希：portfolio/apps/source-origins.json；与原件不同的公开适配由 public-adaptations.txt 说明。

无人车：保留完整前端交互；无真实车辆、识别或控制器连接。
城市：公开地理底图需要联网。业务数值和模型为合成样例；未带真实订单、账号、调查照片、云服务密钥或原始楼宇数据。地图第三方服务不可用时会影响底图/路线。
药房：仅实际渲染与布局代码 + 合成包装；无真实照片、库存或 AI 识别服务。

简历已恢复原蓝白样式，保留照片与四项项目；联通写“Web 开发 / 2022.07—2023.12”，删除“希望”句。
待确认：近期项目月份、联通概述公开许可；旧项目角色与技术分工的不足仍按材料说明。
未进行 Git 提交、推送或网站发布。
