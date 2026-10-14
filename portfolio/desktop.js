const desktop=document.querySelector('#desktop'),content=document.querySelector('#desktop-content');
const projectInfo={
 vehicle:{title:'WasteGo · 无人运输舱',role:'项目负责人 · 技术开发',src:'projects/vehicle/index.html',note:'完整前端概念演示：模拟扫码与货品比对、装卸动画、联锁。未接入实车、传感器或自动驾驶。'},
 city:{title:'WasteGo · 城市运营工作台',role:'项目负责人 · 技术开发',src:'projects/city/index.html#/twin/kowloon',note:'原项目页面 + 公开演示适配：地图需联网；业务数据和模型为合成样例，未连接真实订单、AI 识别与生成服务。'},
 pharmacy:{title:'药位 ShelfPilot · 三维药房',role:'联合创始人 · 技术开发负责人',src:'projects/pharmacy/index.html',note:'复用实际场景与布局模块，以合成包装演示查找与聚焦；没有真实门店照片、库存或上传识别服务。'}
};
let previousFocus=null;
const $=(s)=>document.querySelector(s);
function heading(kicker,title,desc){return `<div class="desk-heading"><div><span class="overline">${kicker}</span><h2>${title}</h2><p>${desc}</p></div><span class="count">CHEN LIEPENG / 2026</span></div>`}
function projects(){return heading('SELECTED WORK','作品文件夹','近期项目与之前的开发记录。点击项目，直接操作演示。')+`<div class="project-grid">${[
 ['vehicle','01 / INTERACTIVE 3D','无人运输舱','预约验货、装卸顺序与异常联锁。','Vue · Three.js'],
 ['city','02 / MAP & WORKFLOW','城市运营工作台','回收地图、物品预检、模型与装载回放。','Vue · MapLibre · Three.js'],
 ['pharmacy','03 / SPATIAL INTERFACE','药位 ShelfPilot','把货架空间与找药交互放到同一视图。','React · Three.js']
].map(([id,n,t,p,stack])=>`<button class="project-card" data-project="${id}"><img class="project-thumb" src="portfolio/thumbs/${id}.svg" alt="${t}示意插画" loading="lazy"><div class="card-copy"><small>${n}</small><h3>${t}</h3><p>${p}</p><div class="card-bottom"><span>${stack}</span><b>打开 ↗</b></div></div></button>`).join('')}</div><section class="old-projects"><h3>EARLIER WORK / 之前的项目</h3><div class="old-grid"><article><time>2022.04—2023.06</time><b>区域护康宝小程序</b><p>项目负责人。负责团队任务分工、接口文档编写、后端接口搭建及测试；获网络系第九期 SRTP 项目优秀奖。当前依据为原简历及项目展示材料。</p></article><article><time>2021.09—2022.01</time><b>守愿箱</b><p>面向留守儿童的微信小程序，含“心灵树洞”“心灵家园”等功能。已有材料证明本人负责项目文档与功能说明整理，模块开发范围待进一步核实。</p></article></div></section>`}
function profile(){return heading('ABOUT ME','陈烈鹏','香港理工大学 · MTE 硕士在读')+`<div class="profile-copy"><p>软件开发与三维交互。近期负责药位 ShelfPilot 和 WasteGo 的技术开发，商业部分由合作伙伴负责。</p><h3>开发经历</h3><div class="experience"><b>中国联通广州分公司 · Web 开发</b><p>2022.07—2023.12</p><p>参与部门内部需求与业务流程梳理；使用 Vue.js 与 Spring Boot 开发内部 Web 工具。开发成果由企业导师集成至部门网站，并投入实际使用。</p><small>上述概括性经历的对外披露许可待确认；无内部代码、截图和业务数据。</small></div><h3>技术实践</h3><p>Vue.js、Spring Boot 的 Web 工具开发；近期项目使用 React / TypeScript、Node.js、Three.js，并涉及 MapLibre 和 SQLite。具备 Java、MySQL 基础。</p><h3>项目职责</h3><p>ShelfPilot：联合创始人、技术开发负责人。围绕照片整理、近似空间展示和找药交互开发。当前仍需人工核对，尚未完成商业验收。</p><p>WasteGo：项目负责人、技术开发。围绕地图、物品预检、模型查看与运输舱交互开发。当前为软件原型，实车控制与硬件联调需进一步验证。</p><p>近期项目起止月份待确认。</p><p><a href="resume.pdf" target="_blank" rel="noopener">查看一页中文简历 ↗</a> · <a href="mailto:26063138g@connect.polyu.hk">26063138g@connect.polyu.hk</a></p></div>`}
function blog(){return heading('NOTES & JOURNAL','博客与记录','开发之外，也记录观察、学习与生活。')+`<div class="blog-list"><a href="posts/hong-kong-waste-management.html" target="_blank" rel="noopener"><b>香港垃圾管理与回收观察</b><small>阅读文章 ↗</small></a><a href="journal.html" target="_blank" rel="noopener"><b>之前的博客</b><small>打开原有文章目录 ↗</small></a></div>`}
function contact(){return heading('GET IN TOUCH','联系我','陈烈鹏 / 香港理工大学 MTE 硕士在读')+`<div class="profile-copy"><h3>邮箱</h3><p><a href="mailto:26063138g@connect.polyu.hk">26063138g@connect.polyu.hk</a></p><h3>电话</h3><p>+852 9889 0407</p><h3>网站代码</h3><p><a href="https://github.com/clpblog/clgBlog.github.io" target="_blank" rel="noopener">GitHub ↗</a></p></div>`}
function show(section='projects'){
 if(section in projectInfo){const p=projectInfo[section];content.innerHTML=`<div class="project-detail"><header class="project-detail-header"><div><h2>${p.title}</h2><p>${p.role}</p></div><a href="${p.src}" target="_blank" rel="noopener">独立窗口打开 ↗</a></header><iframe src="${p.src}" title="${p.title}交互演示" loading="eager" allow="fullscreen"></iframe><div class="demo-note">${p.note}</div></div>`;}
 else content.innerHTML=({projects,profile,blog,contact}[section]||projects)();
 content.scrollTop=0;
 document.querySelectorAll('.desktop-sidebar button').forEach(b=>b.classList.toggle('active',b.dataset.section===section||(section in projectInfo&&b.dataset.section==='projects')));
}
export function openDesktop(section='projects'){
 if(!desktop.open){previousFocus=document.activeElement;desktop.showModal();document.body.classList.add('desk-open');window.dispatchEvent(new CustomEvent('workspace-visibility',{detail:true}));}
 show(section);
}
function closed(){content.replaceChildren();document.body.classList.remove('desk-open');window.dispatchEvent(new CustomEvent('workspace-visibility',{detail:false}));previousFocus?.focus()}
desktop.addEventListener('close',closed);$('#close-desktop').onclick=()=>desktop.close();
document.addEventListener('click',e=>{const el=e.target.closest('[data-section],[data-project]');if(el)openDesktop(el.dataset.project||el.dataset.section)});
$('#enter-workspace').onclick=()=>openDesktop();
const time=()=>$('#desk-clock').textContent=new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false});time();setInterval(time,60000);
const routes={'#blog':'blog','#projects':'projects','#vehicle':'vehicle','#city':'city','#pharmacy':'pharmacy','#personal-profile':'profile','#work-experience':'profile','#capabilities':'profile','#github':'contact'};
if(routes[location.hash])openDesktop(routes[location.hash]);
