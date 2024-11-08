function objectProject(src, proto) {

    const projected = {};

    for (const i in proto) {
        if (i in src) {
            if (typeof proto[i] === 'object' && proto[i] !== null) {
                projected[i] = objectProject(src[i], proto[i]);
            } else {
                projected[i] = src[i];
            }
        }
    }

    return projected;
}

const src = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12
};

const proto = {
    prop11: {
        prop22: null
    }
};

const projected = objectProject(src, proto);
console.log(projected);