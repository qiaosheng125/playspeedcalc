# Analytics Setup（统计工具接入）

## 当前方案

- `GSC`（Google Search Console，谷歌搜索控制台）：用于看 Google 收录、曝光、点击、查询词和页面表现。
- `GA4`（Google Analytics 4，谷歌分析 4）：用于看访问量、来源、设备、页面浏览和基础用户行为。
- `Clarity`（Microsoft Clarity，微软热力图）：用于看录屏、热力图、点击位置和页面体验问题。

## 代码接入方式

网站已经预留两个环境变量：

| 环境变量 | 中文解释 | 来源 |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 衡量 ID，通常以 `G-` 开头 | `GA4` Web data stream |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Clarity 项目 ID | `Clarity` 项目设置 |

这两个值不要硬编码进代码。上线时在 `Vercel`（部署平台）的项目环境变量里填写，然后重新部署。

## GSC 操作记录

- 推荐属性类型：`Domain property`（域名资源）。
- 验证方式：DNS TXT 记录。
- 域名填写：`playspeedcalc.net`，不要加 `https://`，不要加 `www`。
- DNS 管理位置：`Cloudflare`（DNS 和安全服务）。
- sitemap 提交地址：`https://www.playspeedcalc.net/sitemap.xml`。

## GA4 操作记录

- 创建 `GA4` Property（媒体资源）。
- 创建 Web data stream（网页数据流）。
- Website URL（网站地址）填写：`https://www.playspeedcalc.net`。
- Stream name（数据流名称）可填：`PlaySpeedCalc`。
- 拿到 `Measurement ID`（衡量 ID）后填入 `NEXT_PUBLIC_GA_MEASUREMENT_ID`。

## Clarity 操作记录

- 新建项目。
- Website URL（网站地址）填写：`https://www.playspeedcalc.net`。
- 项目名称可填：`PlaySpeedCalc`。
- 拿到 Project ID（项目 ID）后填入 `NEXT_PUBLIC_CLARITY_PROJECT_ID`。
