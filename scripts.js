/* 基本样式 */
body {
    font-family: '微软雅黑', sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f5e7e6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 导航栏样式 */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgb(162, 56, 56);
    color: #fff;
    padding: 10px 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .logo {
    font-size: 24px;
    font-family: '楷体', serif;
}

.navbar .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar .nav-links li {
    margin: 0 15px;
}

.navbar .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}

.navbar .nav-links a:hover {
    text-decoration: underline;
}

/* 首屏展示样式 */
.home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(162, 56, 56);
    color: #fff;
}

.home h1 {
    font-size: 48px;
    font-family: '楷体', serif;
}

.home h2 {
    font-size: 32px;
}

.home p {
    font-size: 20px;
}

/* 关于我样式 */
.about {
    padding: 50px 0;
    background-color: #fff;
}

.about h2 {
    font-size: 32px;
    font-family: '楷体', serif;
    text-align: center;
    margin-bottom: 20px;
}

.about p {
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
}

/* 专业经历样式 */
.experience, .skills, .projects, .education, .contact {
    padding: 50px 0;
    background-color: #f5e7e6;
}

.experience h2, .skills h2, .projects h2, .education h2, .contact h2 {
    font-size: 32px;
    font-family: '楷体', serif;
    text-align: center;
    margin-bottom: 20px;
}

.experience .job, .projects .project, .education .edu {
    margin-bottom: 30px;
}

.experience .job h3, .projects .project h3, .education .edu h3 {
    font-size: 24px;
    font-family: '楷体', serif;
    margin-bottom: 10px;
}

.experience ul, .skills ul {
    list-style: none;
    padding: 0;
}

.experience ul li, .skills ul li {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 10px;
}

/* 技能样式 */
.skills ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.skills li {
    margin: 10px;
    padding: 10px 20px;
    background-color: rgb(162, 56, 56);
    color: #fff;
    border-radius: 5px;
}

/* 项目展示样式 */
.projects .project p {
    font-size: 18px;
    line-height: 1.6;
}

/* 教育背景样式 */
.education .edu p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 10px;
}

/* 联系方式样式 */
.contact p {
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
}

.contact a {
    color: rgb(162, 56, 56);
    text-decoration: none;
}

.contact a:hover {
    text-decoration: underline;
}

/* 页脚样式 */
footer {
    background-color: rgb(162, 56, 56);
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

footer p {
    font-size: 16px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .navbar .nav-links {
        flex-direction: column;
        align-items: center;
    }

    .navbar .nav-links li {
        margin: 10px 0;
    }

    .home h1 {
        font-size: 36px;
    }

    .home h2 {
        font-size: 24px;
    }

    .home p {
        font-size: 16px;
    }

    .about h2, .experience h2, .skills h2, .projects h2, .education h2, .contact h2 {
        font-size: 28px;
    }

    .experience .job h3, .projects .project h3, .education .edu h3 {
        font-size: 20px;
    }

    .skills li {
        margin: 5px;
        padding: 5px 10px;
    }

    .contact p {
        font-size: 16px;
    }
}