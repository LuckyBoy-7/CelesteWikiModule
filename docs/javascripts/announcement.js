const announcements = [
    {
        text: "这里似乎有些奇怪的蔚蓝群",
        url: "/general/community/",
    },
    {
        text: "这里似乎有些奇怪的 Wiki",
        url: "/general/wiki/",
    },
    {
        text: "Any% 分段速通接力活动",
        url: "https://bbs.celemiao.com/d/471-miaonet-she-qu-any-fen-duan-su-tong-jie-li-huo-dong",
        target: "_blank"
    },
    {
        text: "~ 蔚蓝拾遗图鉴第一期活动 [初夏煦风] ~",
        url: "https://bbs.celemiao.com/d/433-wei-lan-shi-yi-tu-jian-di-yi-qi-huo-dong",
        target: "_blank"
    },
    {
        text: "~ 蔚蓝拾遗图鉴第二期活动 [寻迹拾光] ~",
        url: "https://bbs.celemiao.com/d/483-wei-lan-shi-yi-tu-jian-di-er-qi-huo-dong",
        target: "_blank"
    },
    {
        text: "❤孤单一人怎么办❤",
        url: "https://bbs.celemiao.com/d/357-wei-lan-lian-ji-qun-fu-miaonet-xiao-bai-shi-yong-zhi-nan",
        target: "_blank"
    },
    {
        text: "第一届蔚蓝制图小测😱",
        url: "/mappings/quiz/",
    },
    {
        text: "🍬糖糖的游🍬",
        url: "/activity/candy/",
    },
    {
        text: "看看外国友人在聊些什么👀",
        url: "https://discord.gg/6qjaePQ",
        target: "_blank"
    },
    {
        text: "在? 来点建议?",
        url: "https://wj.qq.com/s2/27815131/jx6r/",
        target: "_blank"
    }
];

const displayTime = 15 * 1000;   // 每条消息停留时间
const animationTime = 500;       // 滚动动画时间

let currentIndex = -1;
let currentLink = 0;

function getRandomAnnouncement() {
    let index;

    do {
        index = Math.floor(Math.random() * announcements.length);
    } while (
        index === currentIndex &&
        announcements.length > 1
        );

    currentIndex = index;
    return announcements[index];
}

function getLastAnnouncement() {
    return announcements[announcements.length - 1];
}

function setAnnouncement(link, announcement) {
    link.textContent = announcement.text;
    link.href = announcement.url;

    if (announcement.target) {
        link.target = announcement.target;
    } else {
        link.removeAttribute("target");
    }
}

function nextAnnouncement() {
    const links = document.querySelectorAll(".announcement-link");

    if (links.length !== 2) {
        return;
    }

    const current = links[currentLink];
    const next = links[1 - currentLink];

    const announcement = getRandomAnnouncement();

    /*
     * next 从上方进入
     */
    next.style.transition = "none";
    next.style.transform = "translateY(-160%)";

    setAnnouncement(next, announcement);

    // 强制浏览器应用初始位置
    next.offsetHeight;

    /*
     * 两个 link 同时向下移动
     */
    current.style.transition =
        `transform ${animationTime}ms ease`;

    next.style.transition =
        `transform ${animationTime}ms ease`;

    current.style.transform = "translateY(160%)";
    next.style.transform = "translateY(0)";

    // 下次交换角色
    currentLink = 1 - currentLink;
}

let announcementInterval = null;

function startTimer() {
    if (announcementInterval !== null) {
        return;
    }

    announcementInterval = setInterval(
        nextAnnouncement,
        displayTime + animationTime
    );
}

function stopTimer() {
    if (announcementInterval === null) {
        return;
    }

    clearInterval(announcementInterval);
    announcementInterval = null;
}

function startAnnouncement() {
    if (announcementInterval !== null) {
        return;
    }

    const links = document.querySelectorAll(".announcement-link");

    if (links.length !== 2 || announcements.length === 0) {
        return;
    }

    // 第一次消息
    // const first = getRandomAnnouncement();
    const first = getLastAnnouncement();
    setAnnouncement(links[0], first);

    // 第一个 link 在中央
    links[0].style.transform = "translateY(0)";

    // 第二个 link 藏在上方
    links[1].style.transform = "translateY(-160%)";

    currentLink = 0;

    startTimer();
}

let initialized = false;

document$.subscribe(() => {
    if (initialized) {
        return;
    }

    initialized = true;
    startAnnouncement();
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        // 离开页面，停止 timer
        stopTimer();
    } else {
        // 回到页面，重新开始计时
        startTimer();
    }
});