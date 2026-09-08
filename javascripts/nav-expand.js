const expandedSections = [
    "基础",
    "进阶",
    "收尾阶段",
    "其他",
];

function expandSections() {
    for (const item of document.querySelectorAll(
        ".md-nav__item--nested"
    )) {
        const title = item.innerText
            .split("\n")[0]
            .trim();

        if (!expandedSections.includes(title)) {
            continue;
        }

        const toggle = item.querySelector(
            ":scope > .md-nav__toggle"
        );

        if (toggle) {
            toggle.checked = true;
        }
    }
}

function scrollToActive() {
    const scrollwrap = document.querySelector(
        ".md-sidebar__scrollwrap"
    );

    const active = document.querySelector(
        ".md-nav__item--active"
    );

    if (!scrollwrap || !active) {
        return;
    }

    let lastTop = active.getBoundingClientRect().top;
    let lastChange = performance.now();

    function update() {
        if (!document.contains(active)) {
            return;
        }

        const activeTop = active.getBoundingClientRect().top;
        const now = performance.now();

        // Material / 页面已经 200ms 没有改变 active 的位置
        if (Math.abs(activeTop - lastTop) < 0.1) {
            if (now - lastChange >= 200) {
                return;
            }
        } else {
            lastTop = activeTop;
            lastChange = now;
        }

        const scrollRect = scrollwrap.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();

        const target =
            scrollRect.top +
            (scrollRect.height - activeRect.height) / 2;

        const delta = activeRect.top - target;

        if (Math.abs(delta) >= 1) {
            scrollwrap.scrollTop += delta;
        }

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

document$.subscribe(() => {
    expandSections();

    requestAnimationFrame(scrollToActive);
});