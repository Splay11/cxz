class TreasureMap {
    static getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    reject("没有线索可以解码!");
                }
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    static searchTemple(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    reject("糟糕!遇到了神庙守卫!");
                }
                resolve("找到了一个神秘的箱子...");
            }, 2000);
        });
    }

    static findHiddenRoom(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    reject("没有找到隐藏的房间!");
                }
                resolve("发现了一个隐藏的房间，里面有个宝箱!");
            }, 2000);
        });
    }

    static openTreasureBoxWithTimer() {
        return new Promise((resolve) => {
            const timer = setTimeout(() => {
                resolve("时间到，宝箱打不开了!");
            }, 5000); // 5秒倒计时

            // 模拟打开宝箱
            setTimeout(() => {
                clearTimeout(timer);
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 3000); // 3秒后成功打开宝箱
        });
    }
}

async function findTreasure() {
    try {
        const clue = await TreasureMap.getInitialClue();
        console.log(clue);
        
        const location = await TreasureMap.decodeAncientScript(clue);
        console.log(location);
        
        const room = await TreasureMap.findHiddenRoom(location);
        console.log(room);
        
        const treasure = await TreasureMap.openTreasureBoxWithTimer();
        console.log(treasure);
    } catch (error) {
        console.error("任务失败:", error);
    }
}

findTreasure();
