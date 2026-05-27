# Launch Checklist（上线检查清单）

## 开发前

- [x] 域名拍板：`playspeedcalc.net`。
- [x] 技术栈拍板：`Next.js`（React 建站框架）+ `Vercel`（部署平台）。
- [ ] 页面结构确认。
- [ ] MVP 功能确认。
- [ ] 竞品差异确认。

## 功能

- [ ] 原始时长输入正常。
- [ ] 常见倍速选择正常。
- [ ] 自定义倍速正常。
- [ ] 实际耗时计算正确。
- [ ] 节省时间计算正确。
- [ ] 预计完成时间计算正确。
- [ ] 倍速对比表正确。
- [ ] 复制结果正常。
- [ ] 示例输入正常。
- [ ] 移动端可用。

## SEO

- [ ] title 正确。
- [ ] description 正确。
- [ ] H1 正确。
- [x] canonical 正确，统一到 `https://www.playspeedcalc.net`。
- [x] sitemap.xml 可访问。
- [x] robots.txt 可访问。
- [ ] 页面正文可索引。
- [ ] 内链可点击。
- [ ] Privacy / Terms / Contact 可访问。

## 数据

- [ ] `GSC`（谷歌搜索控制台）准备提交。
- [ ] `Bing Webmaster`（必应站长工具）准备提交。
- [ ] `GA`（谷歌分析）接入，代码已预留 `NEXT_PUBLIC_GA_MEASUREMENT_ID`。
- [ ] `Clarity`（微软热力图）接入，代码已预留 `NEXT_PUBLIC_CLARITY_PROJECT_ID`。
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

- [ ] 提交 sitemap 到 GSC。
- [ ] 提交 sitemap 到 Bing Webmaster。
- [ ] 手动访问所有页面。
- [ ] 手机访问检查。
- [x] 记录上线日期：2026-05-28。
- [ ] 7 天后复盘。
