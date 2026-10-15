const expandedPaths = [
    ["制图", "基础"],
    ["制图", "进阶"],
    ["制图", "收尾阶段"],
    ["制图", "基础", "Loenn"],
];

function getTitle(item) {
    return item.querySelector(
        ":scope > .md-nav__link"
    )?.innerText.trim() ?? "";
}

function getNavPath(item) {
    const path = [];

    let current = item;

    while (current) {
        if (current.matches(".md-nav__item--nested")) {
            path.unshift(getTitle(current));
        }

        current = current.parentElement?.closest(
            ".md-nav__item--nested"
        );
    }

    return path;
}

function expandSections() {
    for (const item of document.querySelectorAll(
        ".md-nav__item--nested"
    )) {
        const path = getNavPath(item);

        const shouldExpand = expandedPaths.some(
            expected =>
                expected.length === path.length &&
                expected.every(
                    (title, index) => title === path[index]
                )
        );

        if (!shouldExpand) {
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