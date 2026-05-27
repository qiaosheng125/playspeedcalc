# Launch Checklist（上线检查清单）

## 开发前

- [x] 域名拍板：`playspeedcalc.net`。
- [x] 技术栈拍板：`Next.js`（React 建站框架）+ `Vercel`（部署平台）。
- [x] 页面结构确认。
- [x] MVP 功能确认。
- [ ] 竞品差异确认。

## 功能

- [x] 原始时长输入正常。
- [x] 常见倍速选择正常。
- [x] 自定义倍速正常。
- [x] 实际耗时计算正确。
- [x] 节省时间计算正确。
- [x] 预计完成时间计算正确。
- [x] 倍速对比表正确。
- [x] 复制结果正常。
- [x] 示例输入正常。
- [ ] 移动端可用。

## SEO

- [x] title 正确。
- [x] description 正确。
- [x] H1 正确，使用 `Playback Speed Calculator`。
- [x] canonical 正确，统一到 `https://www.playspeedcalc.net`。
- [x] sitemap.xml 可访问。
- [x] robots.txt 可访问。
- [x] 页面正文可索引。
- [x] 内链可点击。
- [x] Privacy / Terms / Contact 可访问。

## 数据

- [x] `GSC`（谷歌搜索控制台）已添加 `playspeedcalc.net` 域名资源。
- [ ] `Bing Webmaster`（必应站长工具）准备提交。
- [x] `GA`（谷歌分析）接入成功，Measurement ID：`G-4CYCN9S7W9`。
- [x] `Clarity`（微软热力图）接入成功，Project ID：`wxsiknpktp`。
- [ ] 核心计算事件可记录。

## 部署

- [x] GitHub 仓库创建：https://github.com/qiaosheng125/playspeedcalc
- [x] Vercel 项目创建：https://playspeedcalc.vercel.app
- [ ] 环境变量检查。
- [x] 域名 DNS 已在阿里云切到 Cloudflare。
- [x] Cloudflare Nameserver 设置为 `everton.ns.cloudflare.com` 和 `mona.ns.cloudflare.com`。
- [x] Cloudflare DNS 配置。
- [x] 正式域名可访问：https://playspeedcalc.net，并跳转到 `https://www.playspeedcalc.net`。
- [x] HTTPS 正常。

## 上线后

- [x] 提交 sitemap 到 GSC：`https://www.playspeedcalc.net/sitemap.xml`。
- [ ] 提交 sitemap 到 Bing Webmaster。
- [ ] 手动访问所有页面。
- [ ] 手机访问检查。
- [x] 记录上线日期：2026-05-28。
- [ ] 7 天后复盘。
